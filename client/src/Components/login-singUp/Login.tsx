import React, { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import jwtDecode from "jwt-decode";

import {
  User_Login_State,
  selectUser,
} from "../../features/counter/counterSlice";
import facebook from "../assets/login-singup_media/icons8-facebook.svg";
import google from "../assets/login-singup_media/icons8-google.svg";
import linkedin from "../assets/login-singup_media/icons8-linkedin-circled.svg";
export default function Login() {
  let user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [Form_data, Set_form_data] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    console.log("entra", user);
    if (typeof user.user === "string") {
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
    dispatch(User_Login_State(Form_data));
  }

  return (
    <>
      <div>{typeof user.user==="string"&&<Navigate to="/HomeRegister" />}</div>
  
      <form className="bg-white w-3/4 rounded-2xl p-11" onSubmit={handleSubmit}>
        <div className="flex-1">
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="border-none w-full "
              autoComplete="off"
              placeholder="Alex@gmail.com"
              value={Form_data.email}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="my-5">
            <label>contraseña</label>
            <input
              type="password"
              name="password"
              className="border-none w-full"
              autoComplete="off"
              placeholder="*******"
              value={Form_data.password}
              onChange={(event) => handleChange(event)}
            />
          </div>
        </div>
        <div className="flex items-start my-3">
          <div className="flex items-center h-5 ">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <div
          id="btm_submit"
          className="w-full bg-blue-700   text-white text-center  "
        >
          <button
            className="w-full bg-blue-700   text-white text-center p-2 "
            type="submit"
          >
            {!user.status?"iniciar sesión":
              "Loading..."
            }
          </button>
        </div>
        <div className="flex items-start">
          <a
            href="#"
            className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
          >
            Lost Password?
          </a>
        </div>

        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{" "}
          <a
            href="#"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Create account
          </a>
        </div>
      </form>
      <div id="auth" className="flex ">
        <div className="rounded p-3">
          <img src={google} />
        </div>
        <div className="rounded p-3">
          <img src={facebook} />
        </div>
        <div className="rounded p-3">
          <img src={linkedin} />
        </div>
      </div>
    </>
  );
}
