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
      video: "https://c.tenor.com/gI-8qCUEko8AAAAC/pushup.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e647",
      name: "KNEE PUSH UPS",
      difficulty: "easy",
      muscles: "upper_body",
      genre: "both",
      video: "https://c.tenor.com/W_cGMvJdlWQAAAAC/widegrip-pushups.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e648",
      name: "DIAMOND PUSH UPS",
      difficulty: "hard",
      muscles: "upper_body",
      genre: "man",
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
      video:
        "https://workout-gifs.s3.amazonaws.com/routines/ecfc6c6f-8889-485b-85a2-b87b5a6c905a.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e64d",
      name: "BULGARIAN SQUAT",
      difficulty: "medium",
      muscles: "lower_body",
      genre: "both",
      video: "https://c.tenor.com/ajSFCn6kW9YAAAAC/fitness-girlfitness.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e64e",
      name: "JUMP SQUAT",
      difficulty: "hard",
      muscles: "lower_body",
      genre: "both",
      video: "https://c.tenor.com/KTAavalOAWQAAAAC/squat-jumps.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e64f",
      name: "JUMPING JACK",
      difficulty: "easy",
      muscles: "functional",
      genre: "both",
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
      video: "https://c.tenor.com/NYyx3iSx_gwAAAAd/home-workouts-exercise.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e651",
      name: "JUMP LUNGES",
      difficulty: "hard",
      muscles: "lower_body",
      genre: "both",
      video: "https://c.tenor.com/meIUZZ_2oZMAAAAC/lunge-jump.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e652",
      name: "LUNGES",
      difficulty: "medium",
      muscles: "lower_body",
      genre: "both",
      video: "https://thumbs.gfycat.com/AbleFondChick-size_restricted.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e653",
      name: "WALL SIT",
      difficulty: "medium",
      muscles: "lower_body",
      genre: "both",
      video: "https://cdn2.actitudfem.com/media/files/media/files/wall-sit.gif",
      __v: 0,
    },
    {
      _id: "6320dc3eb7171b77e516e654",
      name: "SIT UPS",
      difficulty: "easy",
      muscles: "abs",
      genre: "both",
      video:
        "https://c.tenor.com/vFqz6XYPKPIAAAAC/abdominal-supra-abdominal.gif",
      __v: 0,
    },
  ]);

  return (
    <div className="max-w-screen-2xl my-12 mx-auto overflow-hidden bg-slate-50 rounded-md shadow-lg">
      <Carousel
        content={[
          {
            src: "https://res.cloudinary.com/pozters/image/upload/w_700/v1534965023/prod_uploads/ld8w07zMjg0E1y91qp4RO",
            text: "Hazte premium 15% de descuento",
            stylesText:
              "sm:bg-blue-400 sm:opacity-90 sm:font-semibold sm:text-white",
          },
          {
            src: video1,
            text: "¡Entrena con nosotros!",
            stylesText: "sm:bg-red-300 sm:opacity-60 sm:font-mono",
          },
          {
            src: img2,
            text: "Hombre Fuerte 3",
            stylesText:
              "sm:bg-gray-300 sm:text-black sm:opacity-50 sm:font-bold",
          },
        ]}
      />
      <br />
      <hr />
      <h1 className="text-center text-3xl mt-10 font-semibold">
        EJERCICIOS DEL DIA
      </h1>
      <hr />
      <br />
      {exercises.length && (
        <div>
          <h1 className="font-bold text-center text-2xl">
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
              ({ video, name, difficulty, muscles, genre, _id }) => {
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, Nonea! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.{" "}
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
          <h1 className="font-bold text-center text-2xl" id="excercises">
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
              ({ video, name, difficulty, muscles, genre, _id }) => {
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, Nonea! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.{" "}
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
          <video  src={video2} autoPlay loop muted />
        </div>
        <div className="flex justify-center items-center w-2/5 h-full ">
          <div className="relative h-full w-full flex items-center p-2 bg-black">
            <p
              className="min-w-full w-full p-2 text-2xl font-bold text-center text-transparent rounded bg-clip-text
               caret-pink-600 bg-gradient-to-t from-rose-600 via-neutral-100 to-cyan-400">
              &lt; Dolor que sientas hoy... <br />
              fueza que sentiras mañana &gt;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRegister;
