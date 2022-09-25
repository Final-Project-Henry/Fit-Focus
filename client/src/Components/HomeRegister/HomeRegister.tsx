import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "../Carousel/Carousel";
import { useEffect, useMemo, useState } from "react";
import img1 from "../assets/homeRegister-media/Img1.jpg";
import img2 from "../assets/homeRegister-media/Img2.jpg";
import img3 from "../assets/homeRegister-media/Img3.jpg";
import Footer from "../footer/Footer";
import {
  Exercises,
  Exercises_Get,
  getProfileInfo,
  selectUser,
} from "../../features/counter/counterSlice";
import { useAppDispatch, useAppSelector, useToken } from "../../app/hooks";
import { Link, useParams } from "react-router-dom";

import { TbBarbell, TbFolder } from "react-icons/tb";
import { BsNewspaper } from "react-icons/bs";
import { ImCalculator } from "react-icons/im";
import { CgGym } from "react-icons/cg";
import iconDrak from "../assets/icons/nav-icon2.png";
import Ejercicios from "./Ejercicios";
import Calculadora from "./Calculadora";
import Noticias from "./Noticias";
import RutinasPersonales from "./RutinasPersonales";
import Navbar from "../Navbar/Navbar";
import Favoritos from "./Favorito";
import Form_rutinas from "../form_rutinas/From_rutina";

const HomeRegister = () => {
  const dispatch = useAppDispatch();
  const State: any = useAppSelector(selectUser);
  const { id } = useParams();
  let token = useToken();
  const [Render, SetRender] = useState({
    rejercisio: true,
    rcalculadora: false,
    rnoticia: false,
    rfav: false,
    rrutinas: false,
  });
  useMemo(() => {
    dispatch(Exercises_Get());
    console.log("entra a home");
  }, []);
  useMemo(() => {
    if (token) {
      dispatch(getProfileInfo(token));
    }
  }, [token]);

  const getRenderComponet = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | any
  ) => {
    SetRender({
      rejercisio: false,
      rcalculadora: false,
      rnoticia: false,
      rfav: false,
      rrutinas: false,
    });
    SetRender((pv) => ({ ...pv, [event.target.id]: true }));
  };
  return (
    <>
      <Navbar />

      <div className="bg-slate-100">
        {/* menu */}
        {/* carousel */}
        <div>
          {
            <Carousel
              content={[
                {
                  src: "https://www.palco23.com/files/2020/18_recursos/fitness/dominada-728.jpg",
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
          }
        </div>

        {/* cartas de ejercicios */}
        <div className="flex mt-[5%] flex-col bg-gray-200 ">

          <div className="flex content-center justify-center w-full h-10 bg-gray-200">
            <h1 className=" text-3xl font-dark w-[90%] mx-[20px]">
              Ejercicios de la semana:
            </h1>
            <button className="text-xl font-dark decoration-slice text-red-900 w-80 h-10 shadow-soft-2xl mr-2 flex p-[20px] items-center justify-center  
                               bg-center stroke-0 text-center xl:p-2.5 shadow-soft-xl bg-white font-semibold hover:scale-110 duration-50 mt-[4px]">
              <Link to="/ejercicios" className="px-3 py-1 ">
                Ver todos{""}
              </Link>
            </button>
          </div>

          {/* Div padre de las cartas */}
          <div className="grid grid-cols-4 grid-row-1  content-center my-[60px] bg-gray-200 mt-[30px]">

            {/* CARD I */}
            <div className="mx-[10%] max-w-sm bg-white border border-gray-200 hover:shadow-xl shadow-md dark:bg-gray-800 dark:border-gray-700 ml-[10%] mt-[5%]">
              <a href="#">
                <img
                  className=""
                  src="https://img.freepik.com/vector-gratis/ilustracion-concepto-hacer-deporte_114360-1120.jpg?w=2000"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Ejercicio 1
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Pequeña descripcion o dificultad
                </p>
              </div>
            </div>
            
            {/* CARD II */}
            <div className="mx-[10%] max-w-sm bg-white border border-gray-200 hover:shadow-xl shadow-md dark:bg-gray-800 dark:border-gray-700 ml-[10%] mt-[5%]">
              <a href="#">
                <img
                  className=""
                  src="https://img.freepik.com/vector-gratis/ilustracion-concepto-hacer-deporte_114360-1120.jpg?w=2000"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Ejercicio 1
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Pequeña descripcion o dificultad
                </p>
              </div>
            </div>

            {/* CARD III */}
            <div className="mx-[10%] max-w-sm bg-white border border-gray-200 hover:shadow-xl shadow-md dark:bg-gray-800 dark:border-gray-700 ml-[10%] mt-[5%]">
              <a href="#">
                <img
                  className=""
                  src="https://img.freepik.com/vector-gratis/ilustracion-concepto-hacer-deporte_114360-1120.jpg?w=2000"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Ejercicio 1
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Pequeña descripcion o dificultad
                </p>
              </div>
            </div>

            {/* CARD IV */}
            <div className="mx-[10%] max-w-sm bg-white border border-gray-200 hover:shadow-xl shadow-md dark:bg-gray-800 dark:border-gray-700 ml-[10%] mt-[5%]">
              <a href="#">
                <img
                  className=""
                  src="https://img.freepik.com/vector-gratis/ilustracion-concepto-hacer-deporte_114360-1120.jpg?w=2000"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Ejercicio 1
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Pequeña descripcion o dificultad
                </p>
              </div>
            </div>
          </div>

          {/* Second row of excercises */}
          <div className="bg-gray-500">

            <div className="flex content-center justify-center w-full h-10 bg-gray-500">
              <h1 className=" text-3xl text-white font-dark  w-[90%] mx-[20px]">
                Ejercicios con mejor calificación:
              </h1>
              <button className="text-xl font-dark decoration-slice text-red-900 w-80 h-10 mt-[3px] shadow-soft-2xl mr-2 flex p-[20px] items-center justify-center  
                                 bg-center stroke-0 text-center xl:p-2.5 shadow-soft-xl bg-white font-semibold hover:scale-110 duration-50 ">
                <Link to="/fitFocus/ejercicios" className="px-3 py-1 ">
                  Ver todos{""}
                </Link>
              </button>
            </div>

            {/* div padre cards row II */}
            <div className="grid grid-cols-4 grid-row-1 my-[60px] bg-gray-500 mt-[30px]">

              {/* CARD I */}
              <div className="mx-[10%] max-w-sm bg-white border border-gray-200 hover:shadow-xl shadow-md dark:bg-gray-800 dark:border-gray-700 ml-[10%] mt-[5%]">
                <a href="#">
                  <img
                    className=""
                    src="https://img.freepik.com/vector-gratis/ilustracion-concepto-hacer-deporte_114360-1120.jpg?w=2000"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Ejercicio 1
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Pequeña descripcion o dificultad
                  </p>
                </div>
              </div>

              {/* CARD II */}
              <div className="mx-[10%] max-w-sm bg-white border border-gray-200 hover:shadow-xl shadow-md dark:bg-gray-800 dark:border-gray-700 ml-[10%] mt-[5%]">
                <a href="#">
                  <img
                    className=""
                    src="https://img.freepik.com/vector-gratis/ilustracion-concepto-hacer-deporte_114360-1120.jpg?w=2000"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Ejercicio 1
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Pequeña descripcion o dificultad
                  </p>
                </div>
              </div>

              {/* CARD III */}
              <div className="mx-[10%] max-w-sm bg-white border border-gray-200 hover:shadow-xl shadow-md dark:bg-gray-800 dark:border-gray-700 ml-[10%] mt-[5%]">
                <a href="#">
                  <img
                    className=""
                    src="https://img.freepik.com/vector-gratis/ilustracion-concepto-hacer-deporte_114360-1120.jpg?w=2000"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Ejercicio 1
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Pequeña descripcion o dificultad
                  </p>
                </div>
              </div>

              {/* CARD IV */}
              <div className="mx-[10%] max-w-sm bg-white border border-gray-200 hover:shadow-xl shadow-md dark:bg-gray-800 dark:border-gray-700 ml-[10%] mt-[5%]">
                <a href="#">
                  <img
                    className=""
                    src="https://img.freepik.com/vector-gratis/ilustracion-concepto-hacer-deporte_114360-1120.jpg?w=2000"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Ejercicio 1
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Pequeña descripcion o dificultad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* div de carusel con 3 Noticias */}
        <div className="flex content-center justify-center w-full h-10 bg-gray-100 mt-[50px]">
          <h1 className=" text-5xl text-gray-800 font-dark w-[90%] mx-[20px]">
            Noticias de interes:
          </h1>
          <button className="text-xl font-dark decoration-slice text-red-900 w-80 h-10 mt-[3px] shadow-soft-2xl mr-2 flex p-[20px] items-center justify-center  
                                 bg-center stroke-0 text-center xl:p-2.5 shadow-soft-xl bg-white font-semibold hover:scale-110 duration-50 ">
            <Link to="/news" className="px-3 py-1 ">
              Ver todos{""}
            </Link>
          </button>
        </div>

        <div className="mt-[20px] mb-[10px]">
          {
            <Carousel
              content={[
                {
                  src: "https://www.palco23.com/files/2020/18_recursos/fitness/dominada-728.jpg",
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
          }
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
