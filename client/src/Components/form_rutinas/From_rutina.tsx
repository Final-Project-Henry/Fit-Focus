import React, { useEffect, useRef, useState } from "react";

import { useAppDispatch, useAppSelector, useToken } from "../../app/hooks";
import {
  User_Login_State,
  selectUser,
  infoUserRutina,
} from "../../features/counter/counterSlice";
import Navbar from "../Navbar/Navbar";

interface data_user {
  age: number|string;
  genre: string;
  weight: number|string;
  height: number|string;
  experience: string;
  equipment: boolean|string;
  goal: string;
}

export default function Form_rutinas(props:{function:{():void}}) {
  let user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  let token = useToken();
  const [form_data, Set_form_data] = useState<data_user>({
    age: "",
    genre: "",
    weight: "",
    height: "",
    experience: "",
    equipment: "none",
    goal: "",
  });

  function handleChange(
    event: React.ChangeEvent<
      HTMLFormElement | HTMLInputElement | HTMLTextAreaElement | any
    >
  ): void {
    
  //  if (form_data.genre) {
  //    event.target.checked=null
  //    Set_form_data((pv: any) => ({
  //     ...pv,
  //     [event.target.name]: event.target.value,
  //   }));
   
    
   
    Set_form_data((pv: any) => ({
      ...pv,
      [event.target.name]: event.target.value,
    }));
  }

  //////////enviar de datos  por medio de los input//////////////////////////////////////////
  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    dispatch(infoUserRutina({ token, form_data }));
    props.function();
    console.log(form_data);
  }

  return (
    <>
      <div className="w-full  flex justify-center flex-col">
        <form
          className="flex p-20 bg-slate-50 flex-col m-5 justify-center "
          onSubmit={handleSubmit}
          method="POST"
        >
          <div>
            <label> Genero </label>
            <br />
            <input
              type="checkbox"
              autoComplete="off"
              name="genre"
              value="man"
         
              className="m-3 rounded-full p-2 cursor-pointer"
              onChange={handleChange}
              checked={form_data.genre=="man"?true:false }
            />
            <label> Masculio </label>
            <br />
            <input
              type="checkbox"
              autoComplete="off"
              name="genre"
              value="women"
              className="m-3 rounded-full p-2 cursor-pointer"
          
              onChange={handleChange}
              checked={form_data.genre=="women"?true:false }

            />
            <label>Femenino</label>
            <br />
          </div>
          <div className="relative z-0 mb-6 w-[20%] group">
            <input
              type="number"
              name="age"
              value={form_data?.age}
              onChange={handleChange}
              className="block py-1.2 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  peer"
              placeholder=" "
        
            />
            <label
              htmlFor="Año"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Edad
            </label>
          </div>
      
            <div className="relative z-0 mb-6 w-[20%] group">
              <input
                type="number"
                name="weight"
                value={form_data?.weight}
                onChange={handleChange}
                className="block py-1.2 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  peer"
                placeholder=" "
           
              />
              <label
                htmlFor="Año"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
               Peso
              </label>
          </div>

            <div className="relative z-0 mb-6 w-[20%] group">
              <input
                type="number"
                name="height"
                value={form_data?.height}
                onChange={handleChange}
                className="block py-1.2 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="Año"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
               Altura
              </label>
          </div>
          <div>
            <label> Experiencia </label>
            <br />
            <input
              type="checkbox"
              autoComplete="off"
              name="experience"
              value="beginner"
              className="m-3 rounded-full p-2 cursor-pointer"
              onChange={handleChange}
            
              checked={form_data.experience=="beginner"?true:false }

            />
            <label>Pricipiante</label>
            <br />
            <input
              type="checkbox"
              autoComplete="off"
              name="experience"
              value="medium"
              className="m-3 rounded-full p-2 cursor-pointer"
            
              checked={form_data.experience=="medium"?true:false }
 
              onChange={handleChange}
            />
            <label>Intermedio</label>
            <br />
            <input
              type="checkbox"
              autoComplete="off"
              name="experience"
              value="advanced"
              className="m-3 rounded-full p-2 cursor-pointer"
              onChange={handleChange}
        
              checked={form_data.experience=="advanced"?true:false }
            />
            <label>Avanzado</label>
            <br />
          </div>

          <div>
            <label>Equipamiento</label>
            <br />
            <input
              type="checkbox"
              autoComplete="off"
              name="equipment"
              className="m-3 rounded-full p-2 cursor-pointer"
       
              checked={form_data.equipment==false?true:false }

              onClick={() =>
                Set_form_data((pv) => ({ ...pv, equipment: false }))
              }
            />
            <label>no</label>
            <br />
            <input
              type="checkbox"
              autoComplete="off"
              name="equipment"
              value="false"
              className="m-3 rounded-full p-2 cursor-pointer"
              
              checked={form_data.equipment==true?true:false}

              onClick={() =>
                Set_form_data((pv) => ({ ...pv, equipment: true }))
              }
            />
            <label>si</label>
          </div>

          <div>
            <label>cual es tu objetivo?</label>
            <br />
            <input
              type="checkbox"
              autoComplete="off"
              name="goal"
              value="gain muscles"
              className="m-3 rounded-full p-2 cursor-pointer"
           
              checked={form_data.goal=="gain muscles"?true:false }

              onChange={handleChange}
            />
            <label>Ganar musculos</label>
            <br />
            <input
              type="checkbox"
              autoComplete="off"
              name="goal"
              value="lower fat percentage"
              className="m-3 rounded-full p-2 cursor-pointer"
             
              checked={form_data.goal=="lower fat percentage"?true:false }

              onChange={handleChange}
            />
            <label>perder peso</label>
            <br />
          </div>
          <div>
            <input
              className=" cursor-pointer  py-2 px-10 text-sm text-back font-normal leading-loose text-white  bg-gradient-to-r from-sky-500 to-indigo-500 duration-150 rounded-lg shadow-md hover:shadow-none  hover:bg-blue-800"
              type="submit"
              value="Enviar"
            />
          </div>
        </form>
      </div>
    </>
  );
}
