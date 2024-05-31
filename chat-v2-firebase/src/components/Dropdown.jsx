import ThemeSwitcher from "./ThemeSwitcher";
import { auth , signOut } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

const Dropdown = ({currentUser,setLoggedIn}) => {

  const navigate = useNavigate();

  // const [menuOpen, setMenuOpen] = useState("hidden");

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setLoggedIn(true);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }

  

  return (
    <div className="">
      <button
        id="dropdownMenuIconButton"
        data-dropdown-toggle="dropdownDots"
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        type="button"
        // onClick={() => setMenuOpen(menuOpen === "hidden" ? "block" : "hidden")}
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 4 15"
        >
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      </button>

      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdownDots"
        className={`margin-rigth10 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600`}
        // style={menuOpen === "block" ? { position: "absolute", inset: "0px auto auto 0px", margin: "0px", transform: "translate(413px, 77px)" } : { }}
        
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownMenuIconButton" 
        >
          <li>
            {/* <button
              className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
                Mode Dark
            </button> */}
            <ThemeSwitcher />
          </li>
          <li>
            <button
              className="w-full  text-left  block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </button>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <b>{currentUser}</b>
            </a>
          </li>
        </ul>
        <div className="py-2">
          <button
            onClick={handleSignOut}
            className=" w-full  text-left  block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Cerrar Sesion
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
