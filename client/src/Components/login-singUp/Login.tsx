import React,{ useEffect, useRef,useState} from "react";
import { Navigate } from "react-router-dom";

import { useAppDispatch, useAppSelector  } from "../../app/hooks";
import {
  User_Login_State,

  selectUser
} from '../../features/counter/counterSlice';
import facebook from "../assets/login-singup_media/icons8-facebook.svg";
import google from "../assets/login-singup_media/icons8-google.svg";
import linkedin from "../assets/login-singup_media/icons8-linkedin-circled.svg";
export default function Login(){
  let user = useAppSelector(selectUser);
  const dispatch = useAppDispatch()
  const [Form_data, Set_form_data] = useState(
    {
      email:"",
      password:"",
    }
  );
  function handleChange(event:React.ChangeEvent<HTMLFormElement | HTMLInputElement>):void {
    Set_form_data(pv=>({...pv, [event.target.name] : event.target.value }))

  }

   //////////enviar de datos  por medio de los input//////////////////////////////////////////
   function handleSubmit(event:React.FormEvent):void {
    event.preventDefault();
    dispatch(User_Login_State(Form_data))
  }
  
    return(
    <>
       <div>{user&&<Navigate to="/HomeRegister" />}</div>
      <form className="bg-white w-3/4 rounded-2xl p-11" onSubmit={handleSubmit}>

            <div>
            <label>Email</label>
              <input type="email"
                  name="email"
                  className="border-none w-full "
                  autoComplete="off"
                  placeholder="Alex@gmail.com"
                  value={Form_data.email}
                  onChange={(event) => handleChange(event)}
              />
            </div>
            <div>
              <label>contraseña</label>
              <input type="password" 
                  name="password"
                  className="border-none w-full"
                  autoComplete="off"
                  placeholder="*******"
                  value={Form_data.password}
                  onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="w-full bg-blue-700 my-16  text-white text-center p-2  ">
              <button type="submit" >iniciar sesión</button>
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
      
    )
}