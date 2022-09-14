import React,{useEffect, useRef,useState} from "react";
import { Redirect } from "react-router-dom"
import jwt_deocde from "jwt-decode";
import { useScript,useAppDispatch, useAppSelector  } from "../../app/hooks";
import {
  User,
  User_Register_State,
  selectUser
} from '../../features/counter/counterSlice';
const clientId:string="647787736227-gvt467rgdovggebhuu26n05c3f9a8ok7.apps.googleusercontent.com";

interface payload{
  email:string;
  name:string;
  picture:string;
}
export default function SingUp(){
  const googlebuttonref = useRef<any>();
  const user_logeao = useAppSelector(selectUser);
  const dispatch=useAppDispatch()
  const [user, setuser] = useState<boolean|object>(false);

  const [data_user, set_data_user] = useState<payload|undefined>();
  const [Auth_google, Set_Auth_Google] = useState<any>()
  const [Form_data, Set_form_data] = useState(
    {
      name:"",
      email:"",
      password:"",
    }
  );

  //buscar usuario en el localStorage//////////////////////////////////////////////////////////////

  useEffect(()=>{
    let userJSON = window.localStorage.getItem("Login_userFit_Focus");
    if(userJSON){
      if (userJSON.length>3) {
        let user_exists = JSON.parse(userJSON);
        setuser(user_exists)
      }
    }
  },[])

  //guardar usuario en el localStorage////////////////////////////////////////////////////////////

  useEffect(()=>{

    if (user_logeao.user) {
      window.localStorage.setItem(
        'Login_userFit_Focus', JSON.stringify(user_logeao.user)
      )
    }
  },[user_logeao.user])
  //////////recolectar data del user con goole//////////////////////////////////////////
  const onGoogleSignIn = async(user:any) => {
    let userCred = user.credential;
    set_data_user(jwt_deocde(userCred))
  };
  //////////enviar al stado global la data del user obtenido por google//////////////////////////////////////////
  useEffect(() => {
    const  data = {email:data_user?.email, name:data_user?.name,photo:data_user?.picture }
    if (data_user) {
     dispatch(User(data))
     dispatch(User_Register_State(data))
    }
  },[data_user]) 

   //////////actializacion del windo para obtner la api de google//////////////////////////////////////////
  useEffect(()=>{
    Set_Auth_Google(window)
  },[window])
   //////////hooks de google y su llamado//////////////////////////////////////////
  
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
   //////////obtencion de datos  por medio de los input//////////////////////////////////////////

  function handleChange(event:React.ChangeEvent<HTMLFormElement | HTMLInputElement>):void {
    Set_form_data(pv=>({...pv, [event.target.name] : event.target.value }))
  }

   //////////enviar de datos  por medio de los input//////////////////////////////////////////
  function handleSubmit(event:React.FormEvent):void {
    event.preventDefault();
    
    setuser(Form_data)
    dispatch(User_Register_State(Form_data))

  }
  console.log(user);
  return(
    <div className="flex flex-row flex-column">
      <div>
        <div>{!user&&<div ref={googlebuttonref}></div>}</div>
        <div>{user?<Redirect to="/home"></Redirect>:user}{user_logeao.user?<Redirect to="/home"></Redirect>:""}</div>
     
      <form className="" onSubmit={event=>handleSubmit(event)}>
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
    </div>
  )
}