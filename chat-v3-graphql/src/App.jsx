import { useState, useEffect, useRef } from "react";
import "react-chat-elements/dist/main.css";
import { ChatList } from "react-chat-elements";
import { MessageBox } from "react-chat-elements";
import avatar from "./assets/avatar.png";
import Dropdown from "./components/Dropdown";
import DropdownChat from "./components/DropdownChat";
import { FaPlus } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

const JSON_CHAT_LIST = [
  {
    avatar: avatar,
    alt: "cristian_avatar",
    title: "Cristian",
    subtitle: "¡Bien, gracias!",
    date: "2024-05-24T10:31:00Z",
    unread: 0,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
    alt: "kursat_avatar",
    title: "Kursat",
    subtitle: "¡Bien, gracias!",
    date: "2024-05-24T10:31:00Z",
    unread: 0,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/41473129?v=4",
    alt: "emre_avatar",
    title: "Emre",
    subtitle: "Todo bien, gracias!",
    date: "2024-05-24T10:31:00Z",
    unread: 0,
  },
];
const JSON_CHAT_MESSAGES = {
  "Cristian-Kursat": [
    {
      id: 1,
      user: "Cristian",
      type: "text",
      title: "Cristian",
      text: "Hola, ¿cómo estás?",
      fechaHora: "2024-05-24T10:30:00Z",
      estate: "read",
    },
    {
      id: 2,
      user: "Kursat",
      type: "text",
      title: "Kursat",
      text: "¡Bien, gracias!",
      fechaHora: "2024-05-24T10:31:00Z",
      estate: "read",
    },
  ],
  "Cristian-Emre": [
    {
      id: 1,
      user: "Cristian",
      type: "text",
      title: "Cristian",
      text: "Hey Bro como estas??",
      fechaHora: "2024-05-24T10:30:00Z",
      estate: "read",
    },
    {
      id: 2,
      user: "Emre",
      type: "text",
      title: "Emre",
      text: "Todo bien, gracias!",
      fechaHora: "2024-05-24T10:31:00Z",
      estate: "read",
    },
  ],
  "Kursat-Emre": [
    {
      id: 1,
      user: "Kursat",
      type: "text",
      title: "Kursat",
      text: "Hey Bro como estas??",
      fechaHora: "2024-05-24T10:30:00Z",
      estate: "read",
    },
    {
      id: 2,
      user: "Emre",
      type: "text",
      title: "Emre",
      text: "Todo bien, gracias!",
      fechaHora: "2024-05-24T10:31:00Z",
      estate: "read",
    },
  ],
};
// localStorage.removeItem("chatList");
// localStorage.setItem("chatMessages", JSON.stringify(JSON_CHAT_MESSAGES));
// localStorage.setItem("chatList", JSON.stringify(JSON_CHAT_LIST));
function App() {
  const chatMessages = localStorage.getItem("chatMessages");
  const chatList = localStorage.getItem("chatList");
  const [jsonChatMessages, setJsonChatMessages] = useState(
    chatMessages ? JSON.parse(chatMessages) : JSON_CHAT_MESSAGES
  );
  const [jsonChatList, setJsonChatList] = useState(
    chatList ? JSON.parse(chatList) : JSON_CHAT_LIST
  );
  const [currentUser, setCurrentUser] = useState("Cristian"); // Usuario actual
  const [chatSelected, setChatSelected] = useState("Kursat"); // Chat seleccionado

  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(jsonChatMessages));
  }, [jsonChatMessages]);

  useEffect(() => {
    localStorage.setItem("chatList", JSON.stringify(jsonChatList));
    scrollToBottom();
  }, [jsonChatList]);

  const handleChatSelected = (chatSelect) => {
    setChatSelected(chatSelect);
    const updatedChatList = jsonChatList.map((chat) => {
      if (chat.title === chatSelect) {
        return { ...chat, unread: 0 };
      }
      return chat;
    });
    setJsonChatList(updatedChatList);
  };

  const hadlekeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    const message = document.querySelector("textarea").value;

    if (!message) return;

    setJsonChatMessages((prevState) => {
      let chatKey = `${currentUser}-${chatSelected}`;
      if (!jsonChatMessages[chatKey])
        chatKey = `${chatSelected}-${currentUser}`;
      //count messages
      const id = jsonChatMessages[chatKey].length + 1;

      const newMessage = {
        id: id,
        user: currentUser,
        type: "text",
        title: currentUser,
        text: message,
        fechaHora: new Date().toISOString(),
      };

      const newChatMessages = [...(prevState[chatKey] || []), newMessage];

      // Actualizar el número de mensajes no leídos
      const updatedChatList = jsonChatList.map((chat) => {
        if (chat.title === currentUser) {
          return {
            ...chat,
            subtitle: message,
            unread: chat.unread + 1,
            date: new Date().toISOString(),
          };
        }
        if (chat.title === chatSelected) {
          return {
            ...chat,
            subtitle: "you: " + message,
            unread: 0,
            date: new Date().toISOString(),
          };
        }
        return chat;
      });

      setJsonChatList(updatedChatList);

      //agregando tambien al mismo chat pero sin unread
      // const updatedChatList2 = jsonChatList.map((chat) => {
      //   if (chat.title === chatSelected) {
      //     return { ...chat, subtitle: message,date: new Date().toISOString(),unread: 0};
      //   }
      //   return chat;
      // });

      // setJsonChatList(updatedChatList2);

      return { ...prevState, [chatKey]: newChatMessages };
    });
    document.querySelector("textarea").value = "";
    //guardamos la lista de mensajes en el local storage
    // localStorage.setItem("chatMessages", JSON.stringify(jsonChatMessages));
  };

  const handleForward = (id) => {
    //function edit message
    let chatKey = `${currentUser}-${chatSelected}`;
    if (!jsonChatMessages[chatKey]) chatKey = `${chatSelected}-${currentUser}`;
    // const message = jsonChatMessages[chatKey].find((message) => message.id === id);
    // document.querySelector("textarea").value = message.text;
    const messageIndex = jsonChatMessages[chatKey].findIndex(
      (message) => message.id === id
    );
    if (messageIndex === -1) {
      console.log("Mensaje no encontrado");
      return;
    }

    let messageEdit = prompt(
      "Edit message",
      jsonChatMessages[chatKey][messageIndex].text
    );

    if (!messageEdit) return;

    const updatedMessages = [...jsonChatMessages[chatKey]];
    updatedMessages[messageIndex].text = messageEdit;
    updatedMessages[messageIndex].estate = "edit";

    setJsonChatMessages((prevState) => ({
      ...prevState,
      [chatKey]: updatedMessages,
    }));

    //actualizar el text del mensaje en la lista de chats
    const updatedChatList = jsonChatList.map((chat) => {
      if (chat.title === chatSelected) {
        return {
          ...chat,
          subtitle: "you: " + messageEdit,
        };
      }
      if (chat.title === currentUser) {
        return {
          ...chat,
          subtitle: messageEdit,
          date: new Date().toISOString(),
        };
      }
      return chat;
    });

    setJsonChatList(updatedChatList);
  };

  return (
    <div className="flex flex-row h-full gap-x-0  border-gray-300 rounded-xl overflow-hidden border-[0.3px] border-opacity-40 dark:border-none">
      <div className="flex flex-col min-w-[512px]">
        <div className="border-opacity-30 flex flex-row justify-between bg-[#F0F2F5] dark:bg-[#202C33] p-2 border-r-[0.8px] border-slate-300 dark:border-white-30 ">
          <div className="flex flex-row gap-x-4 py-1">
            <button onClick={() => setCurrentUser("Cristian")}>
              <img
                className={`rounded-full ${
                  currentUser === "Cristian"
                    ? "w-[42px] border-4 border-blue-300"
                    : "w-[34px] grayscale "
                }`}
                src={avatar}
                alt="User Cristian"
              />
            </button>
            <button onClick={() => setCurrentUser("Kursat")}>
              <img
                className={`rounded-full ${
                  currentUser === "Kursat"
                    ? "  w-[40px] border-4 border-blue-300"
                    : "w-[34px] grayscale"
                }`}
                src="https://avatars.githubusercontent.com/u/80540635?v=4"
                alt="User Kursat"
              />
            </button>
            {/* <button onClick={() => setCurrentUser("Emre")}>
              <img
                className={`rounded-full ${
                  currentUser === "Emre"
                    ? "  w-[40px] border-4 border-blue-300"
                    : "w-[34px] grayscale"
                }`}
                src="https://avatars.githubusercontent.com/u/41473129?v=4"
                alt="User Emre"
              />
            </button> */}
          </div>
          <div className="pr-2 flex items-center">
            <Dropdown />
          </div>
        </div>
        <div
          className={`h-full border-r-[0.8px] border-opacity-20 border-[#ffffff]  dark:border-white-30 dark:bg-[#111B21] dark:text-white pt-4`}
        >
          {jsonChatList.map((chat, index) => {
            if (chat.title != currentUser) {
              return (
                <ChatList
                  key={index}
                  onClick={() => handleChatSelected(chat.title)}
                  dataSource={[chat]}
                  className={`
                  ${chat.unread > 0 ? "active" : ""} 
                  ${
                    chatSelected === chat.title
                      ? "bg-[#F0F2F5] bg-opacity-80 dark:bg-[#202C33] selected"
                      : ""
                  } 
                  dark:hover:bg-[#202C33] dark:text-white`}
                />
              );
            }
          })}
          {/* {
            Object.entries(jsonChatList).map(([key, value]) => {
              if (key == currentUser) {
                return value.map((chat, index) => (
                  <ChatList
                    key={index}
                    onClick={() => handleChatSelected(chat.title)}
                    dataSource={[chat]}
                    className={`
                    ${chat.unread > 0 ? "active" : ""} 
                    ${
                      chatSelected === chat.title
                        ? "bg-[#F0F2F5] bg-opacity-80 dark:bg-[#202C33] selected"
                        : ""
                    } 
                    dark:hover:bg-[#202C33] dark:text-white`}
                  />
                ));
              }
            })
          } */}
        </div>
      </div>
      <div className="flex flex-col w-full h-ull justify-between">
        <div>
          <div className="flex flex-row justify-between bg-[#F0F2F5] dark:bg-[#202C33] px-4 py-2 h-[66.44px]">
            <button className="flex flex-row gap-x-6 items-center ">
              <img
                className="rounded-full w-[44px]"
                src={
                  jsonChatList.find((chat) => chat.title === chatSelected)
                    .avatar
                }
                alt={`User ${chatSelected}`}
              />
              <span className="dark:text-white text-lg">{chatSelected}</span>
            </button>
            <div className="flex items-center">
              <DropdownChat></DropdownChat>
            </div>
          </div>
        </div>
        <div
          ref={chatContainerRef}
          className="p-4 relative bg-[url('./assets/imageFinalLigth.png')] dark:bg-[url('./assets/fondoChat.jpg')] bg-blur bg-cover h-full overflow-y-auto overflow-custom"
        >
          {/* <div className="background-blur-opacity"></div> */}
          {Object.entries(jsonChatMessages).map(([key, value]) => {
            let chatKey = `${currentUser}-${chatSelected}`;
            let chatKeyReverse = `${chatSelected}-${currentUser}`;
            if (key == chatKey || key == chatKeyReverse) {
              return value.map((message, index) => (
                <MessageBox
                  key={index}
                  position={message.title === currentUser ? "right" : "left"}
                  type={message.type}
                  // title={message.title}
                  text={message.text}
                  date={new Date(message.fechaHora)}
                  replyButton={message.title === currentUser ? true : false}
                  onReplyClick={() => handleForward(message.id)}
                  className={`${message.estate == "edit" ? "editado" : ""}`}
                  // onForwardClick={() => alert("Forward")}
                  // renderAddCmp={() => <div  className="bg-red-950 w-6 button_edit"><button onClick={()=>alert("ss")}>A</button></div>}
                  // forwarded={true}
                  // forwardedMessageText="Mensaje reenviado"
                  // retracted={message.estate == "edit"? true:false} //eliminar mensajes
                  // removeButton={true}
                  // edit={message.estate == "edit"? true:false}
                  status={message.title === currentUser ? "read" : "delivered"}
                />
              ));
            }
          })}
        </div>
        <div className="flex flex-row gap-x-4  justify-between w-full bg-[#F0F2F5] dark:bg-[#202C33] p-3  h-[60px]">
          <div className="flex items-center justify-center">
            <FaPlus className="w-6 h-6 dark:text-slate-400" />
          </div>
          <div className="w-[95%]">
            <textarea
              placeholder="Type a message..."
              className="w-full overflow-hidden rounded-lg resize-none p-2 h-full dark:bg-slate-600 border-none outline-none dark:text-[#c1c5c7] focus:shadow-none focus:ring-0"
              style={{
                height: "2.8em",
                fontSize: "14px",
                outline: "none !important",
                border: "none !important",
                boxShadow: "none !important",
              }}
              onKeyDown={hadlekeyPress}
            />
          </div>
          <div className="w-[5%] flex items-center justify-center">
            <button
              type="button"
              onClick={() => handleSend(chatSelected)}
              className="w-full h-full"
            >
              <IoMdSend className="w-7 h-7 dark:text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
