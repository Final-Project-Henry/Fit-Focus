import React from 'react';
import { Link } from 'react-router-dom';
// import señorasala from "../assets/homeRegister-media/señorasala.png";


export default function Calculadora() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <img src={""} className="w-full h-[120vh] mt-[8%]" />
        <div className="absolute flex items-center justify-center w-[40%] bg-indigo-300 border-solid border-2 border-indigo-600 rounded-md" >
          <h1 className='text-white text-3xl text-center'>
            Para visualizar la <b>Calculadora</b>
            < br />
            debes tener una cuenta <Link to="" className="text-indigo-800">PREMIUM</Link>
          </h1>
        </div>
      </div>
    </>
  )
}

