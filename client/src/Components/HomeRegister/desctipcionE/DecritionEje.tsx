import { useAppDispatch, useAppSelector, useToken } from "../../../app/hooks";
import { rewindExercise, Status, selectUser, Exercises_Get, report, Detail, Response, DelateDetail } from "../../../features/counter/counterSlice";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

import { FaBan } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import LoadingCards from "../../loading/LoadingCards";
import CardEjetcicio from "./CardEejercicio";
import Comment from "./Commet";
import Swal from "sweetalert2";
interface commet {
  comment: string;
  email: string;
  rating: string | number;
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
  feedback: [commet];
}


export default function DecriptionEjer() {
  const { id } = useParams();
  const token = useToken();
  const { user, status,response ,error,detailEjec}:any= useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [comment, setcomment] = useState("")
  const [validac, setValidac] = useState(false)
  const [descripcionEjersicio, setdescripcionEjersicio] = useState<any>([]);
  const [rewind, setrewind] = useState({
    cont: 1
  })

  useEffect(() => {
    if (token && id) {
      dispatch(DelateDetail())  
      dispatch(Detail({token, id}))  
    }
  }, [id, token]);


  useEffect(() => {
    let commentExist = descripcionEjersicio?.find((e: any) => e?.email == user?.email)
    if (commentExist) setValidac(false)
    else setValidac(true)

  }, [descripcionEjersicio])

  useEffect(() => {
    if (detailEjec) {
      let newarr: commet[] = []

      detailEjec?.feedback?.map((e: any) => {
        if (e.email === user?.email) {
          newarr.unshift(e)
        }
        else if(!e.report?.includes(user?.email)) newarr.push(e)
      })
       setdescripcionEjersicio(newarr)
    }
  }, [detailEjec, user])

  const AddEdit = () => {
    let commentuser = descripcionEjersicio?.find((e: any) => e?.email == user?.email);
    if (commentuser) {
      setcomment(commentuser?.comment)
      setrewind({ cont: commentuser?.rating })
    }
    setValidac(true)
  }

  const SetBan = (email: string) =>{
    Swal.fire({
      title: "Desea banear este comentario?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#230bf8",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
      cancelButtonText:"Cancelar"
    }).then((result) => {
      if(result.isConfirmed){
        dispatch(report({ email: email, id: id,token:token}))

      }
    });
    
  }
  const SubmitCommet = (e: Event | any) => {
    e.preventDefault();

      let data = { avatar: user?.avatar, email: user?.email, rating: rewind.cont, id, comment, token }
      dispatch(rewindExercise(data))

  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setcomment(e.target.value)
  }

  useEffect(() => {
    if (response=="Feedback added"||response=="Report added"||response=="Report already added") {
      let  resp:string|boolean=""

        if(response=="Report added") resp="comentario baneado"
        if(response=="Report already added") resp="Este comentario ya ha sidó baneado"
        if(response=="Feedback added") resp=""

        Swal.fire({
          title:resp,
          icon: 'success',
          showConfirmButton: false,
          backdrop: `#1919247f`,
          timer: 1500
        }).then((result) => {
          if(result.isConfirmed){
            setValidac(false)
          }
        });

        
        dispatch(Detail({token, id}))
        dispatch(Response())
    }

  },[response])



  return (
    <>
      {
        detailEjec ? <CardEjetcicio _id={detailEjec?._id} name={detailEjec?.name} difficulty={detailEjec?.difficulty} muscles={detailEjec?.muscles} genre={detailEjec?.genre} video={detailEjec?.video} description={detailEjec?.description} /> : <LoadingCards num={"1"} />
      }
      <div>
        {validac && <form onSubmit={SubmitCommet}>
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
                onChange={handleChange}
                value={comment}
                maxLength={50}
                required
              ></textarea>
            </div>
            <div className="flex  items-center py-2 px-3 border-t dark:border-gray-600">
              <button
                type="submit"
                disabled={false}
                className="inline-flex items-center py-1.5 px-6  font-medium text-center text-white bg-blue-700 focus:ring-4 active:scale-90 focus:ring-blue-200  hover:bg-blue-800"
              >
                Enviar
              </button>
              <div className="flex mx-5 items-center">
                <svg onClick={() => rewind.cont >= 1 ? setrewind(pv => ({ ...pv, cont: 1 })) : setrewind(pv => ({ ...pv, cont: 1 }))} aria-hidden="true" className={`w-6 h-6 cursor-pointer active:animate-ping ${rewind.cont >= 1 ? "text-yellow-400" : "text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg onClick={() => rewind.cont >= 2 ? setrewind(pv => ({ ...pv, cont: 1 })) : setrewind(pv => ({ ...pv, cont: 2 }))} aria-hidden="true" className={`w-6 h-6 cursor-pointer active:animate-ping ${rewind.cont >= 2 ? "text-yellow-400" : "text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg onClick={() => rewind.cont >= 3 ? setrewind(pv => ({ ...pv, cont: 2 })) : setrewind(pv => ({ ...pv, cont: 3 }))} aria-hidden="true" className={`w-6 h-6 cursor-pointer active:animate-ping ${rewind.cont >= 3 ? "text-yellow-400" : "text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg onClick={() => rewind.cont >= 4 ? setrewind(pv => ({ ...pv, cont: 3 })) : setrewind(pv => ({ ...pv, cont: 4 }))} aria-hidden="true" className={`w-6 h-6 cursor-pointer active:animate-ping ${rewind.cont >= 4 ? "text-yellow-400" : "text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg onClick={() => rewind.cont >= 5 ? setrewind(pv => ({ ...pv, cont: 4 })) : setrewind(pv => ({ ...pv, cont: 5 }))} aria-hidden="true" className={`w-6 h-6 cursor-pointer active:animate-ping ${rewind.cont >= 5 ? "text-yellow-400" : "text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <div className="w-full flex justify-end items-end p-5">
              {
               <span  className={` decoration-red-700 text-red-700`}>
                    {comment.length<10&&"El comentario debe tener maximo 10 letras"}
                  </span>  
                }
                <span className={`${comment.length>=10?"text-blue-900":"text-red-700"} px-5 `}>
                   {comment.length}/50
                </span>

                {
                  descripcionEjersicio?.find((e: any) => e?.email == user?.email)&&
                  <span onClick={() => setValidac(false)} className={` decoration-red-700 text-red-700 cursor-pointer`}>
                    cancelar
                  </span>
                }
            
              </div>
            </div>
          </div>
        </form>}
        <div className={`flex ${!validac && "mt-20"}  flex-col py-5 bg-slate-200 w-[90%] m-auto`}>
          {detailEjec&&descripcionEjersicio?.map(({ _id, comment, rating, email, avatar }: any) => {
              return (
                <div key={_id} className=" m-5 w-[40%] overflow-hidden bg-slate-100">
                  <div className="flex">
                    <Comment avatar={avatar} user={email} rewind={rating} />
                    <span className={`p-2 flex ${user?.email !== email && "text-red-700"} text-lg justify-end w-full`}>
                      {user?.email !== email ?
                        <span onClick={ ()=> SetBan(email) } className="cursor-pointer  hover:after:content-['Banear'] after:p-2 after:absolute after:text-gray-500 duration-150">
                          <FaBan />
                        </span> :
                        <span onClick={AddEdit} className="cursor-pointer  hover:after:content-['Editar'] after:p-2 after:absolute after:text-gray-500 duration-150">
                          <AiFillEdit />
                        </span>
                      }
                    </span>
                  </div>
                  <p className="px-7 py-5">{comment}</p>
                </div>
              )
            }) 
          }
        </div>
      </div>
    </>
  );
}
