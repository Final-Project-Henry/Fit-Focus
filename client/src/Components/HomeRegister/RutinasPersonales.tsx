import React from 'react';
import { Link } from 'react-router-dom';
import plancha from '../assets/homeRegister-media/plancha.png'


export default function RutinasPersonales() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-indigo-50">
        <img src={plancha} className="w-full h-[120vh] mt-[8%]" />
        <div className="absolute flex items-center justify-center w-[40%] bg-indigo-300 border-solid border-2 border-indigo-600 rounded-md" >
          <h1 className='text-white text-3xl text-center'>
            Para visualizar tus <b>Rutinas Personales</b>
            < br />
            debes tener una cuenta <Link to="" className="text-indigo-800">PREMIUM</Link>
          </h1>
        </div>
      </div>
    </>
  )
}

