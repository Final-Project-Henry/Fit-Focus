import FilterExercises from "./FilterExercises";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Carousel from "../Carousel/Carousel";
import { Link } from "react-router-dom";

const video1 = require("../assets/homeRegister-media/Video-Slide.mp4");
const video2 = require("../assets/homeRegister-media/Video2.mp4");

const Ejercicios = () => {
  return (
    <>

      <div className="flex justify-center ">
        {<Carousel
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
        />}
      </div>
      <div>
        <h3 className="font-dark py-[5px] px-[20px] text-gray-700 text-3xl ">
  
        </h3>
        <FilterExercises />
      </div>
    </>
  );
}

export default Ejercicios;
