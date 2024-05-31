import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState,useEffect } from "react";
import App2 from "./App2.jsx";
import Login from "./Login.jsx";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  // const [email, setEmail] = useState("");t
  // useEffect(() => {
  //   const Script = document.createElement("script");
  //   Script.src = "./src/assets/flowbite.min.js";
  //   Script.async = true;
  //   document.body.appendChild(Script);
  //   return () => {
  //     document.body.removeChild(Script);
  //   };
  // }, [loggedIn]);
  return (
    <div className="App w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route
            path="/login"
            element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          {/* <Route
            path="/chat"
            element={
              loggedIn ? (
                <App2 loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
              ) : (
                <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
              )
              // <App2 loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            }
          /> */}
          <Route
            path="/chat"
            element={<App2 loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
