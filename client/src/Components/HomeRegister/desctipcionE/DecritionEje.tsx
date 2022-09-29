import { useAppDispatch, useAppSelector, useToken } from "../../../app/hooks";
import { rewindExercise, Status ,selectUser, Exercises_Get } from "../../../features/counter/counterSlice";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

import { FaBan } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import LoadingCards from "../../loading/LoadingCards";
import CardEjetcicio from "./CardEejercicio";
import Comment from "./Commet";
interface commet {
  comment: string;
  email: string;
  rating: string|number;
  _id: any
}

interface ejerciciosData {
  _id: string;
  name: string;
  difficulty: string;
  equipment: true;
  muscles: string;
  genre: string;
  video: string;
  description: string;
  plan: string;
  feedback:[commet];
}


export default function DecriptionEjer() {
  const { id } = useParams();
  const token = useToken();
  const { user,status } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [comment, setcomment] = useState("")
  const [validac, setValidac] = useState(false)
  const [descripcionEjersicio, setdescripcionEjersicio] = useState<any>(false);
  const [rewind, setrewind] = useState({
    cont:0
  })
  useEffect(() => {
    if (token && id) {
      let headersList = {
        Accept: "*/*",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      };
      let reqOptions = {
        url: `http://localhost:3001/auth/exercise?id=${id}`,
        method: "GET",
        headers: headersList,
      };
      axios.request(reqOptions).then((e) =>setdescripcionEjersicio(e.data));
    }
  }, [id, token]);
 useEffect(() => {
      let commentExist = descripcionEjersicio?.feedback?.find((e:any) =>e?.email ==user?.email)
      if(commentExist){
        console.log("entraa")
        setValidac(false)
        dispatch(Status("none"))
      }else if(status==="success"){
        setValidac(false)
        dispatch(Status("none"))
      }else{
        setValidac(true)
      }
 },[descripcionEjersicio,status])
 useEffect(() => {
  if(descripcionEjersicio){
    let newarr:commet[] = []
    descripcionEjersicio?.feedback?.map((e:any)=>{
      if( e.email === user?.email){
        newarr.unshift(e)
      }else{
        newarr.push(e)
       }
    })
   descripcionEjersicio.feedback=newarr
  }
 },[descripcionEjersicio,user])
 
  const AddEdit=()=>{
      let commentuser = descripcionEjersicio?.feedback?.find((e:any) =>e?.email ==user?.email);
      if(commentuser){
          setcomment(commentuser?.comment)
         setrewind({cont:commentuser?.rating})   
      }
      setValidac(true)
  }

  const SubmitCommet = (e: Event|any ) => {
    e.preventDefault();
    if(comment.length>0){
      let data = {email:user?.email,rating:rewind.cont,id,comment,token}
      dispatch(rewindExercise(data))
      let newarr:commet[] = []
      descripcionEjersicio?.feedback?.map((e:any)=>{
        if( e.email === user?.email){
          newarr.unshift({email:user?.email,rating:rewind.cont,_id:id,comment})
        }else{
          newarr.push(e)
         }
      })
     descripcionEjersicio.feedback=newarr
    }
  }

  return (
    <>
    {
      descripcionEjersicio?<CardEjetcicio _id={descripcionEjersicio?._id} name={descripcionEjersicio?.name} difficulty={descripcionEjersicio?.difficulty} muscles={descripcionEjersicio?.muscles} genre={descripcionEjersicio?.genre} video={descripcionEjersicio?.video} description={descripcionEjersicio?.description} /> :<LoadingCards num={"1"}/>
      }
      <div>
        {validac&&<form onSubmit={SubmitCommet}>
          <div className="mt-10 mb-1  w-[90%] m-auto bg-gray-50  border border-gray-200">
            <div className="py-2 px-4 bg-white  ">
              <label htmlFor="comment" className="sr-only">
                Tu comentario
              </label>
              <textarea
                id="comment"
                rows={4}
                className="px-0 w-full text-sm text-gray-900 bg-white border-0  focus:ring-0 "
                placeholder="Como te sentiste?"
                onChange={(e)=>setcomment(e.target.value)}
                value={comment}
                required
              ></textarea>
            </div>
            <div className="flex  items-center py-2 px-3 border-t dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center py-1.5 px-6  font-medium text-center text-white bg-blue-700 focus:ring-4 active:scale-90 focus:ring-blue-200  hover:bg-blue-800"
              >
                Enviar
              </button>
              <div className="flex mx-5 items-center">
                <svg onClick={()=>rewind.cont>=1?setrewind(pv=>({...pv, cont:0})):setrewind(pv=>({...pv, cont:1}))} aria-hidden="true" className={`w-6 h-6 cursor-pointer active:animate-ping ${rewind.cont>=1?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg onClick={()=>rewind.cont>=2?setrewind(pv=>({...pv, cont:1})):setrewind(pv=>({...pv, cont:2}))}aria-hidden="true" className={`w-6 h-6 cursor-pointer active:animate-ping ${rewind.cont>=2?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg onClick={()=>rewind.cont>=3?setrewind(pv=>({...pv, cont:2})):setrewind(pv=>({...pv, cont:3}))} aria-hidden="true" className={`w-6 h-6 cursor-pointer active:animate-ping ${rewind.cont>=3?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg onClick={()=>rewind.cont>=4?setrewind(pv=>({...pv, cont:3})):setrewind(pv=>({...pv, cont:4}))} aria-hidden="true" className={`w-6 h-6 cursor-pointer active:animate-ping ${rewind.cont>=4?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg onClick={()=>rewind.cont>=5?setrewind(pv=>({...pv, cont:4})):setrewind(pv=>({...pv, cont:5}))} aria-hidden="true" className={`w-6 h-6 cursor-pointer active:animate-ping ${rewind.cont>=5?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <div className="w-full flex justify-end items-end p-5 decoration-red-700 text-red-700">
              <span onClick={()=> setValidac(false)} className="cursor-pointer">
                cancelar
              </span>
            </div>
            </div>
          </div>
        </form> }

        <div className={`flex ${!validac&&"mt-20"}  flex-col py-5 bg-slate-200 w-[90%] m-auto`}>   
          {descripcionEjersicio?.feedback?.length>0?descripcionEjersicio?.feedback.map(({_id,comment,rating,email}:any)=>{
            return(
              <div key={_id} className=" m-5 w-[40%] bg-slate-100">
                <div className="flex">
                  <Comment user={email} rewind={rating} />
                   <span className ={`p-2 flex ${user?.email!==email&&"text-red-700"} text-lg justify-end w-full`}>
                   {user?.email!==email?
                   <span  className ="cursor-pointer  hover:after:content-['Banear'] after:p-2 after:absolute after:text-gray-500 duration-150">
                      <FaBan/>
                    </span>:
                    <span onClick={AddEdit} className = "cursor-pointer  hover:after:content-['Editar'] after:p-2 after:absolute after:text-gray-500 duration-150">
                      <AiFillEdit/>
                    </span>
                    }
                    </span>
                </div>
                <p className="px-7 py-5">{comment}</p>
             </div>
            )
          }):status=="success"&&
          <div className=" m-5 w-[40%] bg-slate-100">
          <div className="flex">
            <Comment user={user?.email} rewind={rewind.cont} />
            <span className ="p-2 flex text-lg justify-end w-full">
             <span onClick={AddEdit} className = "cursor-pointer  hover:after:content-['Editar'] after:p-2 after:absolute after:text-gray-500 duration-150">
              <AiFillEdit/>
            </span>
            </span>
            </div>
            <p className="px-7 py-5">{comment}</p>
            </div>
          }
        </div>
      </div>
    </>
  );
}
