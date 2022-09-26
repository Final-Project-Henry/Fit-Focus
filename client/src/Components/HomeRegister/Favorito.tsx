import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector, useToken } from '../../app/hooks';
import { getProfileInfo, selectUser } from '../../features/counter/counterSlice';
import plancha from '../assets/homeRegister-media/plancha.png'
import notPremiunImg from "../assets/homeRegister-media/padlock.png";
import notPremiunImg2 from "../assets/homeRegister-media/Img3.jpg";
const Favoritos=() =>{
  const {user } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  let token=useToken()
  useEffect(() => {
    if(token){
      dispatch(getProfileInfo(token));
    }

  },[token])
  return (
    <>
      <div className="flex flex-col h-screen bg-indigo-50">
        {user?.fav?.map( 
            ({_id, name} :any) => {
              return (
                <>
                  <Link key={_id} to={`/ejercicio/${_id}`} className={`max-w-[75%] min-h-[40px] m-2 flex flex-col bg-white  shadow-md duration-150 cursor-pointer  hover:outline hover:outline-offset-1 `}
                  >
                    <p className="p-2">
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