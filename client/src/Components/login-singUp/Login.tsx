import React, { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import {
  User_Login_State,
  
  auth_Login_Google,
  selectUser,
} from "../../features/counter/counterSlice";

import { Link } from "react-router-dom";
import GoogleAuth from "../GoogleAuth/GoogleAuth";

interface Propos{
  facebook:string,
  google:string,
  linkedin:string,
  loading_icon:string
}


const Login:React.FC<Propos>=( {facebook, google, linkedin,loading_icon} )=>{

  let user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [loagin, Set_loagin] = useState(false)
  const [Form_data, Set_form_data] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    console.log("entra", user);
    if (typeof user.user === "string"&&user.user.length>50) {
      console.log(user.user, user.user.length)
      window.localStorage.setItem(
        "Login_userFit_Focus",
        JSON.stringify(user.user)
      );
    }
  }, [user.user]);

  function handleChange(
    event: React.ChangeEvent<HTMLFormElement | HTMLInputElement>
  ): void {
    Set_form_data((pv) => ({ ...pv, [event.target.name]: event.target.value }));
  }

  //////////enviar de datos  por medio de los input//////////////////////////////////////////
  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    Set_loagin(true)
    dispatch(User_Login_State(Form_data));
  }

  return (
    <>
      <div>{(typeof user.user === "string"&&user.user.length>50)&&<Navigate to="/home" />}</div>
  
      <form className="bg-white w-3/4 rounded-2xl p-11" onSubmit={handleSubmit}>
        <div className="flex-1">
          <div>
            <label>Correo</label>
            <input
              type="email"
              name="email"
              className="border-none w-full mb-2"
              autoComplete="off"
              placeholder="Alex@gmail.com"
              value={Form_data.email}
              onChange={(event) => handleChange(event)}
            />
            <br/>
            {user.status?.includes("User")&&<label className="text-red-500 absolute -mt-2">{user.status}</label>}

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
            {user.status?.includes("Password")&&<label className="text-red-500">{user.status}</label>}
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
            to="#"
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
            {user.status?"iniciar sesión":
            <span className=" flex justify-center">
              <img className="animate-spin w-5 mx-2" src={loading_icon} />
              Loading...
            </span>
            }
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
      </form>
      

      <div id="auth" className="flex ">
        <GoogleAuth />
        {/* <div className="rounded p-3" onClick={()=>dispatch(auth_Login_Google())}>
          <img src={google} />
        </div>
        <div className="rounded p-3">
          <img src={facebook} />
        </div>
        <div className="rounded p-3">
          <img src={linkedin} />
        </div> */}
      </div>
    </>
  );
}
export default Login