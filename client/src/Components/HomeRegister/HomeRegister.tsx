import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "../Carousel/Carousel";
import { useState } from "react";
import img1 from "../assets/homeRegister-media/Img1.jpg";
import img2 from "../assets/homeRegister-media/Img2.jpg";
import img3 from "../assets/homeRegister-media/Img3.jpg";
import Footer from "../footer/Footer";
const video1 = require("../assets/homeRegister-media/Video-Slide.mp4");
const video2 = require("../assets/homeRegister-media/Video2.mp4");

const HomeRegister = () => {
  const [exercises, setExercises] = useState([
    {
      _id: "6320dc3eb7171b77e516e646",
      name: "PUSHUPS",
      difficulty: "medium",
      muscles: "upper_body",
      genre: "man",
      description:
        "Las lagartijas perfeccionan el pecho, los hombros y los brazos, en particular los músculos deltoides, tríceps y pectorales, pero en realidad son un movimiento de todo el cuerpo.",
      video: "https://c.tenor.com/gI-8qCUEko8AAAAC/pushup.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e647",
      name: "KNEE PUSH UPS",
      difficulty: "easy",
      muscles: "upper_body",
      genre: "both",
      description:
        "El ejercicio de flexiones de brazos con rodillas apoyadas es muy útil para trabajar los músculos pectorales, tríceps y zona media.",
      video: "https://c.tenor.com/W_cGMvJdlWQAAAAC/widegrip-pushups.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e648",
      name: "DIAMOND PUSH UPS",
      difficulty: "hard",
      muscles: "upper_body",
      genre: "man",
      description:
        "Las lagartijas de diamante son perfectas para ganar fuerza en los tríceps. Sin embargo, al igual que con las lagartijas tradicionales, tus pectorales, tus deltoides y tu corazon también estarán trabajando.",
      video:
        "https://thumbs.gfycat.com/AffectionateImmenseIrishdraughthorse-size_restricted.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e649",
      name: "CLAP PUSH UPS",
      difficulty: "hard",
      muscles: "upper_body",
      genre: "man",
      description:
        "Manteniendo el torso completamente contraído, baje lentamente el cuerpo hacia el piso de forma uniforme.  Una vez que su torso haya llegado al suelo, tome fuerzas y eleve su cuerpo con un movimiento explosivo y dé un aplauso por abajo del torso, luego, rápidamente coloque las manos y brazos en la posición inicial.",
      video:
        "https://c.tenor.com/EbRmSXrs5JQAAAAd/clap-pushups-stephen-farrelly.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e64a",
      name: "SQUATS",
      difficulty: "easy",
      muscles: "lower_body",
      genre: "both",
      description:
        "Junta tus manos o estira tus brazos en un ángulo de 90 grados. Cuando vayas a bajar, mantén los glúteos hacia atrás. Haz como si fueras a sentarte en una silla imaginaria. Es importante que las rodillas no sobrepasen la punta de tus pies, siempre deben quedar por detrás.",
      video:
        "https://c.tenor.com/g6XQ1z_Op0QAAAAC/squats-body-weight-training.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e64b",
      name: "SUMO SQUATS",
      difficulty: "medium",
      muscles: "lower_body",
      genre: "both",
      description:
        "Las sentadillas sumo son un ejercicio de tonificación del tren inferior que no puede faltar en tu rutina de entrenamiento. Esta variación de la clásica sentadilla es uno de los ejercicios de glúteos más practicados, ya que es altamente efectivo para tonificar los músculos de la cara interna del muslo: los aductores.",
      video:
        "https://i.pinimg.com/originals/19/5b/a7/195ba798f4246ae9930a97ea2e084aae.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e64c",
      name: "SIDE TAP SQUAT",
      difficulty: "hard",
      muscles: "lower_body",
      genre: "both",
      description:
        "La sentadilla lateral sirve para ejercitar los glúteos y piernas. Los músculos más implicados en este ejercicio son los glúteos (sobre todo glúteo medio), los cuádriceps y toda la musculatura interescapular para mantener una buena postura.",
      video:
        "https://workout-gifs.s3.amazonaws.com/routines/ecfc6c6f-8889-485b-85a2-b87b5a6c905a.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e64e",
      name: "JUMP SQUAT",
      difficulty: "hard",
      muscles: "lower_body",
      genre: "both",
      description:
        "Las sentadillas con salto, conocidas como las sentadillas más explosivas, comienzan con los pies por fuera de las caderas y las rodillas en la misma dirección que las puntas de los pies. Luego echamos la cadera hacia atrás y flexionamos las caderas en 90 grados.",
      video: "https://c.tenor.com/KTAavalOAWQAAAAC/squat-jumps.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e64f",
      name: "JUMPING JACK",
      difficulty: "easy",
      muscles: "functional",
      genre: "both",
      description: "asdasdasd",
      video:
        "https://c.tenor.com/jPmY-vQLpeMAAAAd/jumping-jacks-home-workouts.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e650",
      name: "MOUNTAIN CLIMBERS",
      difficulty: "easy",
      muscles: "functional",
      genre: "both",
      description: "asdasdasd",
      video: "https://c.tenor.com/NYyx3iSx_gwAAAAd/home-workouts-exercise.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e651",
      name: "JUMP LUNGES",
      difficulty: "hard",
      muscles: "lower_body",
      genre: "both",
      description:
        "Asume una posición de estocada colocando un pie delante del otro y doblando las rodillas. Usa las piernas para impulsarte en un salto. Mientras estés en el aire, cambia la posición de los pies, colocando la pierna delantera detrás de ti y la pierna trasera delante de ti. Cae suavemente.",
      video: "https://c.tenor.com/meIUZZ_2oZMAAAAC/lunge-jump.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e652",
      name: "LUNGES",
      difficulty: "medium",
      muscles: "lower_body",
      genre: "both",
      description:
        "La estocada es un ejercicio de resistencia corporal que trabaja los músculos de las piernas. Específicamente, trabaja los cuádriceps y los músculos isquiotibiales del muslo, los glúteos y, en menor medida, los músculos de la parte inferior de la pierna.",
      video: "https://thumbs.gfycat.com/AbleFondChick-size_restricted.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e653",
      name: "WALL SIT",
      difficulty: "medium",
      muscles: "lower_body",
      genre: "both",
      description:
        "Para realizar este ejercicio sólo tendrás que apoyar la espalda por completo en una pared y bajar el cuerpo hasta que las rodillas y las caderas formen un ángulo recto. Mantén esta posición y durante medio minuto o el tiempo que puedas.",
      video: "https://cdn2.actitudfem.com/media/files/media/files/wall-sit.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e654",
      name: "SIT UPS",
      difficulty: "easy",
      muscles: "abs",
      genre: "both",
      description: "asdasdasd",
      video:
        "https://c.tenor.com/vFqz6XYPKPIAAAAC/abdominal-supra-abdominal.gif",
      __v: 0,
    },
  ]);

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
        {exercises.length && (
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
              {exercises.map(
                ({
                  video,
                  name,
                  difficulty,
                  muscles,
                  genre,
                  _id,
                  description,
                }) => {
                  if (muscles === "upper_body")
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
              {exercises.map(
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
