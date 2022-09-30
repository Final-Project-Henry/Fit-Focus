import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import {
  User_Login_State,
  selectUser,
  Status,
  Activecuenta,
} from "../../features/counter/counterSlice";

import { Link } from "react-router-dom";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
import Swal from "sweetalert2";


interface Propos {
  facebook: string;
  google: string;
  linkedin: string;
  loading_icon: string;
}

const Login: React.FC<Propos> = ({
  facebook,
  google,
  linkedin,
  loading_icon,
}) => {
  let user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const Navegation=  useNavigate()  
  const [Activar, SetActivar] = useState(false);
  const [Form_data, Set_form_data] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user.userToken?.length > 50) {
    let time = new Date()
     let token=user.userToken
      window.localStorage.setItem(

        "Login_userFit_Focus",
        JSON.stringify({token, time})
      );
    }
  }, [user.userToken]);
  useEffect(() => {
    if (user.status==="User desactivated") {
      Swal.fire({
        title: "Esta cuenta esta desactivada. agregar mas lorem :V",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#230bf8",
        cancelButtonColor: "#d33",
        confirmButtonText: "Recuperar cuenta",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          SetActivar(true)
        }
      });
    }
  }, [user.status]);
  function handleChange(
    event: React.ChangeEvent<HTMLFormElement | HTMLInputElement>
  ): void {
    Set_form_data((pv) => ({ ...pv, [event.target.name]: event.target.value }));
  }

  //////////enviar de datos  por medio de los input//////////////////////////////////////////
  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    // dispatch(Activecuenta(Form_data))
    Activar?alert("El back no funca :V"):dispatch(User_Login_State(Form_data));
  }

  return (
    <>
      <div>
        {typeof user.userToken === "string" && user.userToken.length > 50 && (
          <Navigate to="/fitFocus" />
        )}
      </div>

      <form className="bg-white w-3/4 rounded-2xl p-11" onSubmit={handleSubmit}>
        <div className="flex-1">
          <div>
            <label>Correo</label>
            <input
              type="email"
              name="email"
              className="border-none w-full mb-2"
              placeholder="Alex@gmail.com"
              value={Form_data.email}
              onChange={(event) => handleChange(event)}
            />
            <br />
            {user.status?.includes("User") && (
              <label className="text-red-500 absolute -mt-2">
                {user.status}
              </label>
            )}
          </div>
          <div className="my-5">
            <label>contraseña</label>
            <input
              type="password"
              name="password"
              className="border-none w-full"
              autoComplete="off"
              placeholder="••••••••"
              value={Form_data.password}
              onChange={(event) => handleChange(event)}
            />
            {user.status?.includes("Password") && (
              <label className="text-red-500">{user.status}</label>
            )}
          </div>
        </div>
        <div className="flex items-start my-2">
          <div className="flex items-center h-5 ">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-600 "
          >
            Recibir notificaciones
          </label>
          <Link
            to="/auth/nuevaContraseña"
            className="ml-auto text-sm text-blue-700 hover:underline  dark:text-blue-500"
          >
            Olvidaste tu contraseña?
          </Link>
        </div>

        <div
          id="btm_submit"
          className="w-full bg-blue-700   text-white text-center  my-5"
        >
          <button
            className="w-full bg-blue-700   text-white text-center p-2 "
            type="submit"
          >
            {user.status? (
              Activar?"Recuperar cuenta":"iniciar sesión"
            ) : (
              <span className=" flex justify-center">
                <img className="animate-spin w-5 mx-2" src={loading_icon} />
                Loading...
              </span>
            )}
          </button>
        </div>

        <div className="text-sm font-medium relative top-2 text-gray-500 ">
          No estas Registrado?
          <Link
            to="/auth/sing-up"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Crear una cuenta
          </Link>
        </div>
        <div className=" relative top-5 ">
          <GoogleAuth />
        </div>
      </form>
    </>
  );
};
export default Login;
