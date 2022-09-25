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
import NavbarHome from "../Navbar/NavbarHome";
import Favoritos from "./Favorito";
import Form_rutinas from "../form_rutinas/From_rutina";
import Navbar from "../Navbar/Navbar";


const HomeRegister = () => {
  const dispatch = useAppDispatch();
  const State:any = useAppSelector(selectUser);
  const { id } = useParams();
  let token= useToken()
  const [Render, SetRender] = useState({
    rejercisio: true,
    rcalculadora: false,
    rnoticia: false,
    rfav: false,
    rrutinas: false,
  });
  useMemo(() => {
    dispatch(Exercises_Get());
    console.log("entra a home")
  }, []);
  useMemo(() => {
    if(token){
      dispatch(getProfileInfo(token));
    }
    

  },[token])

  const getRenderComponet = (event:React.MouseEvent<HTMLDivElement, MouseEvent>| any) => {
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
      <div className=" bg-slate-100  shadow-lg">
        <div className="w-full col-span-9  min-h-screen ">
          <div className="min-w-[100%]  my-5  min-h-[250px] ">

          {id=="home"&&<Ejercicios />}
          {id=="calculadora"&&<Calculadora />}
          {id=="Noticias"&&<Noticias />}
          {id=="Rutinas"&&<RutinasPersonales user={State.user}/>}
          {id=="form_user"&&<Form_rutinas/>}
          {id=="Fav"&&<Favoritos fav={State.user.fav} />}

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
