import React from 'react';
import { Link } from 'react-router-dom';
import plancha from '../assets/homeRegister-media/plancha.png'
interface Propos {
  fav:[];
 }

const Favoritos:React.FC<Propos>=({fav}) =>{
  console.log(fav)
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-indigo-50">
        {fav?.map((f:any) =>{
          return (
            <>
            <div>
              {f.name}
            </div>
            </>
          )
        })}
      </div>
    </>
  )
}


export default Favoritos