import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector, useToken } from "../../app/hooks";

import {
  User_Login_State,
  selectUser,
  EditUser,
} from "../../features/counter/counterSlice";
interface Propos {
  loading_icon: string;
}

const NewPassword:React.FC<Propos> = ({loading_icon}) => {
  let user = useAppSelector(selectUser);
  let token = useToken()
  const dispatch = useAppDispatch();
  const Navegation=  useNavigate()  
  const [validar, setvalidadr] = useState(false)
  const [Form_data, Set_form_data] = useState({
    password: "",
    Validpassword: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLFormElement | HTMLInputElement>
  ): void {
    Set_form_data((pv) => ({ ...pv, [event.target.name]: event.target.value }));
  }

  //////////enviar de datos  por medio de los input//////////////////////////////////////////
  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    
    if (Form_data.password === Form_data.Validpassword) {
       let data = {password:Form_data.password}
       dispatch(EditUser({ token, data}));
    }else{
      setvalidadr(true)
    }
  }

  return (
    <>
      <form className="bg-white w-3/4 rounded-2xl p-11" onSubmit={handleSubmit}>
        <div className="flex-1">
          <div>
            <label>Nueva contraseña</label>
            <input
              type="text"
              name="password"
              className="border-none w-full mb-2"
              placeholder="••••••••"
              value={Form_data.password}
              onChange={(event) => handleChange(event)}
            />
            <br />
          </div>
          <div className="my-5">
            <label>Validar contraseña</label>
            <input
              type="password"
              name="Validpassword"
              className="border-none w-full"
              autoComplete="off"
              placeholder="••••••••"
              value={Form_data.Validpassword}
              onChange={(event) => handleChange(event)}
            />
          </div>
          {validar&&<label className="text-red-500">contraseña incorrecta</label>}
        </div>

        <div
          id="btm_submit"
          className="w-full bg-blue-700   text-white text-center  my-5"
        >
          <button
            className="w-full bg-blue-700   text-white text-center p-2 "
            type="submit"
          >
            {user.status ? (
              "Aceptar"
            ) : (
              <span className=" flex justify-center">
                <img className="animate-spin w-5 mx-2" src={loading_icon} />
                Loading...
              </span>
            )}
          </button>     
        </div>
        <div className="text-sm font-medium relative top-2 text-gray-500 ">
          <Link
            to="/auth/login"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            volver a iniciar sesión
          </Link>
        </div>
      </form>
    </>
  );
};
export default NewPassword;
