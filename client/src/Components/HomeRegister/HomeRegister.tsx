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
import baner from "../assets/homeRegister-media/ejerc.jpg";
import LoadingCards from "../loading/LoadingCards";
import Footer2 from "../footer/Footer2";

interface card {
  _id: string;
  name: string;
  difficulty: string;
  equipment: true;
  muscles: string;
  genre: string;
  video: string;
  description: string;
  premium: string;
}

const HomeRegister = () => {
  let token = useToken();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const State = useAppSelector(selectUser);

  const [exercises, setExercises] = useState<Array<card>>([]);
  const [Bastexercises, setBastExercises] = useState<Array<any>>([]);

  const [Render, SetRender] = useState({
    rejercisio: true,
    rcalculadora: false,
    rnoticia: false,
    rfav: false,
    rrutinas: false,
  });

  useEffect(() => {
    if (State.exercises.length > 0) {
      setExercises(funcion.get_exercises(State.exercises));
      setBastExercises(funcion.MejorRewind(State.exercises))
    }
  }, [State.exercises]);

  useMemo(() => {
    dispatch(Exercises_Get());
  }, []);

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
      <div className="bg-slate-100">
        <div className=" w-full ">
          <Link to="/mercadopago">
            <img src={baner} alt="" className="object-cover h-[450px] w-full" />
            <h1 className="h-[50px] w-full bg-[#111827] flex items-center text-white font-medium justify-center text-2xl">
              Hazte premium para obtener rutinas personalizadas
            </h1>
          </Link>
        </div>

        {/* cartas de ejercicios */}
        <div className="flex mt-[5%] flex-col bg-gray-200 ">
          <div className="flex items-end w-full h-24">
            <h1 className="ml-9 text-5xl font-dark w-[80%] mx-[20px]">
              Ejercicios de la semana:
            </h1>

            <Link
              to="/ejercicios"
              className="p-0 text-red-700 underline hover:text-gray-900"
            >
              Ver todos{">>"}
            </Link>
          </div>

          <div className="grid grid-cols-4 grid-row-1  content-center my-[60px] bg-gray-200 mt-[30px]">
            {exercises.length > 0 ? (
              exercises.map(
                ({ _id, video, name, difficulty, muscles, genre, premium }) => (
                  <RandomCards
                    _id={_id}
                    video={video}
                    name={name}
                    difficulty={difficulty}
                    genre={genre}
                    muscles={muscles}
                    premium={premium}
                    equipment={true}
                  />
                )
              )
            ) : (
              <LoadingCards num={"1234"} />
            )}
          </div>

          <div className="bg-[#59656F]">
            <div className="flex items-end w-full h-24">
              <h1 className="ml-9 text-5xl text-white font-dark w-[80%] mx-[20px] ">
                Ejercicios con mejor calificación:
              </h1>
              <Link
                to="/ejercicios"
                className="px-3 py-1 underline text-red-600 hover:text-gray-900"
              >
                Ver todos{">>"}
              </Link>
            </div>

            <div className="grid grid-cols-4 grid-row-1 my-[60px] bg-[#59656F] mt-[30px]">
              {Bastexercises.length > 0 ? (
                Bastexercises?.map(
                  ({
                    _id,
                    video,
                    name,
                    difficulty,
                    muscles,
                    genre,
                    premium,
                    rating
                  }) => (
                    <RandomCards
                      _id={_id}
                      video={video}
                      name={name}
                      difficulty={difficulty}
                      genre={genre}
                      rating={rating}
                      muscles={muscles}
                      premium={premium}
                      equipment={true}
                    />
                  )
                )
              ) : (
                <LoadingCards num={"1234"} />
              )}
            </div>
          </div>
        </div>

        <div className="flex items-end w-full h-24">
          <h1 className="ml-0 text-5xl font-dark w-[80%] mx-[20px] ">
            Noticias de interés:
          </h1>
          <Link
            to="/noticias"
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
      <Footer2 />
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
