import "./styles/HomeRegister.css";
import React, { useMemo, useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Exercises_Get, selectUser } from "../../features/counter/counterSlice";
import notPremiunImg from "../assets/homeRegister-media/padlock.png";
import notPremiunImg2 from "../assets/homeRegister-media/Img3.jpg";
import { Link } from "react-router-dom";
import LoadingCards from "../loading/LoadingCards";
import { v4 as uuidv4 } from "uuid"

//Linia 261  etiquetas de card (deficualtad, etc)

 
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
    premium:string|boolean,
}
let num  = 8
let nuevoArray : Array<ejerciciosData> = []

export default function FilterExercises() {
  const SelecReset = useRef<any>()
  const { exercises ,user} = useAppSelector(selectUser);
  const [filtrado, setFiltrado] = useState<Array<ejerciciosData>| [] >([]);
  const [selected, setSelected] = useState<selectData>({
    genre: "none",
    muscle: "none",
    difficulty: "none",
    premium: "none",
  });

  const sumaDeAOcho= ()=>{
    num = num + 8
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
      let {muscle, genre, difficulty,premium} =  selected;
        muscle =false
        genre =false
        difficulty =false
        premium =false

      if(selected.muscle === "none" ) muscle = true
      else muscle = selected.muscle === e.muscles

      if(selected.genre === "none" ) genre = true
      else genre = selected.genre === e.genre

      if(selected.difficulty === "none" ) difficulty = true
      else difficulty = selected.difficulty === e.difficulty

      if(selected.premium === "none" ) premium = true
      else premium = selected.premium === e.premium

      return genre && muscle && difficulty && premium

    })
    nuevoArray=filt
    const ochoFiltrados2 = filt.slice(0,8)
    setFiltrado( ochoFiltrados2)
  }, [selected]);
  /* handleSelecteds */
  
  const handleSelectGenre = (event:React.ChangeEvent<HTMLSelectElement>| { [x: string]: any; value: string }) => {
    setSelected({ ...selected, genre: event.target.value });
    
  };

 const handleSelectMusc = (event:React.ChangeEvent<HTMLSelectElement>| { [x: string]: any; value: string }) => {
    setSelected({ ...selected, muscle: event.target.value });
  };

  const handleSelectDific = (event:React.ChangeEvent<HTMLSelectElement>| { [x: string]: any; value: string }) => {
    setSelected({ ...selected, difficulty: event.target.value });
  };
  
  const handleSelectPlan = (event:any) => {
    if(event.target.value=="true"){
      setSelected({ ...selected, premium:true});

    }else if(event.target.value=="false"){
      setSelected({ ...selected, premium:false});
    }else{
      setSelected({ ...selected, premium: event.target.value });
    }
  };
  
  const handleSelectLimpiar = () => {
    SelecReset.current.reset()
    setSelected({...selected,
      genre: "none",
      muscle: "none",
      difficulty: "none",
      premium: "none",
    })
  };


  return (
    <>
      <div className="bg-white flex shadow  justify-around items-center w-[80%] m-auto">
        <form ref={SelecReset}>
        <select
          className="cursor-pointer  m-5  text-sm text-back font-normal leading-loose border-none outline-none py-0 shadow-md"
          onChange={(e)=>handleSelectGenre(e)}
        >
          {selected.genre !== "none"?
            <option  value="none">
              Todos
            </option>
           : 
            <option className="option" hidden>
              Genero
            </option>
          }
          <option  value="both">Ambos</option>
          <option  value="man">Hombres</option>
          <option  value="woman">Mujeres</option>
        </select>

        <select
          className=" cursor-pointer text-sm text-back font-normal leading-loose border-none py-0 outline-none shadow-md"
          onChange={(e)=>handleSelectMusc(e)}
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
          <option value="stretching">stretching</option>
          <option value="abs">abs</option>
        </select>

        <select
          className="cursor-pointer m-5 py-0   text-sm text-back font-normal leading-loose  border-none outline-none  shadow-md"
          onChange={handleSelectDific}
      
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

        <select
          className="cursor-pointer m-5 py-0   text-sm text-back font-normal leading-loose  border-none outline-none  shadow-md"
          onChange={handleSelectPlan}
        >
          {selected.premium !== "none" ? (
            <option value="none" className="option cancel">
              Cancel
            </option>
          ) : (
            <option className="options" hidden>
              Plan
            </option>
          )}
          <option className="options" value="true">
            Premium
          </option>
          <option className="options" value="false">
            Gratis
          </option>
        </select>
        </form>
        <div>
          <button className=" text-red-500 p-2 cursor-pointer m-5 py-0   text-sm text-back font-normal leading-loose  border-none outline-none  shadow-md active:shadow" onClick={()=> handleSelectLimpiar()}>
            Limpiar filtro
          </button>
        </div>
      </div>
      <div>
        <section className="grid grid-cols-4">
          {
            filtrado.length>0 || exercises.length>0?filtrado.map(
            ({_id, video, name, difficulty, muscles, genre, premium }) => {
              return (
                <div key={uuidv4()}>
                  <Link key={_id} to={(premium&&user?.plan=="normal")?`/mercadopago`:`/ejercicio/${_id}`} className={`max-w-[75%] min-h-[240px] m-10 flex flex-col bg-white  shadow-md duration-150 cursor-pointer  hover:outline hover:outline-offset-1 ${
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
                      <div className="absolute flex min-h-[10px] w-[10%] justify-center items-center z-10 ">
                      <br />
                      <img
                        className="absolute z-10  w-[50%]"
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
                      className={`h-[200px] overflow-hidden  ${
                        (premium&&user?.plan=="normal") ? "blur-[5px]" : "blur-0"
                      }`}
                    >
                      <img className="object-cover h-[200px] w-full" src={(premium&&user?.plan=="normal")?notPremiunImg2:video} alt="" />
                    </div>
                    <div className={`${(premium&&user?.plan=="normal")? "blur-[5px]" : "blur-0"}`}>
                      <h5 className="p-2 text-center text-xl font-bold -tracking-widest text-gray-900">
                        {name}
                      </h5>
                    </div>

                    <div
                      className={` text-center ${(premium&&user?.plan=="normal") ? "blur-[5px]" : "blur-0"}`}
                    >
                      <span
                        className={`inline-block ${
                          difficulty == "easy"
                            ? "bg-green-200"
                            : difficulty == "medium"
                            ? "bg-yellow-200"
                            : "bg-red-200"
                        } rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
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
                        } rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
                      >
                        {genre}
                      </span>
                    </div>
                  </Link>
                </div>
              );
            }
          ) : 
          <LoadingCards num={"12345678"}/>}
        </section>
      </div>
      {filtrado.length<50?
        <div className="w-fill border flex shadow-[0 0 5px #111828e8] justify-center">
         <button className="p-4" onClick={sumaDeAOcho}>Ver Mas ▽</button>
        </div>:""}
    </>
  );
}
