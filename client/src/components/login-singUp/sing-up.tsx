import React, { useEffect, useRef, useState } from "react";

import Swal from "sweetalert2";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { Navigation } from "swiper";


import { useAppDispatch, useAppSelector } from "../../app/hooks";

import {
  User_Register_State,

  selectUser,
  Estado,
  Status,
  Error,
} from "../../features/counter/counterSlice";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
interface Propos {
  icon?: string;
  loading_icon?: string;
}

const regexEmail = /^[a-zA-Z0-9.,!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 
const regexName = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
const regexPassword = /^[a-zA-Z0-9]{6,10}$/;


const SingUp: React.FC<Propos> = ({ loading_icon, icon }) => {


  const user_logeao = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const [Form_data, Set_form_data] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  })


  const navigate = useNavigate()

  let user = useAppSelector(selectUser);

  useEffect(()=>{
    dispatch(Error())
  },[])

  //////////obtencion de datos  por medio de los input//////////////////////////////////////////

  function handleChange(
    event: React.ChangeEvent<HTMLFormElement | HTMLInputElement>
  ): void {
    Set_form_data((pv) => ({ ...pv, [event.target.name]: event.target.value }));
    setError({ ...error, [event.target.name]: "" });
  }

  //////////enviar de datos  por medio de los input//////////////////////////////////////////
  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    dispatch(Estado(""))

    if (!regexName.test(Form_data.name)) {
      Swal.fire({
        title: "Por favor ingrese un nombre con solo letras",
        icon: "info",
        showCancelButton: false,
        confirmButtonColor: "#230bf8",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        setError({ ...error, name: "border-red-600" })

      });

      return;
    }

    if (!regexEmail.test(Form_data.email)) {
      Swal.fire({
        title: "Por favor ingrese un correo valido",
        icon: "info",
        showCancelButton: false,
        confirmButtonColor: "#230bf8",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        setError({ ...error, email: "border-red-600" })
      });
      return;
    }

    if (!regexPassword.test(Form_data.password)) {
      Swal.fire({
        title: "Por favor ingrese una contraseña entre 6 y 10 letras y/o números",
        icon: "info",
        showCancelButton: false,
        confirmButtonColor: "#230bf8",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        setError({ ...error, password: "border-red-600" })
      });
      return;
    }

    dispatch(User_Register_State(Form_data));
  }

  useEffect(() => {
    if (user.userToken?.length > 50) {
      let time = new Date();
      let token = user.userToken;
      window.localStorage.setItem(
        "Login_userFit_Focus",
        JSON.stringify({ token, time })
      );
    }
  }, [user.userToken]);

  return (
    <div className='h-full w-full flex justify-center content-center'>
      {user_logeao.user && <Navigate to="/auth/login" />}
      {/* component */}
      {typeof user.userToken === "string" && user.userToken.length > 50 && (
        <Navigate to="/fitFocus" />
      )}
      <div className="py-6 flex-1 content-center justify-center ">
        <div className="flex bg-white shadow-2xl overflow-hidden mx-auto  max-w-md h-auto lg:max-w-[75%] xl:max-w-[68%] ">
          <div
            className="hidden lg:block lg:w-[50%] bg-no-repeat bg-center bg-[length:350px_200px]"
            style={{
              backgroundImage:
                `url(${icon})`,
              backgroundSize: "cover"
            }} >
            <h1 style={{ color: "white", fontSize: "2rem", width: "20vw", marginLeft: "7vw", marginTop: "30vh" }}>“La clave para iniciar algo
              es dejar de hablar y
              ponerse a hacerlo”</h1>
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              Registrate
            </h2>
            <p className="text-xl text-gray-600 text-center">Bienvenido a la familia!!</p>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
              <input
                type="text"
                name="name"
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300-2 px-4 block w-full appearance-none"
                autoComplete="off"
                placeholder="Alex"
                value={Form_data.name}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Correo
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300-2 px-4 block w-full appearance-none"
                type="email"
                name="email"
                placeholder="Alex@gmail.com"
                value={Form_data.email}
                onChange={(event) => handleChange(event)}
              />
              {user.error?.includes("User") && (
                <label className="text-red-500">Esta cuanta ya existe</label>
              )}
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Contraseña
                </label>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300-2 px-4 block w-full appearance-none"
                type="password"
                name="password"
                autoComplete="off"
                placeholder="••••••••"
                value={Form_data.password}
                onChange={(event) => handleChange(event)}
              />
              {user.error?.includes("Password") && (
                <label className="text-red-500">Contraseña no validad</label>
              )}
            </div>
            <div className="mt-4">
              <label
                className="ml-2 mb-[8px] text-sm font-medium text-gray-600 "
              >
                Al registrarse, usted está aceptando los terminos y condiciones de la aplicacion
              </label>
              <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full :bg-gray-600"
                onClick={handleSubmit}
              >
                {user_logeao.status == "default" ? (
                  "Registrarse"
                ) : (
                  <span className=" flex justify-center">
                    <img className="animate-spin w-5 mx-2" src={loading_icon} />
                    Loading...
                  </span>
                )}
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4" />
              <p className="text-xs text-center text-gray-500 uppercase">
                o registrate con google
              </p>
              <span className="border-b w-1/5 lg:w-1/4" />
            </div>
            <div className="flex justify-center mt-3">
              <GoogleAuth />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4" />
              <Link
                to="/auth/login"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                inicia sesion
              </Link>
              <span className="border-b w-1/5 md:w-1/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingUp



