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
  console.log(id);
  const dispacht = useAppDispatch();
  const [addFav, SetAddfav]=useState("")
  const { descripcionEjersicio } = useAppSelector(selectUser);
console.log(addFav)
  useEffect(() => {
    dispacht(EjerciciosDecription(id));
  }, [id]);
  async function  AddFavorite(){
    const rep  = await axios.put("http://localhost:3001/auth/addfav",descripcionEjersicio,{
      headers: { Authorization: "Bearer " + token},
    })

    SetAddfav(rep.data)
  }
  console.table(descripcionEjersicio);
  return (
    <>
      <Navbar />
      <div
        className={`max-w-full flex flex-col bg-white rounded-lg shadow-md  scale-90 `}
      >
        <div className={`min-h-[150px] w-full flex overflow-hidden }`}>
          <img
            className="rounded-t-lg w-[50%]"
            src={descripcionEjersicio?.video}
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit rem
            natus illo quidem architecto tenetur omnis, explicabo excepturi
            exercitationem a expedita sequi laboriosam debitis libero cum
            aliquid quam repellat! Consequatur.{" "}
          </p>
        </div>
        <div
          className={`${
            descripcionEjersicio?.plan == "normal" ? "blur-[5px]" : "blur-0"
          }`}
        >
          <h5 className="p-2 text-2xl font-bold tracking-tight text-gray-900">
            {descripcionEjersicio?.name}
          </h5>
        </div>

        <div className={`p-3 `}>
          <span
            className={`inline-block ${
              descripcionEjersicio?.difficulty == "easy"
                ? "bg-green-200"
                : descripcionEjersicio?.difficulty == "medium"
                ? "bg-yellow-200"
                : "bg-red-200"
            } rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
          >
            {descripcionEjersicio?.difficulty}
          </span>
          <span
            className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
          >
            {descripcionEjersicio?.muscles}
          </span>
          <span
            className={`inline-block ${
              descripcionEjersicio?.genre === "man"
                ? "bg-blue-400"
                : "bg-pink-300"
            } rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
          >
            {descripcionEjersicio?.genre}
          </span>
          <div className={`p-4`}>
            <button onClick={()=>AddFavorite()} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#6c63ff] duration-150 rounded-lg hover:bg-blue-800">
              Agregar a favoritos
            </button>
          </div>
          
        </div>
        
      </div>
      <div>
      <form>
   <div className="mt-10 mb-10 m-auto w-[95%] bg-gray-50 rounded-lg border border-gray-200">
       <div className="py-2 px-4 bg-white rounded-t-lg ">
           <label htmlFor="comment" className="sr-only">Tu comentario</label>
           <textarea id="comment" rows={4} className="px-0 w-full text-sm text-gray-900 bg-white border-0  focus:ring-0 " placeholder="Como te sentiste?" required></textarea>
       </div>
       <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
           <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
               Enviar
           </button>
       </div>
   </div>
</form>
      </div>
    </>
  );
}
