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
} from "../../features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const video1 = require("../assets/homeRegister-media/Video-Slide.mp4");
const video2 = require("../assets/homeRegister-media/Video2.mp4");
let ejercicios = [

  {
   name: "SUPERMAN",
   difficulty: "easy",
   equipment: true,
   muscles: "upper_body",
   genre: "both",
   video: "https://c.tenor.com/BpWq8HxUxeAAAAAC/lumbaresms.gif",
   premium: true,
     
  },
  {
   name: "STATIC SUPERMAN",
   difficulty: "medium",
   equipment: true,
   muscles: "upper_body",
   genre: "both",
   video: "https://c.tenor.com/PRLfXaemvfwAAAAd/superman-est%C3%A1tico-treino-mestre.gif",
   premium: false,
       
  },
  
  {
    name: "SUPERMAN",
    difficulty: "easy",
    equipment: true,
    muscles: "upper_body",
    genre: "both",
    video: "https://c.tenor.com/BpWq8HxUxeAAAAAC/lumbaresms.gif",
    premium: true,
      
   },
   {
    name: "STATIC SUPERMAN",
    difficulty: "medium",
    equipment: true,
    muscles: "upper_body",
    genre: "both",
    video: "https://c.tenor.com/PRLfXaemvfwAAAAd/superman-est%C3%A1tico-treino-mestre.gif",
    premium: false,
        
   },
   {
    name: "SUPERMAN",
    difficulty: "easy",
    equipment: true,
    muscles: "upper_body",
    genre: "both",
    video: "https://c.tenor.com/BpWq8HxUxeAAAAAC/lumbaresms.gif",
    premium: true,
      
   },
   {
    name: "STATIC SUPERMAN",
    difficulty: "medium",
    equipment: true,
    muscles: "upper_body",
    genre: "both",
    video: "https://c.tenor.com/PRLfXaemvfwAAAAd/superman-est%C3%A1tico-treino-mestre.gif",
    premium: false,
        
   },
   {
    name: "SUPERMAN",
    difficulty: "easy",
    equipment: true,
    muscles: "upper_body",
    genre: "both",
    video: "https://c.tenor.com/BpWq8HxUxeAAAAAC/lumbaresms.gif",
    premium: true,
      
   },
   {
    name: "STATIC SUPERMAN",
    difficulty: "medium",
    equipment: true,
    muscles: "upper_body",
    genre: "both",
    video: "https://c.tenor.com/PRLfXaemvfwAAAAd/superman-est%C3%A1tico-treino-mestre.gif",
    premium: false,
        
   },
   {
    name: "SUPERMAN",
    difficulty: "easy",
    equipment: true,
    muscles: "upper_body",
    genre: "both",
    video: "https://c.tenor.com/BpWq8HxUxeAAAAAC/lumbaresms.gif",
    premium: true,
      
   },
   {
    name: "STATIC SUPERMAN",
    difficulty: "medium",
    equipment: true,
    muscles: "upper_body",
    genre: "both",
    video: "https://c.tenor.com/PRLfXaemvfwAAAAd/superman-est%C3%A1tico-treino-mestre.gif",
    premium: false,
        
   },
   {
    name: "SUPERMAN",
    difficulty: "easy",
    equipment: true,
    muscles: "upper_body",
    genre: "both",
    video: "https://c.tenor.com/BpWq8HxUxeAAAAAC/lumbaresms.gif",
    premium: true,
      
   },
   {
    name: "STATIC SUPERMAN",
    difficulty: "medium",
    equipment: true,
    muscles: "upper_body",
    genre: "both",
    video: "https://c.tenor.com/PRLfXaemvfwAAAAd/superman-est%C3%A1tico-treino-mestre.gif",
    premium: false,
        
   },
   {
    name: "SUPERMAN",
    difficulty: "easy",
    equipment: true,
    muscles: "upper_body",
    genre: "both",
    video: "https://c.tenor.com/BpWq8HxUxeAAAAAC/lumbaresms.gif",
    premium: true,
      
   },
   {
    name: "STATIC SUPERMAN",
    difficulty: "medium",
    equipment: true,
    muscles: "upper_body",
    genre: "both",
    video: "https://c.tenor.com/PRLfXaemvfwAAAAd/superman-est%C3%A1tico-treino-mestre.gif",
    premium: false,
        
   },
   {
    name: "SUPERMAN",
    difficulty: "easy",
    equipment: true,
    muscles: "upper_body",
    genre: "both",
    video: "https://c.tenor.com/BpWq8HxUxeAAAAAC/lumbaresms.gif",
    premium: true,
      
   },
   {
    name: "STATIC SUPERMAN",
    difficulty: "medium",
    equipment: true,
    muscles: "upper_body",
    genre: "both",
    video: "https://c.tenor.com/PRLfXaemvfwAAAAd/superman-est%C3%A1tico-treino-mestre.gif",
    premium: false,
        
   },
 ];

interface ejercicios {
  _id: string;
  name: string;
  difficulty: string;
  equipment: true;
  muscles: string;
  genre: string;
  video: string;
  description: string;
  premium: boolean;
}

const HomeRegister = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(Exercises_Get());
  }, []);

  const selector = useAppSelector(selectUser);
  // const ejercicios: Array<ejercicios> | null = selector.exercises;

  return (
    <>

      <div className="grid grid-cols-5 sm:grid-cols-10 gap-5 bg-slate-200  shadow-lg">
         {/* filtro */}
          <div className = "bg-[#287acc]  shadow-lg border col-span-1  h-screen">
                  
          </div>
         {/* carousel */}
        <div className="w-full col-span-7 border h-screen "> 
        <div className="min-w-[100%] mx-[100px] m-5   h-[250px] ">
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
        {/* card de ejercicios */}
        <section className="grid grid-cols-1">
        {ejercicios?.map(
          ({
            video,
            name,
            difficulty,
            muscles,
            genre,
            equipment,
            premium,
          }) => {
            return (
              <>
                <div key={name} className={` rounded felx flex-row ${premium?"bg-slate-100":"bg-slate-50"} ${premium?"blur-[5px]":"blur-0"} overflow-hidden shadow-lg cursor-pointer duration-300 hover:duration-200 scale-90 hover:scale-95  hover:outline hover:outline-offset-1 ${
                  premium?"outline-blue-400":
                   difficulty == "easy"
                      ? "outline-green-400"
                      : difficulty == "medium"
                      ? "outline-yellow-400"
                      : "outline-red-400"
                  }`}
                > 
                <div className="w-[100%] h-[100px] overflow-hidden">
                  <img className="w-[100%] h-[100px] object-cover" src={video} />
                </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">{""} </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span
                      className={`inline-block ${
                        difficulty == "easy"
                          ? "bg-green-200"
                          : difficulty == "medium"
                          ? "bg-yellow-200"
                          : "bg-red-200"
                      } rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
                    >
                      {difficulty}
                    </span>
                    <span
                      className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
                    >
                      {muscles}
                    </span>
                    <span
                      className={`inline-block ${
                        genre === "man" ? "bg-blue-200" : "bg-pink-200"
                      } rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
                    >
                      {genre}
                    </span>
                  </div>
                  <div>
                    <span>{premium}</span>
                  </div>
                </div>
              </>
            );
          }
        )}
        </section>
      </div>
      <div className="w-full h-[80vh]  col-span-2  bg-blue-500">
          
      </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeRegister;
