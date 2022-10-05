import FilterExercises from "./FilterExercises";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Carousel from "../Carousel/Carousel";
import { Link } from "react-router-dom";

import slice from "../assets/homeRegister-media/slic2.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import { useMemo } from "react";
import { Exercises_Get } from "../../features/counter/counterSlice";
import { useAppDispatch } from "../../app/hooks";
import Footer2 from "../footer/Footer2";


const Ejercicios = () => {
  const dispatch = useAppDispatch();
  useMemo(() => {

console.log("carga ex")

    dispatch(Exercises_Get());
  }, []);

  return (
    <>
      <div className="flex justify-center w-full overflow-hidden h-[500px]">
        <div className="absolute text-center flex justify-center  h-[500px] bg-[#11182852] w-full">
          <p className="p-5 w-[30%] m-auto bg-[#11182873] font-normal text-white text-5xl">Ejercicios</p>
        </div>
        <img className="w-full object-cover" src={slice}/>
      </div>
      <div>
        <FilterExercises />
      </div>
      <Footer2/>
    </>
  );
}

export default Ejercicios;
