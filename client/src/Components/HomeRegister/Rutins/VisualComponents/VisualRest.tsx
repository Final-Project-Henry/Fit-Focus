import React from 'react';

interface RutinObj {
  exer: string,
  time: number
}

export default function VisualRest() {
  return (
    <div className=' bg-zinc-100 shadow-lg overflow-auto' style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", width: "30vw"}}>

      <h1  className='relative text-4xl font-semibold mt-5 shadow-sm px-3 rounded-md'>
        El Descanso es vital
      </h1>
      <p className='text-xl font-medium w-[75%] font-sans text-gray-900 hover:text-gray-800'>
        Cuando entrenamos, estamos dando a nuestro cuerpo un estímulo. Lo sometemos a un estrés. Después de este esfuerzo habremos perdido energía y fuerza. Para que el cuerpo vuelva a tener sus niveles normales, necesita descansar.
      </p>

    </div>
  )
}
