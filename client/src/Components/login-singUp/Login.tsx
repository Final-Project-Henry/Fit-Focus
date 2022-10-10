import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Swal from "sweetalert2";

import {
  User_Login_State,
  selectUser,
  Activecuenta,
  Estado,
  Error,
  Response,
  Status,
} from "../../features/counter/counterSlice";

import { Link } from "react-router-dom";
import GoogleAuth from "../GoogleAuth/GoogleAuth";

interface Propos {
  loading_icon?: string;
  icon?: string;
}

const regexEmail =
  /^[a-zA-Z0-9.,!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const regexPassword = /^[a-zA-Z0-9]{6,10}$/;

const Login: React.FC<Propos> = ({ loading_icon, icon }) => {
  let user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const Navegation = useNavigate();
  const [Activar, SetActivar] = useState(false);
  const [Form_data, Set_form_data] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatch(Error());
    dispatch(Status("none"));
  }, []);

  useEffect(() => {
    if (user.userToken?.length > 50) {
      dispatch(Estado(""));
      let time = new Date();
      let token = user.userToken;
      window.localStorage.setItem(
        "Login_userFit_Focus",
        JSON.stringify({ token, time })
      );
    }
  }, [user.userToken]);

  
  useEffect(() => {
    if (user.error === "User desactivated" || user.error === "User google desactivated" ) {
      Swal.fire({
        title: "Esta cuenta esta desactivada.",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#4d83f8",
        cancelButtonColor: "#d33",
        confirmButtonText: "Activar cuenta",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          SetActivar(true);
          dispatch(Error());
          Set_form_data({...Form_data, email: "",password: "",})
          user.error === "User google desactivated"&&dispatch(Estado("Activar"));
        }
      });
    }
  }, [user.error]);

  useEffect(() => {
    if (user.response === "Account activated") {
      Swal.fire({
        title:"Su cuenta se activo correctamente",
        icon: 'success',
        showConfirmButton: true,
        backdrop: `#1919247f`,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if(result.isConfirmed){
          SetActivar(false)
          dispatch(Response())
        }
      });
    }
  }, [user.response]);


  function handleChange(
    event: React.ChangeEvent<HTMLFormElement | HTMLInputElement>
  ): void {
    Set_form_data((pv) => ({ ...pv, [event.target.name]: event.target.value }));
  }
  //////////enviar de datos  por medio de los input//////////////////////////////////////////
  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    if (!regexEmail.test(Form_data.email)) {
      Swal.fire({
        title: "Por favor ingrese un correo valido",
        icon: "info",
        showCancelButton: false,
        confirmButtonColor: "#230bf8",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        setError({ ...error, email: "border-red-600" });
      });
      return;
    }

    if (!regexPassword.test(Form_data.password)) {
      Swal.fire({
        title:
          "Por favor ingrese una contraseña entre 6 y 10 letras y/o números",
        icon: "info",
        showCancelButton: false,
        confirmButtonColor: "#230bf8",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        setError({ ...error, password: "border-red-600" });
      });
      return;
    }

    Activar
      ? dispatch(Activecuenta(Form_data))
      : dispatch(User_Login_State(Form_data));
  }

  return (
    <div className="h-full w-full flex justify-center content-center">
      <div>
        {typeof user.userToken === "string" && user.userToken.length > 50 && (
          <Navigate to="/fitFocus" />
        )}
      </div>
      {/* component */}
      <div className="py-6 flex-1 content-center justify-center ">
        <div className="flex bg-white shadow-2xl overflow-hidden mx-auto sm:mt-0  max-w-sm h-auto lg:max-w-[68%]">
          <div
            className="hidden lg:block lg:w-[50%] bg-no-repeat bg-center bg-[length:350px_200px]"
            style={{
              backgroundImage: `url(${icon})`,
              backgroundSize: "cover",
            }}
          >
            <h1
              style={{
                color: "white",
                fontSize: "2rem",
                width: "20vw",
                marginLeft: "7vw",
                marginTop: "30vh",
              }}
            >
              “La clave para iniciar algo es dejar de hablar y ponerse a
              hacerlo”
            </h1>
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              {Activar ? "Activar cuenta" : "Inicia sesion"}
            </h2>
            <p className="text-xl text-gray-600 text-center">
              {!Activar && "Bienvenido de vuelta!"}
            </p>
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
                <label className="text-red-500">Esta cuanta no existe</label>
              )}
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Contraseña
                </label>
                <a
                  href="/auth/nuevaContraseña"
                  className="text-xs text-gray-500"
                >
                  Recuperar Contraseña
                </a>
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
                <label className="text-red-500">Contraseña incorrecta</label>
              )}
            </div>
            <div className="mt-[50px] xl:mt-[133px]">
              <button
                className="bg-gray-700 text-white font-bold py-2 px-4 w-full :bg-gray-600"
                onClick={handleSubmit}
              >
                {user.status == "none" ? (
                  Activar ? (
                    "Recuperar cuenta"
                  ) : (
                    "iniciar sesión"
                  )
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
                or login with google
              </p>
              <span className="border-b w-1/5 lg:w-1/4" />
            </div>
            <div className="flex justify-center mt-3">
              <GoogleAuth />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4" />
              <Link
                to="/auth/sing-up"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Crea una cuenta
              </Link>
              <span className="border-b w-1/5 md:w-1/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
