import "./styles/HomeRegister.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Exercises_Get, selectUser } from "../../features/counter/counterSlice";
import notPremiunImg from "../assets/homeRegister-media/padlock.png";
export default function FilterExercises() {
  const dispatch = useAppDispatch();
  const { exercises } = useAppSelector(selectUser);
  const [filtrado, setFiltrado] = useState([]);
  const [selected, setSelected] = useState({
    genre: "none",
    muscle: "none",
    difficulty: "none",
  });

  console.log(exercises);

  useEffect(() => {
    dispatch(Exercises_Get());
  }, []);

  useEffect(() => {
    setFiltrado([...exercises]);
  }, [exercises]);

  useEffect(() => {
    setFiltrado(
      exercises.filter((e) => {
        let { muscle, genre, difficulty } = false;

        if (selected.muscle === "none") muscle = true;
        else muscle = selected.muscle === e.muscles;

        if (selected.genre === "none") genre = true;
        else genre = selected.genre === e.genre;

        if (selected.difficulty === "none") difficulty = true;
        else difficulty = selected.difficulty === e.difficulty;

        return genre && muscle && difficulty;
      })
    );
  }, [selected]);

  /* handleSelecteds */

  const handleSelectGenre = ({ target }) => {
    setSelected({ ...selected, genre: target.value });
  };

  const handleSelectMuscle = ({ target }) => {
    setSelected({ ...selected, muscle: target.value });
  };

  const handleSelectDifficulty = ({ target }) => {
    setSelected({ ...selected, difficulty: target.value });
  };
  const handleSelectPremiun = ({ target }) => {
    setSelected({ ...selected, difficulty: target.value });
  };

  return (
    <>
      <div>
        <select
          className="cursor-pointer rounded-xl m-5  text-sm text-back font-normal leading-loose border-none outline-none py-0 shadow-md"
          onChange={handleSelectGenre}
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
          onChange={handleSelectMuscle}
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
      </div>
      <div>
        <section className="grid grid-cols-3">
          {filtrado?.map(
            ({ video, name, difficulty, muscles, genre, premium }) => {
              return (
                <>
                  <div
                    className={`max-w-xl flex flex-col bg-white rounded-lg shadow-md duration-150 cursor-pointer scale-90 hover:scale-95  hover:outline hover:outline-offset-1 ${
                      premium
                        ? "outline-blue-400"
                        : difficulty == "easy"
                        ? "outline-green-400"
                        : difficulty == "medium"
                        ? "outline-yellow-400"
                        : "outline-red-400"
                    }
                      ${premium ? "bg-slate-100" : "bg-slate-50"}`}
                  >
                    {premium && (
                      <div className="flex flex-col justify-center  items-center">
                      <div className="absolute flex min-h-[10px] justify-center items-center z-10 w-full">
                      <img
                        className="absolute z-10 w-[30%]"
                        src={notPremiunImg}
                        alt=""
                      />
                      <button className=" absolute z-10 m-[50px] py-2 px-3 text-sm font-medium text-center text-white bg-[#6c63ff] duration-150 rounded-lg hover:bg-blue-800">
                        Premium
                      </button>

                      </div>
                                            </div>
                    )}

                    <div
                      className={`h-[160px] overflow-hidden  ${
                        premium ? "blur-[5px]" : "blur-0"
                      }`}
                    >
                      <img className="rounded-t-lg" src={video} alt="" />
                    </div>
                    <div className={`${premium ? "blur-[5px]" : "blur-0"}`}>
                      <h5 className="p-2 text-2xl font-bold tracking-tight text-gray-900">
                        {name}
                      </h5>
                    </div>

                    <div
                      className={`p-3  ${premium ? "blur-[5px]" : "blur-0"}`}
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
                      className={`p-4  ${premium ? "blur-[5px]" : "blur-0"}`}
                    >
                      <a
                        href="#"
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
                      </a>
                    </div>
                  </div>
                </>
              );
            }
          )}
        </section>
      </div>
    </>
  );
}
