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
  const users = useAppSelector(state=>state.user);
  const dispatch = useAppDispatch();
  const [form, setfomr] = useState(false);
  let token = useToken();
  useMemo(() => {
    if (token) {
      dispatch(getProfileInfo(token));
    }
  }, [token]);

  const fullForm = () => {
    setfomr(false);
  }

  useEffect(() => {
    let token;
    let userJSON = window.localStorage.getItem("Login_userFit_Focus");

    if (userJSON) {
      if (userJSON.length > 3) {
        let userlogin = JSON.parse(userJSON);
        token = userlogin.token;
      }
    }


    if (!form) dispatch(getProfileInfo(token));
  
    if(Object.keys(users.rutines).length===0)dispatch(Rutines_Get({token}));
  }, []);


  return (
    <>
      <div style={{width:"100%", marginBottom:"10vh"}}>
        <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}} >
          {user?.userinfo?.length > 0 ? (
            <div>
              <Rutins rutins={users.rutines?.exercises} reps={users.rutines.reps} dif={users.rutines.difficulty}/>
            </div>
          ) : (
            <>
              {user?.plan == "normal" ? (
                <>

                  <div className="flex justify-center w-full overflow-hidden h-[500px]">
                    <div className="absolute text-center flex justify-center  h-[500px] bg-[#11182852] w-full ">
                      <div className=" h-[48%] mt-[12%] bg-[#1118288f]">
                        <h1 className="text-white text-5xl text-center mt-[5%]  p-5">
                          Para visualizar tus rutinas personalizadas
                          <br />
                          debes tener una cuenta premium
                          <Link to="/mercadopago" className="text-white">
                            <br />
                            <br />
                            <h1 className="text-white text-5xl underline"><b>Haz click aquí</b></h1>
                          </Link>
                        </h1>
                      </div>
                    </div>
                    <img className="w-full object-cover" src={plancha} />
                  </div>
                </>
              ) : (
                <>
                  {form ? (
                    <Form_rutinas function={fullForm} />
                  ) : (
                    <div className="flex justify-center w-full overflow-hidden h-[500px]">
                      <div className="absolute text-center flex justify-center  h-[500px] bg-[#11182852] w-full">
                        <button
                          onClick={() => setfomr(true)}
                          className="p-5 w-[40%] m-auto bg-[#111828ad] font-normal text-white shadow-2xl hover:animate-pulse active:animate-ping text-4xl"
                        >
                          Crea tu rutina personalizada
                        </button>
                      </div>
                      <img className="w-full object-cover" src={plancha} />

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
