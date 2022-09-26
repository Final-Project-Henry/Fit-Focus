import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../features/counter/counterSlice';
import plancha from '../assets/homeRegister-media/plancha.png'
import notPremiunImg from "../assets/homeRegister-media/padlock.png";
import notPremiunImg2 from "../assets/homeRegister-media/Img3.jpg";
const Favoritos=() =>{
  const {user } = useAppSelector(selectUser);

  return (
    <>
      <div className="flex flex-col h-screen bg-indigo-50">
        {user?.fav?.map( 
            ({_id, name} :any) => {
              return (
                <>
                  <Link key={_id} to={`/ejercicio/${_id}`} className={`max-w-[75%] min-h-[40px] m-10 flex flex-col bg-white  shadow-md duration-150 cursor-pointer  hover:outline hover:outline-offset-1 `}
                  >
                    <p className="p-5">
                        {name}
                    </p>
                </Link>
            </>
          )
        })}
      </div>
    </>
  )
}


export default Favoritos