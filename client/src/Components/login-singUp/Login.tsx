import React,{ useEffect, useRef,useState} from "react";
import { Div_conteiner, Div_form, Div_img } from "./styles/styled_componet_login_singUp";
import { useAppDispatch, useAppSelector  } from "../../app/hooks";
import {
  User_Login_State,

  selectUser
} from '../../features/counter/counterSlice';

import img_login from "../assets/login-singup_media/sport.jpg"

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
    console.log(Form_data)
  }
  
    return(
      <div className="flex justify-center ">
        <Div_conteiner className=" flex w-11/12 bg-gray-300 " >
        <Div_img className=" flex-1 border">
          <img className="object-cover"  src={img_login}/>
        </Div_img>
        <Div_form className="flex-1" >
          <div className=" bg-zinc-400 ">
            <p>iniciar sesión</p>
            <p>registrar</p>
          </div>
          <form className="bg-slate-100 w-3/4 rounded-2xl p-3" onSubmit={handleSubmit}>
            <div>
            <label>Email</label>
              <input type="email"
                  name="email"
                  className="mt-1 block w-full"
                  autoComplete="off"
                  value={Form_data.email}
                  onChange={(event) => handleChange(event)}
              />
            </div>
            <div>
              <label>contraseña</label>
              <input type="password" 
                  name="password"
                  className="mt-1 block w-full"
                  autoComplete="off"
                  value={Form_data.password}
                  onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="w-full bg-blue-700  text-white text-center p-2 my-5 ">
              <button type="submit" >iniciar sesión</button>
            </div>
          </form>
        </Div_form>
        </Div_conteiner>
        <div>
          <span>{user.status.toString()}</span>
        </div>
      </div>
    )
}