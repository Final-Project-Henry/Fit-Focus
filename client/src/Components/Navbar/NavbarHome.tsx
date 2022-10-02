import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Icons
import icon from "../assets/icons/nav-icon.png";
import defaultPhoto from "../assets/icons/monkey.jpg";
import spanish from "../../Components/assets/icons/spanish.png";
import english from "../../Components/assets/icons/english.png";

import { Link as Scroll } from "react-scroll";
import { useAppDispatch, useAppSelector, useSesion } from "../../app/hooks";
import "./styles/Navbar.css";
import { selectUser, sigendOut } from "../../features/counter/counterSlice";
import Swal from "sweetalert2";

const NavbarHome = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [lenguage, setLenguage] = useState(false);
  const [userData, setUser] = useState(false);

  const dispatch = useAppDispatch();
  const {user} = useAppSelector( selectUser )

  const Navegation=  useNavigate()
  useEffect(() => {
    if (user) {
      setUser(true);
    }
  }, [user]);

  function signOut(): void {
    Swal.fire({
      title: "¿Desea cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(sigendOut(null));
        setUser(false);
        setDropdown(false);
        Navegation("/home");
        window.location.reload();
      }
    });
  }

  return (

    <div className="w-full">
      <nav className="  px-2 w-full z-10 sm:px-4 fixed   bg-transparent  ">
        <div className="container-fluid  flex flex-wrap items-center justify-between px-8 p-4">
          <div className="flex items-center">
            <button
              onClick={() => setShowMenu(!showMenu)}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center bg-white p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden"
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

            <div
              className="text-center bg-white justify-between items-center w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-2"
            >
        
            </div>
          {/* </div>
          <div className="flex bg-white  h-[50px] rounded-xl   items-center justify-end p-5 md:order-2 ">
            <div>
              <li className="flex items-center md:order-2">
                <button
                  onClick={() => setLenguage(!lenguage)}
                  type="button"
                  data-dropdown-toggle="language-dropdown-menu"
                  className="inline-flex justify-center items-center p-2 text-sm text-gray-500 rounded cursor-pointer hover:text-gray-900"
                >
                  <img
                    src={spanish}
                    style={{ width: "20px", marginRight: "4px" }}
                    alt=""
                  />
                  Español
                </button>
                {lenguage && (
                  <div
                    className=" z-50 text-base list-none bg-white rounded divide-y divide-gray-100 shadow "
                    id="language-dropdown-menu"
                  >
                    <ul className="py-1" role="none">
                      <li>
                        <a
                          href="/"
                          className="block hover: px-4 text-sm text-gray-500 "
                          role="menuitem"
                        >
                          <div className="inline-flex items-center">
                            <img src={english} width="10px" alt="" />
                            English (US)
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </div> */}
            
                <div className="cursor-pointer">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-10 h-10 rounded-full ml-4"
                    src={user?.avatar}
                    onClick={() => setDropdown(!dropdown)}
                    alt=""
                  />
                </div>
            

            {/* Menu de Usuario Registrado */}
            {dropdown && (
              <div
                className=" z-50  text-base list-none bg-white rounded divide-y divide-gray-100 "
                id="user-dropdown"
                data-popper-reference-hidden
                data-popper-escaped
                data-popper-placement="bottom"
                style={{
                  position: "absolute",
                  inset: "0px auto auto auto",
                  margin: "50px 0",
                  transform: "translate(0px, 20px)",
                }}
              >
                <div className="py-3 px-4">
                  <span className="block text-sm text-gray-900 ">
                    {user?.name}
                  </span>
                  <span className="block text-sm font-medium text-gray-500 truncate ">
                    {user?.email}
                  </span>
                </div>
                <ul className="py-1" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      to="/profile"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 "
                    >
                      Mi Perfil
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      signOut();
                    }}
                  >
                    <div className="block py-2 px-4 cursor-pointer text-sm text-gray-700 hover:bg-gray-100  ">
                      Cerrar Sesión
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarHome;