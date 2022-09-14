import React,{ useEffect, useRef,useState} from "react";

import { useAppDispatch, useAppSelector  } from "../../app/hooks";
import {
  User_Login_State,

  selectUser
} from '../../features/user/UserSelice';

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
      <div>
        <div>
          <form onSubmit={handleSubmit}>
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
            <div>
              <button type="submit" >iniciar seccion</button>
            </div>
          </form>
        </div>
        <div>
          <span>{user.status.toString()}</span>
        </div>
      </div>
    )
}