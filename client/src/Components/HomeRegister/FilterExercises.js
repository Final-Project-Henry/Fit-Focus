import "./styles/HomeRegister.css"
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";


import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Exercises_Get, selectUser } from "../../features/counter/counterSlice";

// interface ejercicios {
//     _id: string
//     name: string
//     difficulty: string
//     muscles: string
//     genre: string
//     video: string
//     description: string
//     premium: boolean
//   }

export default function FilterExercises() {
  
  const dispatch = useAppDispatch();
  const {exercises} = useAppSelector(selectUser);
  const filterPremium = exercises.filter(e =>  e.premium === true)


  const [filtrado, setFiltrado] = useState([]);
  const [selected, setSelected] = useState({
    genre: "none",
    muscle: "none",
    difficulty: "none",
    premium : "false",
  })
 

  useEffect(() => {
    dispatch(Exercises_Get());
  }, []);

  useEffect(()=>{
  setFiltrado([...exercises])
},[exercises])

  useEffect(() => {


    setFiltrado( exercises.filter(e => {
      let {muscle, genre, difficulty,} = false;

      if(selected.muscle === "none" ) muscle = true
      else muscle = selected.muscle === e.muscles

      if(selected.genre === "none" ) genre = true
      else genre = selected.genre === e.genre

      if(selected.difficulty === "none" ) difficulty = true
      else difficulty = selected.difficulty === e.difficulty

      return genre && muscle && difficulty
    }))


  }, [selected])


  /* handleSelecteds */

  const handleSelectGenre = ({target}) => {
     setSelected({...selected, genre: target.value})
  } 

  const handleSelectMuscle = ({target}) => {
     setSelected({...selected, muscle: target.value})
  }

  
 const handleSelectDifficulty = ({target}) => {
      setSelected({...selected, difficulty: target.value})
 }
 const handlePremium = () => {
  setFiltrado(filterPremium)
}

  

  return (
    <div>
      <select onChange={handleSelectGenre}>
        {
          selected.genre !== "none" ? 
            <option value="none" className="option cancel">
              Cancel
            </option>
           : <option className="option" hidden>Select by Name</option> 
        }
        <option  value="both">
          Ambos
        </option>
        <option  value="man">
          Hombres
        </option>
        <option  value="woman">
          Mujeres
        </option>
      </select>

      <select onChange={handleSelectMuscle}>
        {
          selected.muscle !== "none" ? 
            <option value="none" className="option cancel">
              Cancel
            </option>
           : <option className="options" hidden>Filtrar por Musculo</option>
        }
        <option  value="upper_body">
          Upper_body
        </option>
        <option  value="functional">
          Functional
        </option>
        <option  value="lower_body">
          Lower_body
        </option>
        <option  value="abs">
          abs
        </option>
      </select>

      <select onChange={handleSelectDifficulty}>
        {
          selected.difficulty !== "none" ? 
            <option value="none" className="option cancel">
              Cancel
            </option>
           : <option className="options" hidden>Filtrar por Dificultad</option>
        }
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
      <button onClick={handlePremium}>
        PREMIUM
      </button>
      
     <div>
     <Swiper
              slidesPerView={6}
              spaceBetween={30}
              slidesPerGroup={6}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper flex content-center items-center justify-center"
            >
              {filtrado.map(
                ({
                  video,
                  name,
                  difficulty,
                  muscles,
                  genre,
                  _id,
                  description,
                  premium
                }) => {
                 
                 
                 
                    return (
                      <SwiperSlide className="bg-transparent h-auto">
                        <div
                          key={_id}
                          className={` scale-90 rounded overflow-hidden shadow-lg cursor-pointer duration-300 hover:duration-200 hover:scale-95 hover:outline hover:outline-offset-1 ${
                            difficulty == "easy"
                              ? "outline-green-400"
                              : difficulty == "medium"
                              ? "outline-yellow-400"
                              : "outline-red-400"
                          }`}
                        >
                          <img className="w-full" src={video} alt={name} />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{name}</div>
                            <p className="text-gray-700 text-base">
                              {description}{" "}
                            </p>
                          </div>
                          <div className="px-6 pt-4 pb-2">
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
                                genre === "man" ? "bg-blue-200" : "bg-pink-200"
                              } rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
                            >
                              {genre}
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                }
              )}
            </Swiper>

      </div>

    </div>
  );
}
