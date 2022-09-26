import { useAppDispatch, useAppSelector, useToken } from "../../app/hooks";
import {
  EjerciciosDecription,
  selectUser,
} from "../../features/counter/counterSlice";
import notPremiunImg from "../assets/homeRegister-media/padlock.png";
import notPremiunImg2 from "../assets/homeRegister-media/Img3.jpg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import Swal from "sweetalert2";

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
}

export default function DecriptionEjer() {
  const { id } = useParams();
   const token= useToken()

  const dispacht = useAppDispatch();
  const [addFav, SetAddfav]=useState<boolean|string>("default");
  const { descripcionEjersicio,user }= useAppSelector(selectUser);

  useEffect(() => {
    dispacht(EjerciciosDecription(id));
  }, [id]);

  useEffect(() => {
    if (addFav==true) {
      Swal.fire({
        title: `${descripcionEjersicio.name} fue agregado a tus favoritos `,
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#6c63ff",
        confirmButtonText: "Aceptar",
    })
    }else if(addFav=="error"){
      Swal.fire({
        title: `Ups algo salio mal 😢`,
        icon: "error",
        showCancelButton: false,
        confirmButtonColor: "#6c63ff",
        confirmButtonText: "Aceptar",
      })
    }
  },[addFav]);

   function  AddFavorite(){
      const favExisited = user.fav.find((x: any)=>x.name === descripcionEjersicio.name)
      if (favExisited || addFav ==="Exercise added to fav"){
        Swal.fire({
          title: `Tu Ejercicio ya esta en tus Favoritos!❤️`,
          icon: "success",
          showCancelButton: false,
          confirmButtonColor: "#6c63ff",
          confirmButtonText: "Aceptar",
        }).then(async (result) => {
          SetAddfav("default")
        })
        return
      }
      Swal.fire({
        title: `¿Desea agreguar ${descripcionEjersicio.name} a tus favoritos ?`,
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#6c63ff",
        cancelButtonColor: "#d33",
        confirmButtonText: "Agregar",
        cancelButtonText: "Cancelar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
             const res= await axios.put("http://localhost:3001/auth/addfav",descripcionEjersicio,{
              headers: { Authorization: "Bearer " + token},
            })
          if(res.data){
            console.log(res)

            SetAddfav(res.data)
          }
          } catch (error) {
            SetAddfav("error")
          }
        }
    });
  }

  return (
    <>
  
      <div
        className={`max-w-full flex flex-col bg-white  shadow-md  scale-90 `}
      >
        <div className={`min-h-[150px] w-full flex overflow-hidden }`}>
          <img
            className=" w-[50%]"
            src={descripcionEjersicio?.video}
          />
        <div className="p-5">

          <h5 className=" text-2xl font-bold tracking-tight text-gray-900">
            {descripcionEjersicio?.name}
          </h5>
          <p className="">
            {descripcionEjersicio?.description}
          </p>

       

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
            <button onClick={()=>AddFavorite()} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#6c63ff] duration-150  hover:bg-blue-800">
              Agregar a favoritos❤️
            </button>
          </div>
        </div>
        </div>
        </div>
        
      </div>
      <div>
      <form>
   <div className="mt-10 mb-10 m-auto w-[95%] bg-gray-50  border border-gray-200">
       <div className="py-2 px-4 bg-white  ">
           <label htmlFor="comment" className="sr-only">Tu comentario</label>
           <textarea id="comment" rows={4} className="px-0 w-full text-sm text-gray-900 bg-white border-0  focus:ring-0 " placeholder="Como te sentiste?" required></textarea>
       </div>
       <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
           <button type="submit" className="inline-flex items-center py-2.5 px-6 text-xs font-medium text-center text-white bg-blue-700 focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
               Enviar
           </button>
       </div>
   </div>
</form>
      </div>
    </>
  );
}
