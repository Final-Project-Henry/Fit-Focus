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
import { Link } from "react-router-dom";
import FilterExercises from "./FilterExercises";
import Navbar from "../Navbar/NavbarHome";

const video1 = require("../assets/homeRegister-media/Video-Slide.mp4");
const video2 = require("../assets/homeRegister-media/Video2.mp4");
// let ejercicios = [

//   {
//    name: "SUPERMAN",
//    difficulty: "easy",
//    equipment: true,
//    muscles: "upper_body",
//    genre: "both",
//    video: "https://c.tenor.com/BpWq8HxUxeAAAAAC/lumbaresms.gif",
//    premium: true,

//   },
//   {
//    name: "STATIC SUPERMAN",
//    difficulty: "medium",
//    equipment: true,
//    muscles: "upper_body",
//    genre: "both",
//    video: "https://c.tenor.com/PRLfXaemvfwAAAAd/superman-est%C3%A1tico-treino-mestre.gif",
//    premium: false,

//   },

//   {
//     name: "SUPERMAN",
//     difficulty: "easy",
//     equipment: true,
//     muscles: "upper_body",
//     genre: "both",
//     video: "https://c.tenor.com/BpWq8HxUxeAAAAAC/lumbaresms.gif",
//     premium: true,

//    },
//    {
//     name: "STATIC SUPERMAN",
//     difficulty: "medium",
//     equipment: true,
//     muscles: "upper_body",
//     genre: "both",
//     video: "https://c.tenor.com/PRLfXaemvfwAAAAd/superman-est%C3%A1tico-treino-mestre.gif",
//     premium: false,

//    },
//    {
//     name: "SUPERMAN",
//     difficulty: "easy",
//     equipment: true,
//     muscles: "upper_body",
//     genre: "both",
//     video: "https://c.tenor.com/BpWq8HxUxeAAAAAC/lumbaresms.gif",
//     premium: true,

//    },
//    {
//     name: "STATIC SUPERMAN",
//     difficulty: "medium",
//     equipment: true,
//     muscles: "upper_body",
//     genre: "both",
//     video: "https://c.tenor.com/PRLfXaemvfwAAAAd/superman-est%C3%A1tico-treino-mestre.gif",
//     premium: false,

//    },
//    {
//     name: "SUPERMAN",
//     difficulty: "easy",
//     equipment: true,
//     muscles: "upper_body",
//     genre: "both",
//     video: "https://c.tenor.com/BpWq8HxUxeAAAAAC/lumbaresms.gif",
//     premium: true,

//    },
//    {
//     name: "STATIC SUPERMAN",
//     difficulty: "medium",
//     equipment: true,
//     muscles: "upper_body",
//     genre: "both",
//     video: "https://c.tenor.com/PRLfXaemvfwAAAAd/superman-est%C3%A1tico-treino-mestre.gif",
//     premium: false,

//    },
//    {
//     name: "SUPERMAN",
//     difficulty: "easy",
//     equipment: true,
//     muscles: "upper_body",
//     genre: "both",
//     video: "https://c.tenor.com/BpWq8HxUxeAAAAAC/lumbaresms.gif",
//     premium: true,

//    },
//    {
//     name: "STATIC SUPERMAN",
//     difficulty: "medium",
//     equipment: true,
//     muscles: "upper_body",
//     genre: "both",
//     video: "https://c.tenor.com/PRLfXaemvfwAAAAd/superman-est%C3%A1tico-treino-mestre.gif",
//     premium: false,

//    },
//    {
//     name: "SUPERMAN",
//     difficulty: "easy",
//     equipment: true,
//     muscles: "upper_body",
//     genre: "both",
//     video: "https://c.tenor.com/BpWq8HxUxeAAAAAC/lumbaresms.gif",
//     premium: true,

//    },
//    {
//     name: "STATIC SUPERMAN",
//     difficulty: "medium",
//     equipment: true,
//     muscles: "upper_body",
//     genre: "both",
//     video: "https://c.tenor.com/PRLfXaemvfwAAAAd/superman-est%C3%A1tico-treino-mestre.gif",
//     premium: false,

//    },
//    {
//     name: "SUPERMAN",
//     difficulty: "easy",
//     equipment: true,
//     muscles: "upper_body",
//     genre: "both",
//     video: "https://c.tenor.com/BpWq8HxUxeAAAAAC/lumbaresms.gif",
//     premium: true,

//    },
//    {
//     name: "STATIC SUPERMAN",
//     difficulty: "medium",
//     equipment: true,
//     muscles: "upper_body",
//     genre: "both",
//     video: "https://c.tenor.com/PRLfXaemvfwAAAAd/superman-est%C3%A1tico-treino-mestre.gif",
//     premium: false,

//    },
//    {
//     name: "SUPERMAN",
//     difficulty: "easy",
//     equipment: true,
//     muscles: "upper_body",
//     genre: "both",
//     video: "https://c.tenor.com/BpWq8HxUxeAAAAAC/lumbaresms.gif",
//     premium: true,

//    },
//    {
//     name: "STATIC SUPERMAN",
//     difficulty: "medium",
//     equipment: true,
//     muscles: "upper_body",
//     genre: "both",
//     video: "https://c.tenor.com/PRLfXaemvfwAAAAd/superman-est%C3%A1tico-treino-mestre.gif",
//     premium: false,

//    },
//  ];
let populare = [
  {
    name: "STATIC SUPERMAN",
    difficulty: "medium",
    equipment: true,
    muscles: "upper_body",
    genre: "both",
    video:
      "https://c.tenor.com/PRLfXaemvfwAAAAd/superman-est%C3%A1tico-treino-mestre.gif",
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
    video:
      "https://c.tenor.com/PRLfXaemvfwAAAAd/superman-est%C3%A1tico-treino-mestre.gif",
    premium: false,
  },
];

interface ejerciciosData {
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
  const [cards, Setcards] = useState<ejerciciosData | []>([]);
  useEffect(() => {
    dispatch(Exercises_Get());
  }, []);

  const selector = useAppSelector(selectUser);
  const ejercicios: Array<ejerciciosData> | [] = selector.exercises;
  

  useEffect(() => {
    dispatch(Exercises_Get());
  }, []);

  useEffect(() => {}, [ejercicios]);

  const paginado = () => {};
  return (
    <>
      <Navbar/>

      <div className="grid grid-cols-5 sm:grid-cols-11 gap-5 bg-slate-200  shadow-lg">
        {/* filtro */}
        <div className="col-span-1 min-h-screen">
          <div className="p-5 top-0 fixed bg-white  shadow-lg col-span-1  h-screen">
          <Link to="/ejercicios" ><div className="block py-2 pr-4 pl-3 text-gray-400 hover:text-black rounded md:bg-transparent md:p-0 mb-[5px]">Ejercicios</div></Link>
            <Link to="/calculadora"><div className="block py-2 pr-4 pl-3 text-gray-400 hover:text-black rounded md:bg-transparent md:p-0 mb-[5px]">Calculadora</div></Link>
            <Link to="/noticias"><div className="block py-2 pr-4 pl-3 text-gray-400 hover:text-black rounded md:bg-transparent md:p-0 mb-[5px]">Noticias</div></Link>
            <Link to="/rutinasPersonales"><div className="block py-2 pr-4 pl-3 text-gray-400 hover:text-black rounded md:bg-transparent md:p-0 mb-[5px]">Rutinas</div></Link>
          </div>
        </div>
        {/* carousel */}
        <div className="w-full col-span-9 border  min-h-screen ">
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
          <div>
            <h3 className="font-dark py-[5px] px-[20px] text-gray-700 text-3xl ">
              Ejercicios
            </h3>
            <FilterExercises />
            {/* <div className="w-full h-[98vh]  col-span-5  mt-[5px] rounded-xl bg-white">
          <p className="text-gray-700 text-2xl p-5 font-black">
            ejercicios populares
          </p>
          {populare.map((e) => {
            return (
              <div className="flex bg-white p-2 mt-4 outline outline-blue-400 shadow-lg mx-[20px] my-[10px] rounded-xl">
                <div className="w-[20%] h-[50px]  overflow-hidden rounded-xl">
                  <img
                    className=" w-[100%] min-h-[50px] rounded-xl"
                    src={e.video}
                  />
                </div>
                <div className="px-5">
                  <p>{e.name} </p>
                  <p>{e.difficulty} </p>
                  <div className="flex items-center"></div>
                </div>
              </div>
            );
          })}
        </div> */}
            
              <footer className="p-4 mx-40   rounded-lg md:flex md:items-center md:justify-between md:p-6 ">
                <span className="text-sm text-gray-800 sm:text-center ">
                  © 2022{" "}
                  <span className="hover:underline">
                    Fit Focus™
                  </span>
                  . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-800 sm:mt-0">
                  <li>
                    <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">
                    Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </footer>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default HomeRegister;

{
  /*     lo voy a usar                   <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Rating star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg> */
}
