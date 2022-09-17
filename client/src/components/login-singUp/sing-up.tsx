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

    // setuser(Form_data);
    dispatch(User_Register_State(Form_data));
  }

  console.log(user);
  return (

   
        <>
        {user_logeao.user&&<Navigate to="/auth/login"/>}
          <form className="bg-white w-3/4 rounded-2xl p-11" onSubmit={handleSubmit}>
          <div className="flex-1">
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
            </div>

            <div className="w-full bg-blue-700   text-white text-center">
              <button className="w-full bg-blue-700   text-white text-center p-2 " type="submit" >Registrarse</button>
            </div>
          </form>

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
      </>

  );
}
