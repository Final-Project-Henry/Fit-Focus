import React, { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector, useToken } from "../../app/hooks";
import loading_icon from "../assets/icons/loading.svg"

import {
  selectUser,
  EditUser
} from "../../features/counter/counterSlice";


const EditPass= ()=> {
  let user = useAppSelector(selectUser);
  let token=useToken()
  const dispatch = useAppDispatch();
  const [loagin, Set_loagin] = useState(false);
  const [Form_data, Set_form_data] = useState({
    password: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLFormElement | HTMLInputElement>
  ): void {
    Set_form_data((pv) => ({ ...pv, [event.target.name]: event.target.value }));
  }

  //////////enviar de datos  por medio de los input//////////////////////////////////////////
  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    Set_loagin(true);
    dispatch(EditUser({token,Form_data}));

  }

  return (
    <>
 
     <form className="bg-white w-3/4 rounded-2xl p-11" onSubmit={handleSubmit}>
        <div className="flex-1">
         <div className="my-5">
            <label>contraseña</label>
            <input
              type="password"
              name="password"
              className="border-none w-full"
              autoComplete="off"
              placeholder="••••••••"
              value={Form_data.password}
              onChange={(event) => handleChange(event)}
            />
          </div>
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
              "iniciar sesión"
            ) : (
              <span className=" flex justify-center">
                <img className="animate-spin w-5 mx-2" src={loading_icon} />
                Loading...
              </span>
            )}
          </button>
        </div>

      </form>
    </>
  );
};
export default EditPass;

