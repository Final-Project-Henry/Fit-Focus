import React, { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

import {
  User_Register_State,
  auth_Login_Google,
  selectUser,
} from "../../features/counter/counterSlice";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
interface Propos {
  facebook: string;
  google: string;
  linkedin: string;
  loading_icon: string;
}

const SingUp: React.FC<Propos> = ({
  facebook,
  google,
  linkedin,
  loading_icon,
}) => {
  const user_logeao = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const [Form_data, Set_form_data] = useState({
    name: "",
    email: "",
    password: "",
  });

  //////////obtencion de datos  por medio de los input//////////////////////////////////////////

  function handleChange(
    event: React.ChangeEvent<HTMLFormElement | HTMLInputElement>
  ): void {
    Set_form_data((pv) => ({ ...pv, [event.target.name]: event.target.value }));
  }

  //////////enviar de datos  por medio de los input//////////////////////////////////////////
  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    dispatch(User_Register_State(Form_data));
  }

  return (
    <>
      {user_logeao.user && <Navigate to="/auth/login" />}
      <form className="bg-white w-3/4 rounded-2xl p-11" onSubmit={handleSubmit}>
        <div className="flex-1">
          <div>
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              className="w-full px-1"
              autoComplete="off"
              placeholder="Alex"
              value={Form_data.name}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="my-5">
            <label>Correo</label>
            <input
              type="email"
              name="email"
              className="w-full px-1"
              autoComplete="off"
              placeholder="Alex@gmail.com"
              value={Form_data.email}
              onChange={(event) => handleChange(event)}
            />
            {user_logeao.status?.includes("User already exists") && (
              <label className="text-red-500">{user_logeao.status}</label>
            )}
          </div>
          <div className="my-5">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              className="w-full px-1"
              placeholder="••••••••"
              value={Form_data.password}
              onChange={(event) => handleChange(event)}
            />
          </div>
        </div>

        <div className="w-full bg-blue-700   text-white text-center">
          <button
            className="w-full bg-blue-700   text-white text-center p-2 "
            type="submit"
          >
            {user_logeao.status ? (
              "Registrarse"
            ) : (
              <span className=" flex justify-center">
                <img className="animate-spin w-5 mx-2" src={loading_icon} />
                Loading...
              </span>
            )}
          </button>
        </div>
        <div className="mt-5">
          <GoogleAuth />
        </div>
      </form>
    </>
  );
};

export default SingUp;
