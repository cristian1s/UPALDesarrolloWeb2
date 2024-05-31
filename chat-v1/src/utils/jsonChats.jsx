
import avatar from "../assets/avatar.png";

export const JSON_USER_LIST = {
  Cristian: {
    avatar: avatar,
    alt: "cristian_avatar",
    title: "Cristian",
    subtitle: "¡Bien, gracias!",
    date: "2024-05-24T10:31:00Z",
    unread: 0,
  },
  Kursat: {
    avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
    alt: "kursat_avatar",
    title: "Kursat",
    subtitle: "¡Bien, gracias!",
    date: "2024-05-24T10:31:00Z",
    unread: 0,
  },
  Emre: {
    avatar: "https://avatars.githubusercontent.com/u/41473129?v=4",
    alt: "emre_avatar",
    title: "Emre",
    subtitle: "Todo bien, gracias!",
    date: "2024-05-24T10:31:00Z",
    unread: 0,
  },
};

export const JSON_CHAT_LIST = {
  Cristian: [
    {
      avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
      alt: "kursat_avatar",
      title: "Kursat",
      subtitle: "¡Bien, gracias!, soy Kursat a Cristian",
      date: "2024-05-24T10:31:00Z",
      unread: 0,
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/41473129?v=4",
      alt: "emre_avatar",
      title: "Emre",
      subtitle: "Todo bien, gracias!, soy Emre a Cristian",
      date: "2024-05-24T10:31:00Z",
      unread: 0,
    },
  ],
  Kursat: [
    {
      avatar: avatar,
      alt: "cristian_avatar",
      title: "Cristian",
      subtitle: "¡Bien, gracias!, soy Kursat a Cristian",
      date: "2024-05-24T10:31:00Z",
      unread: 0,
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/41473129?v=4",
      alt: "emre_avatar",
      title: "Emre",
      subtitle: "Todo bien, gracias!, soy Emre a Kursat",
      date: "2024-05-24T10:31:00Z",
      unread: 0,
    },
  ],
  Emre: [
    {
      avatar: avatar,
      alt: "cristian_avatar",
      title: "Cristian",
      subtitle: "Todo bien, gracias!, soy Emre a Cristian",
      date: "2024-05-24T10:31:00Z",
      unread: 0,
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
      alt: "kursat_avatar",
      title: "Kursat",
      subtitle: "Todo bien, gracias!, soy Emre a Kursat",
      date: "2024-05-24T10:31:00Z",
      unread: 0,
    },
  ],
};
export const JSON_CHAT_MESSAGES = {
  "Cristian-Kursat": [
    {
      id: 1,
      user: "Cristian",
      type: "text",
      title: "Cristian",
      text: "Hola, ¿cómo estás? , soy Cristian a Kursat",
      fechaHora: "2024-05-24T10:30:00Z",
      estate: "read",
    },
    {
      id: 2,
      user: "Kursat",
      type: "text",
      title: "Kursat",
      text: "¡Bien, gracias!, soy Kursat a Cristian",
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
      text: "Hey Bro como estas??, soy Cristian a Emre",
      fechaHora: "2024-05-24T10:30:00Z",
      estate: "read",
    },
    {
      id: 2,
      user: "Emre",
      type: "text",
      title: "Emre",
      text: "Todo bien, gracias!, soy Emre a Cristian",
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
      text: "Hey Bro como estas??, soy Kursat a Emre",
      fechaHora: "2024-05-24T10:30:00Z",
      estate: "read",
    },
    {
      id: 2,
      user: "Emre",
      type: "text",
      title: "Emre",
      text: "Todo bien, gracias!, soy Emre a Kursat",
      fechaHora: "2024-05-24T10:31:00Z",
      estate: "read",
    },
  ],
};