import React,{ useEffect, useRef,useState} from "react";
import { Div_conteiner, Div_form, Div_img } from "./styles/styled_componet_login_singUp";
import { useAppDispatch, useAppSelector  } from "../../app/hooks";
import { useParams } from "react-router-dom";
import {
  User_Login_State,

  selectUser
} from '../../features/counter/counterSlice';

import img_login from "../assets/login-singup_media/sport.jpg"
import Login from "./Login";
import SingUp from "./sing-up";

export default function SingUp_Login(){
  const {id}= useParams()
  let user = useAppSelector(selectUser);
  const [componet, Set_componet]  = useState<string|boolean>(false) 

  useEffect(()=>{
    if (id=="login") {
      Set_componet(true)
    }
  },[id])

  
    return(
      <div className="flex justify-center ">
        <Div_conteiner className=" flex rounded w-11/12 bg-gray-100 " >
        <Div_img className=" flex-1 border">
          <img className="object-cover rounded"  src={img_login}/>
        </Div_img>
        <Div_form className="" >
          <div id="menu" className=" bg-gray-200   ">
            <p onClick={()=>Set_componet(true)}>iniciar sesión</p>
            <p onClick={()=>Set_componet(false)}>registrarse</p>
          </div>
          
          {componet?<Login />:<SingUp/>}
          
    
        </Div_form>
        </Div_conteiner>
        <div>
          <span>{user.status&&user.status.toString()}</span>
        </div>
      </div>
    )
}