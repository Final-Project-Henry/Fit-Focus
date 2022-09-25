import "./styles/HomeRegister.css";
import React, { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Exercises_Get, selectUser } from "../../features/counter/counterSlice";
import notPremiunImg from "../assets/homeRegister-media/padlock.png";
import notPremiunImg2 from "../assets/homeRegister-media/Img3.jpg";
import { Link } from "react-router-dom";


interface ejerciciosData {
  _id: string;
  name: string;
  difficulty: string;
  equipment: true;
  muscles: string;
  genre: string;
  video: string;
  description: string;
  premium: string;
}

interface selectData {
    genre:string|boolean,
    muscle: string|boolean,
    difficulty: string|boolean,
}
let num  = 8
let nuevoArray : Array<ejerciciosData> = []
export default function FilterExercises() {

  const { exercises ,user} = useAppSelector(selectUser);
  const [filtrado, setFiltrado] = useState<Array<ejerciciosData>| [] >([]);

  const [selected, setSelected] = useState<selectData>({
    genre: "none",
    muscle: "none",
    difficulty: "none",
  });

  const sumaDeAOcho= ()=>{
    num = num + 8
    //filtrado = 8

    let ochoFiltrados2 = nuevoArray.slice(0,num)
    setFiltrado(ochoFiltrados2)
  }

  useEffect(() => {
    const ochoFiltrados2 = exercises.slice(0,8)
    setFiltrado(ochoFiltrados2);
    nuevoArray=exercises
  }, [exercises]);

  useEffect(() => {
    let filt= exercises.filter(e => {
      let {muscle, genre, difficulty} =  selected;
     muscle =false
     genre =false
     difficulty =false

      if(selected.muscle === "none" ) muscle = true

      else muscle = selected.muscle === e.muscles

      if(selected.genre === "none" ) genre = true
      else genre = selected.genre === e.genre

      if(selected.difficulty === "none" ) difficulty = true
      else difficulty = selected.difficulty === e.difficulty

      return genre && muscle && difficulty
    })
    nuevoArray=filt
    const ochoFiltrados2 = filt.slice(0,8)
    setFiltrado( ochoFiltrados2)
  }, [selected]);

  /* handleSelecteds */
console.log("entro")
  const handleSelectGenre = (event:React.ChangeEvent<HTMLSelectElement>| { [x: string]: any; value: string }) => {
    setSelected({ ...selected, genre: event.target.value });
  };

  const handleSelectMuscle = (event:React.ChangeEvent<HTMLSelectElement>| { [x: string]: any; value: string })=> {
    setSelected({ ...selected, muscle: event.target.value });
  };

  const handleSelectDifficulty = (event:React.ChangeEvent<HTMLSelectElement>| { [x: string]: any; value: string }) => {
    setSelected({ ...selected, difficulty:event.target.value });
  };
  const handleSelectPremiun = () => {
    setFiltrado( exercises.filter(e => e.premium === true))
  };

  return (
    <>
      <div className="bg-white">
        <select
          className="cursor-pointer rounded-xl m-5  text-sm text-back font-normal leading-loose border-none outline-none py-0 shadow-md"
          onChange={(e)=>handleSelectGenre(e)}
        >

          {selected.genre !== "none" ? (
            <option value="none" className="option cancel">
              Todos
            </option>
          ) : (
            <option className="option" hidden>
              Genero
            </option>
          )}
          <option value="both">Ambos</option>
          <option value="man">Hombres</option>
          <option value="woman">Mujeres</option>
        </select>

        <select
          className=" cursor-pointer rounded-xl text-sm text-back font-normal leading-loose border-none py-0 outline-none shadow-md"
          onChange={(e)=>handleSelectMuscle(e)}
        >
          {selected.muscle !== "none" ? (
            <option value="none" className="option cancel">
              Cancel
            </option>
          ) : (
            <option className="options" hidden>
              Filtrar por Musculo
            </option>
          )}
          <option value="upper_body">Upper_body</option>
          <option value="functional">Functional</option>
          <option value="lower_body">Lower_body</option>
          <option value="abs">abs</option>
        </select>

        <select
          className="cursor-pointer m-5 py-0 rounded-xl  text-sm text-back font-normal leading-loose  border-none outline-none  shadow-md"
          onChange={handleSelectDifficulty}
        >
          {selected.difficulty !== "none" ? (
            <option value="none" className="option cancel">
              Cancel
            </option>
          ) : (
            <option className="options" hidden>
              Filtrar por Dificultad
            </option>
          )}
          <option className="options" value="easy">
            Easy
          </option>
          <option className="options" value="medium">
            Medium
          </option>
          <option className="options" value="hard">
            Hard
          </option>
        </select>
        <button className="  py-1 px-3 text-sm text-back font-normal leading-loose text-black bg-white duration-150 rounded-lg shadow-md hover:bg-blue-200" onClick={handleSelectPremiun}>
          Premium
        </button>

     
      </div>
      <div>
        <section className="grid grid-cols-4">
          {filtrado?.map(
            ({_id, video, name, difficulty, muscles, genre, premium }) => {
              return (
                <>
                  <Link key={_id} to={(premium&&user?.plan=="normal")?`/mercadopago`:`/ejercicio/${_id}`} className={`max-w-xl flex flex-col bg-white rounded-lg shadow-md duration-150 cursor-pointer scale-90 hover:scale-95  hover:outline hover:outline-offset-1 ${
                      premium
                        ? "outline-blue-400"
                        : difficulty == "easy"
                        ? "outline-green-400"
                        : difficulty == "medium"
                        ? "outline-yellow-400"
                        : "outline-red-400"
                    }
                      ${(premium&&user?.plan=="normal") ? "bg-slate-100" : "bg-slate-50"}`}
                  >
                    {(premium&&user?.plan=="normal") && (
                      <div className="flex flex-col justify-center  items-center">
                      <div className="absolute flex min-h-[10px] justify-center items-center z-10 w-full">
                      <br />
                      <img
                        className="absolute z-10  w-[20%]"
                        src={notPremiunImg}
                        alt=""
                      />
                      <Link to="/mercadopago" className=" absolute z-10 m-[50px] py-2 px-3 text-sm font-medium text-center text-white bg-[#6c63ff] duration-150 rounded-lg hover:bg-blue-800">
                        Premium
                      </Link>
                      </div>
                    </div>
                    )}

                    <div
                      className={`h-[150px] overflow-hidden  ${
                        (premium&&user?.plan=="normal") ? "blur-[5px]" : "blur-0"
                      }`}
                    >
                      <img className="rounded-t-lg" src={(premium&&user?.plan=="normal")?notPremiunImg2:video} alt="" />
                    </div>
                    <div className={`${(premium&&user?.plan=="normal")? "blur-[5px]" : "blur-0"}`}>
                      <h5 className="p-2 text-2xl font-bold tracking-tight text-gray-900">
                        {name}
                      </h5>
                    </div>

                    <div
                      className={`p-3  ${(premium&&user?.plan=="normal") ? "blur-[5px]" : "blur-0"}`}
                    >
                      <span
                        className={`inline-block ${
                          difficulty == "easy"
                            ? "bg-green-200"
                            : difficulty == "medium"
                            ? "bg-yellow-200"
                            : "bg-red-200"
                        } rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
                      >
                        {difficulty}
                      </span>
                      <span
                        className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
                      >
                        {muscles}
                      </span>
                      <span
                        className={`inline-block ${
                          genre === "man" ? "bg-blue-400" : "bg-pink-300"
                        } rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
                      >
                        {genre}
                      </span>
                    </div>
                    <div
                      className={`p-4  ${(premium&&user?.plan=="normal") ? "blur-[5px]" : "blur-0"}`}
                    >
                      <Link
                        to={(premium&&user?.plan=="normal")?`/mercadopago`:`/ejercicio/${_id}`}
                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#6c63ff] duration-150 rounded-lg hover:bg-blue-800"
                      >
                        Empezar
                        <svg
                          aria-hidden="true"
                          className="ml-2 -mr-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </Link>

                </>
              );
            }
          )}
        </section>
        <div className="w-fill border flex">
            <button onClick={sumaDeAOcho}>Ver Mas</button>
        </div>


      </div>
    </>
  );
}
