


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "../Carousel/Carousel";
import { useEffect, useState } from "react";
import img1 from "../assets/homeRegister-media/Img1.jpg";
import img2 from "../assets/homeRegister-media/Img2.jpg";
import img3 from "../assets/homeRegister-media/Img3.jpg";
import Footer from "../footer/Footer";
import {
  Exercises,
  Exercises_Get,
  selectUser,
} from "../../features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import FilterExercises from "./FilterExercises";
import { useNavigate } from "react-router-dom";

const video1 = require("../assets/homeRegister-media/Video-Slide.mp4");
const video2 = require("../assets/homeRegister-media/Video2.mp4");

interface ejercicios {
  _id: string
  name: string
  difficulty: string
  muscles: string
  genre: string
  video: string
  description: string 
  premium: boolean
}    





const HomeRegister = () => {
  const navigate = useNavigate();
  const onClick = ()=>{
    navigate('/mercadopago');
  }

  const dispatch= useAppDispatch()
useEffect(()=>{
dispatch(Exercises_Get())
},[])

const selector = useAppSelector(selectUser)
const ejercicios : Array<ejercicios> | null = selector.exercises



  return (
    <>
    <FilterExercises/>
      <div className="max-w-full mb-12 mx-auto overflow-hidden bg-slate-50 rounded-md shadow-lg">
        <div  onClick={onClick}>
        <Carousel
          content={[
            {
              src: "https://www.palco23.com/files/2020/18_recursos/fitness/dominada-728.jpg",
              text: "Hazte premium para obtener rutinas personalizadas",
              stylesText:
                "sm:bg-blue-400 sm:opacity-90 sm:font-semibold sm:text-2xl sm:text-white",
            },
            {
              src: video1,
              text: "Hazte premium para obtener rutinas personalizadas",
              stylesText:
                "sm:bg-blue-400 sm:opacity-90 sm:font-semibold sm:text-2xl sm:text-white",
            },
            {
              src: "https://st4.depositphotos.com/3378831/41496/i/600/depositphotos_414960080-stock-photo-close-up-dumbbell-on-gym.jpg",
              text: "Hazte premium para obtener rutinas personalizadas",
              stylesText:
                "sm:bg-blue-400 sm:opacity-90 sm:font-semibold sm:text-2xl sm:text-white",
            },
          ]}
        />
        </div>
        <br />
        <hr />
       
        <div className="flex mt-7 h-[400px] items-center overflow-hidden">
          <div className="flex items-center w-[76%] h-72 bg-slate-500">
            <video src={video2} autoPlay loop muted />
          </div>
          <div className="flex justify-center items-center w-2/5 h-full ">
            <div className="relative h-full w-full flex items-center p-2 bg-gray-900">
              <p className="min-w-full w-full p-2 text-3xl font-bold text-center text-transparent rounded text-[#fff]">
                Dolor que sientas hoy... <br />
                fueza que sentiras mañana;
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeRegister;
