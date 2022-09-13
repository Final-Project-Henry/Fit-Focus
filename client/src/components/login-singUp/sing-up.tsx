import React,{useEffect, useRef,useState} from "react";
import { Redirect } from "react-router-dom"
import {useDispatch,useSelector } from "react-redux";
import jwt_deocde from "jwt-decode";
import { useScript } from "../../app/hooks";
const clientId:string="647787736227-gvt467rgdovggebhuu26n05c3f9a8ok7.apps.googleusercontent.com";

interface payload{
  email:string;
  name:string;
  picture:string;
}
export default function Login(){
  const googlebuttonref = useRef<any>();
  const state = useSelector((state:any)=>state.User);
  const [user, setuser] = useState(false);
  const [data_user, set_data_user] = useState<payload>();
  const [Auth_google, Set_Auth_Google] = useState<any>()
  const [Form_data, Set_form_data] = useState(
    {
      name:"",
      email:"",
      password:"",
    }
  );
  
  useEffect(()=>{
    let userJSON = window.localStorage.getItem("Login_userFit_Focus");
    if(userJSON){
      if (userJSON.length>3) {
        let user = JSON.parse(userJSON);
        setuser(user)
      }
    }
  },[])

  useEffect(()=>{
    let valides = state&&state.Name
    if (valides) {
      window.localStorage.setItem(
        'Login_userFit_Focus', JSON.stringify(state)
      )
    }
  },[state])
 
  const onGoogleSignIn = async(user:any) => {
    let userCred = user.credential;
    set_data_user(jwt_deocde(userCred))  
  };
  
  useEffect(()=>{
    const  data: object = {Email:data_user?.email, Name:data_user?.name,Photo:data_user?.picture }
    console.log(data)
    //  Dispatch(Login_Goolge(data))

  },[data_user]) 
 
  useEffect(()=>{

    Set_Auth_Google(window)
  },[window])
  
 useScript("https://accounts.google.com/gsi/client",():void => {
    Auth_google&&Auth_google.google.accounts.id.initialize({
        client_id:clientId,
        callback: onGoogleSignIn,
        auto_select: false,
      });
      Auth_google&&Auth_google.google.accounts.id.renderButton(googlebuttonref.current, {
        size: "medium",
      });
  });

  function handleChange(event:React.ChangeEvent<HTMLFormElement | HTMLInputElement>):void {
    Set_form_data(pv=>({...pv, [event.target.name] : event.target.value }))
  }
  function handleSubmit(event:React.FormEvent):void {
    event.preventDefault();
    console.log(event);
    console.log("a")
  }
  
  
  return(
    <div>
      <div>
      <div>{!user&&<div ref={googlebuttonref}></div>}</div>
        <div>{user?<Redirect to="/"></Redirect>:user}{state?<Redirect to="/"></Redirect>:""}</div>
     </div>
      <form onSubmit={event=>handleSubmit(event)}>
        <div>
          <label>Nombre</label>
          <input type="text" 
          name="name"
          autoComplete="off"
          value={Form_data.name}
          onChange={(event) => handleChange(event)}
          />
        </div>
        <div>
        <label>Email</label>
          <input type="email" 
            name="email"
            autoComplete="off"
            value={Form_data.email}
            onChange={(event) => handleChange(event)
            }/>
        </div>
        <div>
          <label>Contraseña</label>
          <input type="password"
            name="password"
            autoComplete="off"
            value={Form_data.password}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <button type="submit" >Regristrase</button>
      </form>
    </div>
  )
}