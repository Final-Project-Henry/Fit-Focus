import React from 'react';

interface exercise {
  name: string,
  difficulty: string,
  muscles: string,
  description: string,
}

interface RutinObj {
  order: number,
  exerc: exercise,
  time: number
}


export default function VisualExerc(props: { datos: RutinObj }) {
  return (
    <div style={{ width: "30vw", border: "1px solid red", }}>
      
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", height: "50vh" }}>

        <h1 style={{ fontSize: "2rem", fontWeight: "500" }}>
          {props.datos.exerc?.name}
        </h1>

        <label>
          <b>Dificultad del ejercicio:</b> {props.datos.exerc?.difficulty}
        </label>

        <label>
          <b>Musculos involucrados:</b> {props.datos.exerc?.muscles}
        </label>

        <label>
          <b>Descripcion:</b>
        </label>

        <p style={{ width: "20vw", fontSize: "0.8rem" }}>{props.datos.exerc?.description}</p>

      </div>
    </div>
  )
}
