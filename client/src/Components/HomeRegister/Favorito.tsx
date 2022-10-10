import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector, useToken } from '../../app/hooks';
import { Exercises_Get, getProfileInfo, selectUser } from '../../features/counter/counterSlice';
import baner from "../assets/Fotos y Videos HomeVisitor/lanegra.jpeg";
import notPremiunImg2 from "../assets/homeRegister-media/Img3.jpg";
import Footer from '../footer/Footer';
import Footer2 from '../footer/Footer2';
import LoadingCards from '../loading/LoadingCards';
import { v4 as uuidv4 } from "uuid"

interface ejerciciosData {
  _id: string;
  name: string;
  difficulty: string;
  equipment: true;
  muscles: string;
  genre: string;
  video: string;
  description: string;
  premium: string;
}

const Favoritos=() =>{
  const {user,exercises } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [dataFav , setDatafav] = useState<[ejerciciosData]|[]>([]);
  let token=useToken()

  useEffect(() => {
    if(token){
      dispatch(getProfileInfo(token));
    }
  },[token])

  useEffect(() => {
    if(exercises?.length===0)
      dispatch(Exercises_Get());
  },[exercises])

  useEffect(() => {
    if(exercises?.length>0){
      let fav = user?.fav?.map( ({id} :any) => {
        let favArrg =exercises.find(e=>e._id === id)
        if (favArrg) {
          return favArrg
        }
      })
      fav=fav.filter((e: any)=>e!== undefined)      
        setDatafav(fav)
    }
  },[user,exercises])
  
  return (
    <>
      <div className="flex justify-center w-full overflow-hidden h-[500px]">
        <div className="absolute text-center flex justify-center  h-[500px] bg-[#11182852] w-full">
          <p className="p-5 w-[30%] m-auto bg-[#1118288f] font-normal text-white text-5xl">Favoritos ❤️</p>
        </div>
        <img className="w-full object-cover" src={baner}/>
      </div>
      <div className="grid grid-cols-4 m-8">
        {user?.fav.length>0?
        dataFav?.length>0?dataFav?.map(({_id, video, name, difficulty, muscles, genre, premium}) => {
              return (
                <div key={uuidv4()}>
                  <Link key={_id} to={`/ejercicio/${_id}`} className={` max-w-[75%] min-h-[50px] flex flex-col bg-white  shadow-md duration-150 cursor-pointer  hover:outline hover:outline-offset-1  ${
                      premium
                        ? "outline-blue-400"
                        : difficulty == "easy"
                        ? "outline-green-400"
                        : difficulty == "medium"
                        ? "outline-yellow-400"
                        : "outline-red-400"
                    }
                      ${(premium&&user?.plan=="normal") ? "bg-slate-100" : "bg-slate-50"}`}
                  >
                 
                 <div
                      className={`h-[200px] overflow-hidden  ${
                        (premium&&user?.plan=="normal") ? "blur-[5px]" : "blur-0"
                      }`}
                    >
                      <img className="object-cover h-[200px] w-full" src={(premium&&user?.plan=="normal")?notPremiunImg2:video} alt="" />
                    </div>
                    <div className={`${(premium&&user?.plan=="normal")? "blur-[5px]" : "blur-0"}`}>
                      <h5 className="p-2 text-center text-xl font-bold -tracking-widest text-gray-900">
                        {name}
                      </h5>
                    </div>
                    <div
                      className={` text-center ${(premium&&user?.plan=="normal") ? "blur-[5px]" : "blur-0"}`}
                    >
                      <span
                        className={`inline-block ${
                          difficulty == "easy"
                            ? "bg-green-200"
                            : difficulty == "medium"
                            ? "bg-yellow-200"
                            : "bg-red-200"
                        }  px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
                      >
                        {difficulty}
                      </span>
                      <span
                        className={`inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
                      >
                        {muscles}
                      </span>
                      <span
                        className={`inline-block ${
                          genre === "man" ? "bg-blue-400" : "bg-pink-300"
                        }  px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
                      >
                        {genre}
                      </span>
                    </div>
                </Link>
            </div>
          )
        })
        :<LoadingCards num={"1234"}/>
        
        :<div className="flex justify-center bg-red-500 rounded-sm p-2">
           <p className='font-extrabold text-5xl text-gray-900'>No tienes favoritos</p>
           </div>
        
        }
      </div>
      <Footer2 />
    </>
  )
}


export default Favoritos