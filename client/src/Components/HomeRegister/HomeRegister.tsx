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
import CardNews from "./News/CardNews";
import funcion from "../../additional_info/functions";
import { exitCode } from "process";
import RandomCards from "./RandomCards";

const HomeRegister = () => {

  let token = useToken();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const State = useAppSelector(selectUser);

  const [exercises, setExercises] = useState<Array<any>>()

  const [Render, SetRender] = useState({
    rejercisio: true,
    rcalculadora: false,
    rnoticia: false,
    rfav: false,
    rrutinas: false,
  });


  useEffect(() => {
    console.log(State.exercises)
    setExercises(funcion.get_exercises(State.exercises))
  }, [State])




  useMemo(() => {
    dispatch(Exercises_Get());
  }, []);


  useMemo(() => {
    if (token) dispatch(getProfileInfo(token));
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
        {/* <div>
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
        </div> */}

        <div className=" w-full ">
          <Link to="/mercadopago">
            <img
              src="https://www.palco23.com/files/2020/18_recursos/fitness/dominada-728.jpg"
              alt=""
              className="object-cover h-[80vh] w-full"
            />
            <h1 className="sm:bg-blue-400 sm:opacity-90 sm:font-semibold sm:text-2xl sm:text-white h-10 text-center">
              Hazte premium para obtener rutinas personalizadas
            </h1>
          </Link>
        </div>

        {/* cartas de ejercicios */}
        <div className="flex mt-[5%] flex-col bg-gray-200 ">
          <div className="flex content-center justify-center w-full h-10 bg-gray-200">
            <h1 className="ml-0 text-6xl font-dark w-[80%] mx-[20px]">
              Ejercicios de la semana:
            </h1>

            <Link
              to="/ejercicios"
              className="px-3 py-1 underline text-red-600 hover:text-red-200"
            >
              Ver todos{">>"}
            </Link>
          </div>

          {/* Div padre de las cartas */}
          <div className="grid grid-cols-4 grid-row-1  content-center my-[60px] bg-gray-200 mt-[30px]">
            {/* CARD I */}
            {
            exercises?.length
            ? exercises.map(({name,description}) => <RandomCards title={name}  description={description}/>)
            : null
            }
          </div>

          {/* Second row of excercises */}
          <div className="bg-gray-500">
            <div className="flex content-center justify-center w-full h-10 bg-gray-500">
              <h1 className="ml-0 text-6xl text-white font-dark  w-[80%] mx-[20px]">
                Ejercicios con mejor calificación:
              </h1>

              <Link
                to="/ejercicios"
                className="px-3 py-1 underline text-red-600 hover:text-red-200"
              >
                Ver todos{">>"}
              </Link>
            </div>

            {/* div padre cards row II */}
            <div className="grid grid-cols-4 grid-row-1 my-[60px] bg-gray-500 mt-[30px]">
              {/* CARD I */}


              {/* CARD II */}


              {/* CARD III */}


              {/* CARD IV */}

            </div>
          </div>
        </div>

        {/* div de carusel con 3 Noticias */}
        <div className="flex content-center justify-center w-full h-10 bg-gray-100 mt-[50px]">
          <h1 className="ml-0 text-6xl text-gray-800 font-dark w-[80%] mx-[20px] ">
            Noticias de interés:
          </h1>

          <Link
            to="/news"
            className="px-3 py-1 underline text-red-600 hover:text-red-200"
          >
            Ver todos{">>"}
          </Link>
        </div>

        <div className=" flex justify-center mt-[20px] mb-[10px]">
          <div>
            <CardNews
              id={2}
              title={"Ejercitarse enfermo?"}
              description={"Tips"}
              author={"Lauren Bedosky"}
              image={
                "https://www.revistamoi.com/wp-content/uploads/2016/11/es-bueno-entrenar-enfermo.jpg"
              }
              date={"abril 26, 2022"}
            />
          </div>
          <div>
            <CardNews
              id={0}
              title={"Dieta o ejercicio?"}
              description={"Tips"}
              author={"Adrian Acurero"}
              image={
                "https://workwithdrtiff.com/wp-content/uploads/diet-vs-food-article.jpg"
              }
              date={"abril 26, 2022"}
            />
          </div>
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
