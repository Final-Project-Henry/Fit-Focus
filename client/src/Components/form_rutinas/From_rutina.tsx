import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

import { useAppDispatch, useAppSelector, useToken } from "../../app/hooks";
import {
  User_Login_State,
  selectUser,
  infoUserRutina,
} from "../../features/counter/counterSlice";
import Navbar from "../Navbar/Navbar";

import imagen from "../assets/homeRegister-media/imagen.jpg";

//const imagen = require("../assets/imagen.jpg");

interface data_user {
  age: number | string;
  genre: string;
  weight: number | string;
  height: number | string;
  experience: string;
  equipment: boolean | string;
  goal: string;
}

//const regexDecimalNums = /^\d.\d+$/;

const regexAge = /^((60)|([2-5][0-9]{1}))$/;

const regexNumPosivos = /^((150)|(1[0-4][0-9]{1})|([5-9][0-9]{1}))$/;

const regexNumPosivosAltura =
  /^((220)|(2[0-1][0-9]{1})|(1[0-9]{2})|([5-9][0-9]{1}))$/;

export default function Form_rutinas(props: { function: { (): void } }) {
  let user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  let token = useToken();
  const [form_data, Set_form_data] = useState<data_user | any>({
    age: "",
    genre: "",
    weight: "",
    height: "",
    experience: "",
    equipment: "none",
    goal: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
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
    setError({ ...error, [event.target.name]: "" }); //este setError
  }

  //////////enviar de datos  por medio de los input//////////////////////////////////////////
  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    //const age = parseInt(form_data.age);

    if (!regexAge.test(form_data.age)) {
      Swal.fire({
        title: "Por favor ingrese una edad entre 20 y 60 años",
        icon: "info",
        showCancelButton: false,
        confirmButtonColor: "#230bf8",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        setError({ ...error, name: "border-red-600" });
      });
      return;
    }

    if (!regexNumPosivos.test(form_data.weight)) {
      Swal.fire({
        title:
          "Por favor ingrese un peso entre 50 y 120 kilogramos, de lo contrario, consulte a su médico",
        icon: "info",
        showCancelButton: false,
        confirmButtonColor: "#230bf8",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        setError({ ...error, name: "border-red-600" });
      });
      return;
    }

    if (!regexNumPosivosAltura.test(form_data.height)) {
      Swal.fire({
        title: "Por favor ingrese una estatura valida",
        icon: "info",
        showCancelButton: false,
        confirmButtonColor: "#230bf8",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        setError({ ...error, name: "border-red-600" });
      });
      return;
    }

    if (form_data.genre.length === 0) {
      Swal.fire({
        title: "Por favor seleccione un genero",
        icon: "info",
        showCancelButton: false,
        confirmButtonColor: "#230bf8",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    if (form_data.experience.length === 0) {
      Swal.fire({
        title: "Por favor seleccione una experiencia",
        icon: "info",
        showCancelButton: false,
        confirmButtonColor: "#230bf8",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    if (form_data.equipment.length === 0) {
      Swal.fire({
        title: "Por favor seleccione si posée equipamiento",
        icon: "info",
        showCancelButton: false,
        confirmButtonColor: "#230bf8",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    if (form_data.goal.length === 0) {
      Swal.fire({
        title: "Por favor seleccione un objetivo",
        icon: "info",
        showCancelButton: false,
        confirmButtonColor: "#230bf8",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    dispatch(infoUserRutina({ token, form_data }));
    props.function();
  }

  return (
    <>
      <div className="bg-gray-900 w-[100%]">
        <img
          src={imagen}
          className="w-full h-[100vh] object-fit:cover absolute "
        />
        <div className="w-full flex justify-center items-center flex-col relative  ">
          <form
            className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#11182852]"
            onSubmit={handleSubmit}
            method="POST"
          >
            <div className=" bg-gray-200 px-20 py-10 bg-opacity-80 ">
              <h1 className="flex flex-col text-3xl text-[#111827]">
                Formulario de rutinas personalizadas
              </h1>
              <h1 className="flex flex-col justify-center items-center text-2xl text-[#111827]">
                Por favor ingrese sus datos
              </h1>
              <br />
              <div className="flex justify-start">
                <label className="mr-3 text-[#111827] "> Género: </label>
                <br />
                <input
                  type="checkbox"
                  autoComplete="off"
                  name="genre"
                  value="man"
                  className="mx-2 rounded-full p-2 cursor-pointer"
                  onChange={handleChange}
                  checked={form_data.genre == "man" ? true : false}
                />
                <label className="mr-1"> Masculino </label>
                <br />
                <input
                  type="checkbox"
                  autoComplete="off"
                  name="genre"
                  value="woman"
                  className="mx-2 rounded-full p-2 cursor-pointer"
                  onChange={handleChange}
                  checked={form_data.genre == "woman" ? true : false}
                />
                <label className="mr-1">Femenino</label>
                <br />
              </div>
              <div className="relative z-0 mb-6 w-[100%] group mt-5">
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
                  className=" peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Edad
                </label>
              </div>
              <div className="relative z-0 mb-6 w-[100%] group">
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
                  className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Peso en kilogramos
                </label>
              </div>
              <div className="relative z-0 mb-6 w-[100%] group">
                <input
                  type="number"
                  name="height"
                  value={form_data?.height}
                  onChange={handleChange}
                  className="block py-1.2 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  peer"
                  placeholder=" "
                />
                <label
                  htmlFor="Año"
                  className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Altura en centimetros
                </label>
              </div>
              <div className="flex justify-start">
                <label className="mr-3 text-[#111827]"> Experiencia: </label>
                <br />
                <input
                  type="checkbox"
                  autoComplete="off"
                  name="experience"
                  value="beginner"
                  className="mx-1 rounded-full p-2 cursor-pointer mr-2"
                  onChange={handleChange}
                  checked={form_data.experience == "beginner" ? true : false}
                />
                <label className="mr-1">Pricipiante</label>
                <br />
                <input
                  type="checkbox"
                  autoComplete="off"
                  name="experience"
                  value="medium"
                  className="mx-1 rounded-full p-2 cursor-pointer mr-2"
                  checked={form_data.experience == "medium" ? true : false}
                  onChange={handleChange}
                />
                <label className="mr-1">Intermedio</label>
                <br />
                <input
                  type="checkbox"
                  autoComplete="off"
                  name="experience"
                  value="advanced"
                  className="mx-2 rounded-full p-2 cursor-pointer mr-2"
                  onChange={handleChange}
                  checked={form_data.experience == "advanced" ? true : false}
                />
                <label className="mr-1">Avanzado</label>
                <br />
              </div>

              <div className="flex justify-start mt-5">
                <label className="mr-3 text-[#111827]">Equipamiento:</label>
                <br />
                <input
                  type="checkbox"
                  autoComplete="off"
                  name="equipment"
                  className="mx-2 rounded-full p-2 cursor-pointer mr-2"
                  checked={form_data.equipment == false ? true : false}
                  onClick={() =>
                    Set_form_data((pv: any) => ({ ...pv, equipment: false }))
                  }
                />
                <label className="mr-2">No</label>
                <br />
                <input
                  type="checkbox"
                  autoComplete="off"
                  name="equipment"
                  value="false"
                  className="mx-2 rounded-full p-2 cursor-pointer"
                  checked={form_data.equipment == true ? true : false}
                  onClick={() =>
                    Set_form_data((pv: any) => ({ ...pv, equipment: true }))
                  }
                />
                <label>Si</label>
              </div>
              <div className="flex justify-start mt-5">
                <label className="text-[#111827] mr-3">Objetivo:</label>
                <br />
                <input
                  type="checkbox"
                  autoComplete="off"
                  name="goal"
                  value="gain muscles"
                  className="mx-2 rounded-full p-2 cursor-pointer mr-2"
                  checked={form_data.goal == "gain muscles" ? true : false}
                  onChange={handleChange}
                />
                <label className="mr-2">Ganar músculos</label>
                <br />
                <input
                  type="checkbox"
                  autoComplete="off"
                  name="goal"
                  value="lower fat percentage"
                  className="mx-2 rounded-full p-2 cursor-pointer mr-2"
                  checked={
                    form_data.goal == "lower fat percentage" ? true : false
                  }
                  onChange={handleChange}
                />
                <label className="mr-1">Perder peso</label>
                <br />
              </div>
              <div className="flex flex-col">
                <input
                  className=" cursor-pointer py-2 px-10 text-sm text-back font-normal leading-loose text-white  bg-[#111827] from-sky-500 to-indigo-500 duration-500 shadow-md hover:shadow-none hover:border-solid border-[2px] border-[#111827] hover:bg-blue-100 hover:text-[#111827] mt-5"
                  type="submit"
                  value="Enviar"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
