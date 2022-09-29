import { useAppDispatch, useAppSelector, useToken } from "../../app/hooks";
import { rewindExercise, selectUser } from "../../features/counter/counterSlice";
import notPremiunImg from "../assets/homeRegister-media/padlock.png";
import notPremiunImg2 from "../assets/homeRegister-media/Img3.jpg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { FaBan } from 'react-icons/fa';
import LoadingCards from "../loading/LoadingCards";
interface commet {
  comment: string;
  email: string;
  rating: string;
  _id: string
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
  const [addFav, SetAddfav] = useState<boolean | string>("default");
  const { user,status } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [comment, setcomment] = useState("")
  const [descripcionEjersicio, setdescripcionEjersicio] = useState<any>(false);
  const [rewind, setrewind] = useState({
    uno:false,
    dos:false,
    tres:false,
    cuatro:false,
    cinco: false,
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

      axios.request(reqOptions).then((e) => setdescripcionEjersicio(e.data));
    }
  }, [id, token]);

  useEffect(() => {
    if (addFav == "Exercise added to fav") {
      Swal.fire({
        title: `${descripcionEjersicio?.name} fue agregado a tus favoritos `,
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#6c63ff",
        confirmButtonText: "Aceptar",
      });
    } else if (addFav == "error") {
      Swal.fire({
        title: `Ups algo salio mal 😢`,
        icon: "error",
        showCancelButton: false,
        confirmButtonColor: "#6c63ff",
        confirmButtonText: "Aceptar",
      });
    }
  }, [addFav]);

    function AddFavorite() {
    const favExisited = user?.fav.find(
      (x: any) => x.id === descripcionEjersicio?._id
    );
    if (favExisited || addFav === "Exercise added to fav"){
      Swal.fire({
        title: `Tu Ejercicio ya esta en tus Favoritos!❤️`,
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#6c63ff",
        confirmButtonText: "Aceptar",
      }).then(async () => {
        SetAddfav("default");
      });
      return;
    }
    Swal.fire({
      title: `¿Desea agreguar ${descripcionEjersicio?.name} a tus favoritos ?`,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#6c63ff",
      cancelButtonColor: "#d33",
      confirmButtonText: "Agregar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.put(
            "http://localhost:3001/auth/addfav",
            descripcionEjersicio,
            {
              headers: { Authorization: "Bearer " + token },
            }
          );
          if (res.data) {
            SetAddfav(res.data);
          }
        } catch (error) {
          SetAddfav("error");
        }
      }
    });
  }
  const SubmitCommet = (e: Event|any ) => {
    e.preventDefault();
    if(comment.length>0){
   
      let data = {email:user?.email,rating:rewind.cont,id,comment,token}
      dispatch(rewindExercise(data))
    }
    //eviar datos
  }

  return (
    <>
    {
      descripcionEjersicio?
        <div
        className={`max-w-full flex flex-col bg-white  shadow-md   `}
         >
        <div className={`min-h-[150px] w-full flex overflow-hidden }`}>
          <img className=" w-[50%]" src={descripcionEjersicio?.video} />
          <div className="p-5">
            <h5 className=" text-2xl font-bold tracking-tight text-gray-900">
              {descripcionEjersicio?.name}
            </h5>
            <p className="">{descripcionEjersicio?.description}</p>

            <div className="py-5">
              <span
                className={`inline-block ${
                  descripcionEjersicio?.difficulty == "easy"
                    ? "bg-green-200"
                    : descripcionEjersicio?.difficulty == "medium"
                    ? "bg-yellow-200"
                    : "bg-red-200"
                } px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
              >
                {descripcionEjersicio?.difficulty}
              </span>
              <span
                className={`inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
              >
                {descripcionEjersicio?.muscles}
              </span>
              <span
                className={`inline-block ${
                  descripcionEjersicio?.genre === "man"
                    ? "bg-blue-400"
                    : "bg-pink-300"
                }  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
              >
                {descripcionEjersicio?.genre}
              </span>
              <div className="py-5">
                {
                  <button
                    onClick={() => AddFavorite()}
                    className="inline-flex items-center py-2 px-3 outline-none text-sm font-medium text-center text-white bg-[#6c63ff] duration-150  hover:bg-blue-800"
                  >
                    Agregar a favoritos❤️
                  </button>
                }
              </div>
            </div>
          </div>
          </div>
        </div>:<LoadingCards num={"1"}/>
      }
      <div>
   

        {<form onSubmit={SubmitCommet}>
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
                required
              ></textarea>
            </div>
            <div className="flex  items-center py-2 px-3 border-t dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center py-1.5 px-6  font-medium text-center text-white bg-blue-700 focus:ring-4 focus:ring-blue-200  hover:bg-blue-800"
              >
                Enviar
              </button>
              <div className="flex mx-5 items-center">
                <svg onClick={()=>rewind.uno?setrewind(pv=>({...pv,  cinco:false,cuatro:false,tres:false,uno:false,dos:false,cont:0})):setrewind(pv=>({...pv, cont:1, uno:true}))} aria-hidden="true" className={`w-6 h-6 cursor-pointer active:animate-ping ${rewind.uno?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg onClick={()=>rewind.dos?setrewind(pv=>({...pv, dos:false,tres:false,cuatro:false,cinco:false,cont:1})):setrewind(pv=>({...pv, dos:true,uno:true,cont:2}))} aria-hidden="true" className={`w-6 h-6 cursor-pointer active:animate-ping ${rewind.dos?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg onClick={()=>rewind.tres?setrewind(pv=>({...pv, tres:false,cuatro:false,cinco:false,cont:2})):setrewind(pv=>({...pv, tres:true,uno:true,dos:true,cont:3}))} aria-hidden="true" className={`w-6 h-6 cursor-pointer active:animate-ping ${rewind.tres?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg onClick={()=>rewind.cuatro?setrewind(pv=>({...pv, cuatro:false,cinco:false,cont:3})):setrewind(pv=>({...pv,cuatro:true, tres:true,uno:true,dos:true,cont:4}))} aria-hidden="true" className={`w-6 h-6 cursor-pointer active:animate-ping ${rewind.cuatro?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg onClick={()=>rewind.cinco?setrewind(pv=>({...pv, cinco:false,cont:4})):setrewind(pv=>({...pv,cinco:true,cuatro:true, tres:true,uno:true,dos:true,cont:5}))} aria-hidden="true" className={`w-6 h-6 cursor-pointer active:animate-ping ${rewind.cinco?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
            </div>
          </div>
        </form>}
        <div className="flex py-5 bg-slate-200 w-[90%] m-auto">
          
          {descripcionEjersicio?.feedback?.length>0?descripcionEjersicio?.feedback.map(({_id,comment,rating,email}:any)=>{
            return(
              <div key={_id} className=" m-5 w-[40%] bg-slate-100">
                <div className="flex">
                  <img className="rounded-full w-[10%] m-2" src="https://randomuser.me/api/portraits/men/97.jpg" />
                   <div className="flex flex-col">
                     <p className="m-2">{email}</p>
                      <div className="flex">
                      <svg aria-hidden="true" className={`w-5 h-5  ${+rating>=1?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg  aria-hidden="true" className={`w-5 h-5  ${+rating>=2?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg  aria-hidden="true" className={`w-5 h-5 ${+rating>=3?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg  aria-hidden="true" className={`w-5 h-5 ${+rating>=4?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg  aria-hidden="true" className={`w-5 h-5 ${+rating>=5?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                   </div>
                   </div>
                   <span className ="p-2 flex text-red-700 text-lg justify-end w-full">
                   {user.email!==email&&<span className ="cursor-pointer  hover:after:content-['Banear'] after:p-2 after:absolute after:text-gray-500 duration-150">
                      <FaBan/>
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
            <img className="rounded-full w-[10%] m-2" src="https://randomuser.me/api/portraits/men/97.jpg" />
             <div className="flex flex-col">
               <p className="m-2">{user.email}</p>
                <div className="flex">
                <svg aria-hidden="true" className={`w-5 h-5  ${rewind.cont>=1?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg  aria-hidden="true" className={`w-5 h-5  ${rewind.cont>=2?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg  aria-hidden="true" className={`w-5 h-5 ${rewind.cont>=3?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg  aria-hidden="true" className={`w-5 h-5 ${rewind.cont>=4?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg  aria-hidden="true" className={`w-5 h-5 ${rewind.cont>=5?"text-yellow-400":"text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
             </div>
             </div>
          </div>
          <p className="px-7 py-5">{comment}</p>
       </div>
          }
          <p>
              
          </p>
        </div>
      </div>
    </>
  );
}
