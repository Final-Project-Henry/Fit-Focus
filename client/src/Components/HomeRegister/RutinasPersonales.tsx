import React, { useEffect, useMemo, useState } from "react";
import { BsEmojiFrown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector, useToken } from "../../app/hooks";
import {
  Exercises_Get,
  getProfileInfo,
  Rutines_Get,
  selectUser,
} from "../../features/counter/counterSlice";
import plancha from "../assets/homeRegister-media/plancha.png";
import Form_rutinas from "../form_rutinas/From_rutina";
import Rutins from "./Rutins";

interface Propos {
  user: object | null | string;
}
interface User {
  plan: string;
}

export default function RutinasPersonales() {
  const { user } = useAppSelector(selectUser);
  const { rutines } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [form, setfomr] = useState(false);
  let token = useToken();
  useMemo(() => {
    if (token) {
      dispatch(getProfileInfo(token));
    }
  }, [token]);

  const fullForm = ()=>{
    setfomr(false);
  }
  useEffect(() => {
    let userJSON = window.localStorage.getItem("Login_userFit_Focus");
    let userlogin;
    if (userJSON) {
      if (userJSON.length > 3) {
        userlogin = JSON.parse(userJSON);
      }
    }
    console.log(userlogin);
    if(!form)dispatch(getProfileInfo(token));
    if(Object.keys(rutines).length===0)dispatch(Rutines_Get(userlogin.token));
  }, [rutines, form]);
  return (
    <>
      <div>
        <div className={`flex items-center justify-center `}>
          {user?.userinfo?.length > 0 ? (
            <div>
              <Rutins rutins={rutines?.exercises} />
            </div>
          ) : (
            <>
              {user?.plan == "normal" ? (
                <>
                  <img src={plancha} className=" w-[80%] h-[80vh]" />
                  <div className="absolute flex items-center justify-center w-[40%] bg-indigo-300 border-solid border-2 border-indigo-600 rounded-md">
                    <h1 className="text-white text-3xl text-center">
                      Para visualizar tus <b>Rutinas Personales</b>
                      <br />
                      debes tener una cuenta{" "}
                      <Link to="/mercadopago" className="text-indigo-800">
                        PREMIUM
                      </Link>
                    </h1>
                  </div>
                </>
              ) : (
                <>
                  {form ? (
                    <Form_rutinas function={fullForm}/>
                  ) : (
                    <div className="flex justify-center w-full overflow-hidden h-[500px]">
                    <div className="absolute text-center flex justify-center  h-[500px] bg-[#11182852] w-full">
                      <button
                        onClick={() => setfomr(true)}
                        className="p-5 w-[40%] m-auto bg-[#111828ad] font-normal text-white shadow-2xl hover:animate-pulse active:animate-ping text-4xl"
                      >
                        Crear tu rutinas personalizadas
                      </button>
                    </div>
                    <img className="w-full object-cover" src={plancha}/>
                
                    </div>
                      
              
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
