import React from 'react';

interface RutinObj {
  exer: string,
  time: number
}

export default function VisualRest() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", width: "30vw", border: "1px solid red" }}>

      <h1 style={{ fontSize: "2rem", fontWeight: "500" }}>
        El Descanso es vital
      </h1>
      <p style={{ width: "20vw" }}>
        Cuando entrenamos, estamos dando a nuestro cuerpo un estímulo. Lo sometemos a un estrés. Después de este esfuerzo habremos perdido energía y fuerza. Para que el cuerpo vuelva a tener sus niveles normales, necesita descansar.
      </p>

    </div>
  )
}
