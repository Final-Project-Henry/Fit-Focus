import React, { useEffect, useRef, useState } from "react";
import {
  Div_conteiner,
  Div_form,
  Div_img,
} from "./styles/styled_componet_login_singUp";
import { useAppDispatch, useAppSelector, useSesion } from "../../app/hooks";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import icon from "../assets/icons/login.jpg";

import { selectUser } from "../../features/counter/counterSlice";

import Login from "./Login";
import SingUp from "./sing-up";
import { Link } from "react-router-dom";
import facebook from "../assets/login-singup_media/icons8-facebook.svg";
import google from "../assets/login-singup_media/icons8-google.svg";
import linkedin from "../assets/login-singup_media/icons8-linkedin-circled.svg";
import loading_icon from "../assets/icons/loading.svg";
import Navbar from "../Navbar/Navbar";
import funcion from "../../additional_info/functions";
//@ts-igno
import ValidadUser from "./ValidadUser";
import ProtectedRoute from "../../routes/ProtectedRoute";

export default function SingUp_Login() {
  const { id } = useParams();
  let user = useAppSelector(selectUser);
  let user_existing = useSesion();

  return (
    <>
      {!id?.includes("login") &&
      !id?.includes("sing-up") &&
      !id?.includes("nuevaContraseña") ? (
        <ProtectedRoute />
      ) : (
        <Div_img className="flex justify-center">
          {user_existing && <Navigate to="/fitFocus" />}
          <div className="flex  w-full h-full ">
            {id == "login" && <Login loading_icon={loading_icon} icon={icon} />}
            {id == "sing-up" && (
              <SingUp icon={icon} loading_icon={loading_icon} />
            )}
            {id == "nuevaContraseña" && (
              <ValidadUser loading_icon={loading_icon} icon={icon} />
            )}
          </div>
        </Div_img>
      )}
    </>
  );
}
