import React, { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import jwt_deocde from "jwt-decode";
import { useScript, useAppDispatch, useAppSelector } from "../../app/hooks";

import {
  User_Register_State,
  selectUser,
  
} from "../../features/counter/counterSlice";
import facebook from "../assets/login-singup_media/icons8-facebook.svg";
import google from "../assets/login-singup_media/icons8-google.svg";
import linkedin from "../assets/login-singup_media/icons8-linkedin-circled.svg";
const clientId:string="647787736227-gvt467rgdovggebhuu26n05c3f9a8ok7.apps.googleusercontent.com";

interface payload {
  email: string;
  name: string;
  picture: string;
}
export default function SingUp() {

  const googlebuttonref = useRef<any>();
  const user_logeao = useAppSelector(selectUser);
  const dispatch=useAppDispatch()
  
  const [user, setuser] = useState<boolean|object>(false);

  const [data_user, set_data_user] = useState<payload | undefined>();
  const [Auth_google, Set_Auth_Google] = useState<any>();
  const [Form_data, Set_form_data] = useState({
    name: "",
    email: "",
    password: "",
  });

  
  //////////recolectar data del user con goole//////////////////////////////////////////
  const onGoogleSignIn = async (user: any) => {
    let userCred = user.credential;
    set_data_user(jwt_deocde(userCred));
  };
  //////////enviar al stado global la data del user obtenido por google//////////////////////////////////////////
  useEffect(() => {
    const data = {
      email: data_user?.email,
      name: data_user?.name,
      photo: data_user?.picture,
    };
    if (data_user) {
      dispatch(User_Register_State(data))
    }
  }, [data_user]);
  //////////actializacion del windo para obtner la api de google//////////////////////////////////////////
  useEffect(() => {
    Set_Auth_Google(window);
  }, [window]);
  //////////hooks de google y su llamado//////////////////////////////////////////

  useScript("https://accounts.google.com/gsi/client", (): void => {
    Auth_google &&
      Auth_google.google.accounts.id.initialize({
        client_id: clientId,
        callback: onGoogleSignIn,
        auto_select: false,
      });
    Auth_google &&
      Auth_google.google.accounts.id.renderButton(googlebuttonref.current, {
        size: "medium",
      });
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

    // setuser(Form_data);
    dispatch(User_Register_State(Form_data));
  }

  console.log(user);
  return (

      // <div className="w-1/2">
      //   <div>{!user&&<div ref={googlebuttonref}></div>}</div>
      //   
        <>
        <div>{user_logeao.user&&<Navigate to="/HomeRegister" />}</div>
           <form className="bg-white w-3/4 rounded-2xl p-11" onSubmit={handleSubmit}>

          <div>
            <label>Nombre</label>
            <input type="text" 
            name="name"
            className="w-full px-1"
            autoComplete="off"
            placeholder="Alex"
            value={Form_data.name}
            onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="my-5">
          <label>Email</label>
            <input type="email" 
              name="email"
              className="w-full px-1"
              autoComplete="off"
              placeholder="Alex@gmail.com"
              value={Form_data.email}
              onChange={(event) => handleChange(event)
              }/>
          </div>
          <div className="my-5">
            <label>Contraseña</label>
            <input type="password"
              name="password"
              autoComplete="off"
              className="w-full px-1"
              placeholder="***********"
              value={Form_data.password}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="w-full bg-blue-700 my-16  text-white text-center p-2  ">
              <button type="submit" >Registrarse</button>
            </div>
            <div id="auth" className="flex ">
              <div className="rounded p-3">
                <img src={google}/>
              </div>
              <div className="rounded p-3">
                <img src={facebook} />
              </div>
              <div className="rounded p-3">
                <img src={linkedin}/>
              </div>
            </div>
          </form>
      </>

  );
}
