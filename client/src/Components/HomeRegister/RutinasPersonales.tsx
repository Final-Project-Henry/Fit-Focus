import React, { useEffect, useState } from 'react';
import { BsEmojiFrown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import plancha from '../assets/homeRegister-media/plancha.png'

 interface Propos {
  user: object| null| string;
 }
 interface User{
  plan: string
 }
 const RutinasPersonales:React.FC<Propos> =({user})=>{
  const [dataUser , setDataUser ] = useState<any>();
  useEffect(() => {
    setDataUser(user)
  },[user])
  console.table(dataUser)
  return (
    <>
    <div>
        <div className={`flex items-center justify-center h-screen`} >
         {dataUser?.userinfo.length>0?
    
         <div>
          rutinas
         </div>:
         <>
            {dataUser?.plan=="normal"? <>
            <img src={plancha}  className=" absolute w-[80%] "/>
            <div className="absolute flex items-center justify-center w-[40%] bg-indigo-300 border-solid border-2 border-indigo-600 rounded-md" >
              <h1 className='text-white text-3xl text-center'>
                Para visualizar tus <b>Rutinas Personales</b>
                < br />
                debes tener una cuenta <Link to="/mercadopago" className="text-indigo-800">PREMIUM</Link>
              </h1>
            </div>
            </>:
          <div className=" flex flex-col justify-center text-center item-center">
            <h2 className="text-lg " >Aun no tienes rutinas</h2>
            <div className="text-[7rem] "><BsEmojiFrown/></div>
            <Link to="/fitFocus/form_user" className="  py-1 px-3 text-sm text-back font-normal leading-loose text-black bg-white duration-150 rounded-lg shadow-md hover:bg-blue-200">Crear rutinas personalizadas</Link>
          </div>}
         </>
         }
        </div>
    </div>
    </>
  )
}

export default RutinasPersonales