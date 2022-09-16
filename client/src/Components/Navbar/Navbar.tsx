import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import icon from "../assets/icons/nav-icon.png";
import defaultPhoto from "../assets/icons/monkey.jpg";
import { Link as Scroll } from "react-scroll";
import { useSesion } from "../../app/hooks";
import "./styles/Navbar.css";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  let isLogged = useSelector((state: RootState) => state.auth.isLogged);
  const user=useSesion()
  console.log(user)

  return (
    <div>
      <nav className=" border-gray-200 px-2 sm:px-4 py-2.5  bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex">
            <div
              className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/home"
                    className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Scroll
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    to="about"
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
                  >
                    Nosotros
                  </Scroll>
                </li>
                <li>
                  <Scroll
                    to="feedbacks"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
                  >
                    Opiniones
                  </Scroll>
                </li>
                <li>
                  <Scroll
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
                  >
                    Contacto
                  </Scroll>
                </li>
              </ul>
            </div>
            <img src={icon} alt="" className="w-12" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white px-2 cursor-default">
              Fit-Focus
            </span>
          </div>
          {!user? (
            <div className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Link
                to="/auth/login"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Registrarse
              </Link>

              <Link
                to="/auth/sign-up"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Iniciar sesión
              </Link>
            </div>
          ) : (
            <div>
              <div className="flex items-center md:order-2">
                <button
                  type="button"
                  className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    onClick={() => setShowMenu(!showMenu)}
                    className="w-10 h-10 rounded-full"
                    src={defaultPhoto}
                    alt="userphoto"
                  />
                </button>

                {/* Dropdown menu */}
                {showMenu && (
                  <div
                    className=" z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown"
                    data-popper-reference-hidden
                    data-popper-escaped
                    data-popper-placement="bottom"
                    style={{
                      position: "absolute",
                      marginTop: "320px",
                      padding: "10px",
                    }}
                  >
                    <div className="py-3 px-4">
                      <span className="block text-sm text-gray-900 dark:text-white">
                      {user.name}
                      </span>
                      <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                      {user.email}

                      </span>
                    </div>
                    <ul className="py-1" aria-labelledby="user-menu-button">
                      <li>
                        <Link
                          to="/profile"
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Mi Perfil
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/settings"
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Configuraciones
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dashboard"
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Cerrar sesión
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}

                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
