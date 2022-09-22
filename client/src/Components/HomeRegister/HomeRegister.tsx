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
  const [cards , Setcards] = useState<ejercicios | []>([])
  useEffect(() => {
    dispatch(Exercises_Get());
  }, []);

  const selector = useAppSelector(selectUser);
  const ejercicios: Array<ejercicios> | null = selector.exercises;

  const paginado = () => {
    
  };
  return (
    <>
      <div className="grid grid-cols-5 sm:grid-cols-11 gap-5 bg-slate-200  shadow-lg">
        {/* filtro */}
        <div className="bg-white rounded-xl  shadow-lg border col-span-1  h-screen">
          <div className="p-2">
            <div className="py-2">Ejercicios</div>
            <div className="py-2">calculadora</div>
            <div className="py-2">Noticias</div>
            <div className="py-2">Rutinas</div>
          </div>
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
          <section className="grid grid-cols-3">
            {ejercicios?.map(
              ({
                video,
                name,
                difficulty,
                muscles,
                genre,
                premium,
              }) => {
                return (
                  <>
                    <div className={`max-w-sm flex flex-col bg-white rounded-lg shadow-md duration-150 cursor-pointer scale-90 hover:scale-95  hover:outline hover:outline-offset-1 ${
                        premium
                          ? "outline-blue-400"
                          : difficulty == "easy"
                          ? "outline-green-400"
                          : difficulty == "medium"
                          ? "outline-yellow-400"
                          : "outline-red-400"
                      }
                      ${
                        premium ? "bg-slate-100" : "bg-slate-50"
                      } ${
                        premium ? "blur-[5px]" : "blur-0"
                      }`}
                    >
                      <div className="h-[160px] overflow-hidden">
                      <img
                          className="rounded-t-lg"
                          src={video}
                          alt=""
                        />
                      </div>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {name}
                      </h5> 
                       
                      <div className="p-3">
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
                            genre === "man" ? "bg-blue-400" : "bg-pink-300"
                          } rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
                        >
                          {genre}
                        </span>
                      </div>
                      <div className="p-4">
                        <a
                          href="#"
                          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#6c63ff] duration-150 rounded-lg hover:bg-blue-800"
                        >
                          Empezar
                          <svg
                            aria-hidden="true"
                            className="ml-2 -mr-1 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                    </>
                );
              }
            )}
          </section>
        </div>

        <div className="w-full h-[98vh]  col-span-3  mt-[5px] rounded-xl bg-white">
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
        </div>
      </div>
      <Footer />
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
