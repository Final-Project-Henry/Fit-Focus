import "./styles.css";
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

  const dispatch= useAppDispatch()
useEffect(()=>{
dispatch(Exercises_Get())
},[])

const selector = useAppSelector(selectUser)
const ejercicios : Array<ejercicios> | null = selector.exercises



  return (
    <>
      <div className="max-w-full mb-12 mx-auto overflow-hidden bg-slate-50 rounded-md shadow-lg">
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
        <br />
        <hr />
        <h1
          className="text-center text-3xl mt-10 font-semibold"
          id="excercises"
        >
          EJERCICIOS DEL DIA
        </h1>
        <hr />
        {ejercicios?.length && (
          <div>
            <h1 className="font-bold text-center text-2xl mt-24">
              EJERCICIOS PARA TRONCO
            </h1>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper flex content-center items-center justify-center"
            >
              {ejercicios.map(
                ({
                  video,
                  name,
                  difficulty,
                  muscles,
                  genre,
                  _id,
                  description,
                  premium
                }) => {
                 
                 
                 
                    return (
                      <SwiperSlide className="bg-transparent h-auto">
                        <div
                          key={_id}
                          className={` scale-90 rounded overflow-hidden shadow-lg cursor-pointer duration-300 hover:duration-200 hover:scale-95 hover:outline hover:outline-offset-1 ${
                            difficulty == "easy"
                              ? "outline-green-400"
                              : difficulty == "medium"
                              ? "outline-yellow-400"
                              : "outline-red-400"
                          }`}
                        >
                          <img className="w-full" src={video} alt={name} />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{name}</div>
                            <p className="text-gray-700 text-base">
                              {description}{" "}
                            </p>
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
                        </div>
                      </SwiperSlide>
                    );
                }
              )}
            </Swiper>
            <h1
              className="font-bold text-center text-2xl mt-12"
              id="excercises"
            >
              EJERCICIOS PARA PIERNAS
            </h1>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {ejercicios.map(
                ({
                  video,
                  name,
                  difficulty,
                  muscles,
                  genre,
                  _id,
                  description,
                }) => {
                  if (muscles === "lower_body")
                    return (
                      <SwiperSlide className="bg-transparent h-auto">
                        <div
                          key={_id}
                          className={`scale-90 rounded overflow-hidden shadow-lg cursor-pointer duration-300 hover:duration-200 hover:scale-95 hover:outline hover:outline-offset-1 ${
                            difficulty == "easy"
                              ? "outline-green-400"
                              : difficulty == "medium"
                              ? "outline-yellow-400"
                              : "outline-red-400"
                          }`}
                        >
                          <img className="w-full" src={video} alt={name} />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{name}</div>
                            <p className="text-gray-700 text-base">
                              {description}{" "}
                            </p>
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
                        </div>
                      </SwiperSlide>
                    );
                }
              )}
            </Swiper>
          </div>
        )}
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
