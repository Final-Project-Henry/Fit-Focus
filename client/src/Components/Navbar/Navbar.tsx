import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Icons
import icon from "../assets/icons/nav-icon2.png";

import { useAppDispatch, useAppSelector, useSesion, useToken } from "../../app/hooks";
import "./styles/Navbar.css";
import { sigendOut, selectUser } from "../../features/counter/counterSlice";
import Swal from "sweetalert2";

const Navbar = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [lenguage, setLenguage] = useState(false);
  const [userData, setUser] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(false);
  const [hiddenTimeOut, setHiddenTimeOut] = useState<any>();

  const dispatch = useAppDispatch();
  const { user, userToken,status } = useAppSelector(selectUser);
  const userSeccion = useSesion();
  const token = useToken()
  const Navegation = useNavigate();


  useEffect(() => {
    if (user||userToken) {
      setUserInfo(user);
    }else{
      setUserInfo(false)
    }
  }, [userSeccion, user]);

  function signOut(): void {
    Swal.fire({
      title: "¿Desea cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1673ff",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(sigendOut(null));
        setUserInfo(false)

        Navegation("/home");
        //  window.location.reload();
      }
    });
  }

  const handleShow = (type: string) => {
    if (type === "leave") {
      setHiddenTimeOut(
        setTimeout(() => {
          dropdown && setDropdown(false);
        }, 1500)
      );
    } else clearTimeout(hiddenTimeOut);
  };

  return (
    <>

    <div style={{ backgroundColor: "white" }}>
      <nav className=" border-gray-200 px-2 sm:px-4  bg-white  w-full border-b-4">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-8 p-4">
          <div className="flex items-center">
            <img
              src={icon}
              className="mr-3 h-6 sm:h-9 cursor-default"
              alt="FF Logo"
            />

            <button
              onClick={() => setShowMenu(!showMenu)}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden"
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
              className="text-center justify-between items-center w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col p-4 mt-4 ml-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                <li>
                  <Link
                    to={userInfo ? `/fitFocus` : `/home`}
                    className="block py-2 p pr-4 pl-3 text-gray-400 hover:text-black  rounded md:bg-transparent  md:p-0 cursor-pointer"
                  >
                    Inicio
                  </Link>
                </li>

                <li>
                  <Link
                    to={userInfo ? `/contact` : `/auth/sing-up`}
                    className="block py-2 p pr-4 pl-3 text-gray-400 hover:text-black  rounded md:bg-transparent  md:p-0 cursor-pointer"
                  >
                    Opiniones
                  </Link>
                </li>

                <li>
                  <Link
                    to={userInfo ? `/ejercicios` : `/auth/sing-up`}
                    className="block py-2 p pr-4 pl-3 text-gray-400 hover:text-black  rounded md:bg-transparent  md:p-0 cursor-pointer"
                  >
                    Ejercicios
                  </Link>
                </li>

                <li>
                  <Link
                    to={userInfo ? `/calculadora` : `/auth/sing-up`}
                    className="block py-2 pr-4 pl-3 text-gray-400 hover:text-black  rounded md:bg-transparent  md:p-0 cursor-pointer"
                  >
                    Calculadora
                  </Link>
                </li>

                <li>
                  <Link
                    to={userInfo ? `/noticias` : `/auth/sing-up`}
                    className="block py-2 pr-4 pl-3 text-gray-400 hover:text-black  rounded md:bg-transparent  md:p-0 cursor-pointer"
                  >
                    Noticias
                  </Link>
                </li>

                <li>
                  <Link
                    to={userInfo ? `/Favoritos` : `/auth/sing-up`}
                    className="block py-2 pr-4 pl-3 text-gray-400 hover:text-black  rounded md:bg-transparent  md:p-0 cursor-pointer"
                  >
                    Favoritos
                  </Link>
                </li>
                <li>
                  <Link
                    to={userInfo ? `/rutinas` : `/auth/sing-up`}
                    className="block py-2 pr-4 pl-3 text-gray-400 hover:text-black  rounded md:bg-transparent  md:p-0 cursor-pointer"
                  >
                    Rutinas personalizadas
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/AboutUs`}
                    className="block py-2 pr-4 pl-3 text-gray-400 hover:text-black  rounded md:bg-transparent  md:p-0 cursor-pointer"
                  >
                    Nosotros
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center md:order-2 ">
            {/* <div>
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
                  Spanish
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
            <button
              type="button"
              className="flex mr-3 text-sm rounded-full md:mr-0 focus:border-none"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              {userInfo ? (
                <div>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-10 h-10 rounded-full ml-4"
                    src={userInfo?.avatar}
                    onClick={() => setDropdown(!dropdown)}
                    onMouseLeave={() => handleShow("leave")}
                    alt=""
                  />
                </div>
              ) : (
                <div className="flex flex-col p-4 mt-4 rounded-lg border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                  <Link
                    to="/auth/sing-up"
                    className="block py-2 pr-4 pl-3  md:hover:bg-transparent  md:p-0 text-gray-400 md:hover:text-black"
                  >
                    Registrarse
                  </Link>

                  <Link
                    to="/auth/login"
                    className="block py-2 pr-4 pl-3 md:hover:bg-transparent  md:p-0 text-gray-400 md:hover:text-black"
                  >
                    Iniciar sesión
                  </Link>
                </div>
              )}
            </button>

            {/* Menu de Usuario Registrado */}
            {dropdown && (
              <div
                className=" z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow"
                id="user-dropdown"
                data-popper-reference-hidden
                data-popper-escaped
                data-popper-placement="bottom"
                style={{
                  position: "absolute",
                  inset: "0px -100px auto auto",
                  margin: "65px",
                  transform: "translate(-50px, 20px)",
                }}
                onMouseEnter={() => handleShow("enter")}
                onMouseLeave={() => handleShow("leave")}
              >
                <div className="py-3 px-4">
                  <span className="block text-3xl text-gray-900">
                    {userInfo?.name}
                  </span>
                  <span className="block text-sm font-medium text-gray-500 truncate ">
                    {userInfo?.email}
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
                  {user?.admin&&<li>
                    <Link
                      to="/admin"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 "
                    >
                      Tablero
                    </Link>
                  </li>}
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
    </>
  );
};

export default Navbar;
