import "./styles/HomeRegister.css"
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

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
  const [filtrado, setFiltrado] = useState([]);
  const [selected, setSelected] = useState({
    genre: "none",
    muscle: "none",
    difficulty: "none"
  })

  console.log(exercises)
 

  useEffect(() => {
    dispatch(Exercises_Get());
  }, []);

  useEffect(()=>{
  setFiltrado([...exercises])
},[exercises])

  useEffect(() => {


    setFiltrado( exercises.filter(e => {
      let {muscle, genre, difficulty} = false;

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
      
     { <div>
      <button>
      {filtrado?.map(e => <div>{e.name
    }</div>)}
    </button>
    </div>  }

    </div>
  );
}
