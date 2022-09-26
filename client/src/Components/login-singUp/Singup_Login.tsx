import React, { useEffect, useRef, useState } from "react";
import {
  Div_conteiner,
  Div_form,
  Div_img,
} from "./styles/styled_componet_login_singUp";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import {

  selectUser,
} from "../../features/counter/counterSlice";

import Login from "./Login";
import SingUp from "./sing-up";
import { Link } from "react-router-dom";
import facebook from "../assets/login-singup_media/icons8-facebook.svg";
import google from "../assets/login-singup_media/icons8-google.svg";
import linkedin from "../assets/login-singup_media/icons8-linkedin-circled.svg";
import loading_icon from "../assets/icons/loading.svg"
import Navbar from "../Navbar/Navbar";


export default function SingUp_Login() {
  const { id } = useParams();
  let user = useAppSelector(selectUser);

  const [user_existing, setuser] = useState<boolean | object>(false);

  useEffect(() => {
     
  }, []);


    useEffect(() => {
      if(user.statusToken!=="token invalido"){
          console.log("enrooo",user)
        let userJSON = window.localStorage.getItem("Login_userFit_Focus");
        if (userJSON) {
          if (userJSON.length > 3) {
            let user_exists = JSON.parse(userJSON);
            setuser(user_exists);
          }
        }
      }    
  }, [user.statusToken]);

  return (
    <>
    <Div_img className="flex justify-center">
      {user_existing && <Navigate to="/fitFocus" />}
      <Div_conteiner className=" flex rounded w-11/12 bg-gray-100 ">
        <Div_form>
          <div id="menu" className=" bg-gray-200 ">
            <Link to="/auth/login">
              <p id="login">iniciar sesión</p>
            </Link>
            {!user.user ? (
              <Link to="/auth/sign-up">
                <p>registrarse</p>
              </Link>
            ) : (
              <p id="singup">registrarse</p>
            )}
          </div>

          {id == "login" ? 
          <Login facebook={facebook} google={google} linkedin={linkedin} loading_icon={loading_icon} /> :
          <SingUp facebook={facebook} google={google} linkedin={linkedin} loading_icon={loading_icon}/>}
          
        </Div_form>
      </Div_conteiner>
    </Div_img>
    </>
  );
}
