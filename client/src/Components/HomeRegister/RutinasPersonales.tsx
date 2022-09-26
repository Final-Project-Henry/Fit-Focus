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
  // const [dataUser, setDataUser] = useState<any>();
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
    // setDataUser(user);
    // if (user) {
    //   if (user.routines) {
    //     if (user.routines.length === 0 && user.userinfo.length > 0)dispatch(Rutines_Get(token))
    //   }
    // }
    if(!form)dispatch(getProfileInfo(token));
    if(Object.keys(rutines).length===0)dispatch(Rutines_Get(token));
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
                    <div className=" flex flex-col justify-center text-center item-center">
                      <h2 className="text-lg ">Aun no tienes rutinas</h2>
                      <div className="text-[7rem] ">
                        <BsEmojiFrown />
                      </div>
                      <button
                        onClick={() => setfomr(true)}
                        className="  py-1 px-3 text-sm text-back font-normal leading-loose text-black bg-white duration-150 rounded-lg shadow-md hover:bg-blue-200"
                      >
                        Crear rutinas personalizadas
                      </button>
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
