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
      <NavbarHome />
      <div className="grid grid-cols-1 sm:grid-cols-11 gap-4 bg-gray-900  dark:bg-gray-900  shadow-lg">
        {/* menu */}
        <div className="col-span-2  dark:bg-gray-800 min-h-screen">
          <div className="p-5 top-0 fixed w-[17%]  z-20  dark:bg-gray-800  h-screen">
            <div className=" flex justify-center">
              <img src={iconDrak} className="w-[50%]" alt="icon" />
            </div>
            <hr className="bg-gray-500 h-[1px]" />
            <div className="py-5">

              <Link to="/fitFocus/home"
                id="rejercisio"
                onClick={(e) => getRenderComponet(e)}
                className={`flex ${Render.rejercisio&&"bg-[#351F91]"} cursor-pointer  py-2 pr-5 ${Render.rejercisio?"text-gray-50":"text-gray-400"}  ${Render.rejercisio?"shadow-lg":"shadow"} hover:text-gray-50  hover:bg-blue-700 hover:shadow-lg hover:scale-110 duration-[0.2s] rounded mb-[10px]`}
              >
                <span className="pr-5 pl-2 text-2xl">
                  <CgGym />
                </span>
                Ejercicios
              </Link>

              <Link to="/fitFocus/calculadora"
                id="rcalculadora"
                onClick={(e) => getRenderComponet(e)}
                className={`flex ${Render.rcalculadora&&"bg-[#351F91]"} cursor-pointer my-5 py-2 pr-5 ${Render.rcalculadora?"text-gray-50":"text-gray-400"} ${Render.rcalculadora?"scale-110":"scale-100 "} ${Render.rcalculadora?"shadow-lg":"shadow"}  hover:text-gray-50 hover:bg-blue-700 hover:shadow-lg hover:scale-110 duration-[0.2s] rounded mb-[10px]`}
              >
                <span className="pr-5 pl-2 text-2xl">
                  <ImCalculator />
                </span>
                Calculadora
              </Link>

              <Link to="/fitFocus/Noticias"
                id="rnoticia"
                onClick={(e) => getRenderComponet(e)}
                className={`flex ${Render.rnoticia&&"bg-[#351F91]"} cursor-pointer my-5 py-2 pr-5 ${Render.rnoticia?"text-gray-50":"text-gray-400"} ${Render.rnoticia?"scale-110":"scale-100 "} ${Render.rnoticia?"shadow-lg":"shadow"} hover:text-gray-50 hover:bg-blue-700 hover:shadow-lg hover:scale-110 duration-[0.2s] rounded mb-[10px]`}
              >
                <span className="pr-5 pl-2 text-2xl">
                  <BsNewspaper />
                </span>
                Noticias
              </Link>
              <Link to="/fitFocus/Rutinas"
                id="rrutinas"
                onClick={(e) => getRenderComponet(e)}
                className={`flex ${Render.rrutinas&&"bg-[#351F91]"} cursor-pointer py-2 my-5 pr-5 ${Render.rrutinas?"text-gray-50":"text-gray-400"} ${Render.rrutinas?"scale-110":"scale-100 "} ${Render.rrutinas?"shadow-lg":"shadow"} hover:text-gray-50  hover:bg-blue-700 hover:shadow-lg hover:scale-110 duration-[0.2s] rounded mb-[10px]`}
              >
                <span className="pr-5 pl-2 text-2xl">
                  <TbFolder />
                </span>
                Rutinas
              </Link>

              <Link to="/fitFocus/Fav"
                id="rfav"
                onClick={(e) => getRenderComponet(e)}
                className={`flex ${Render.rfav&&"bg-[#351F91]"} cursor-pointer py-2 my-5 pr-5 ${Render.rfav?"text-gray-50":"text-gray-400"} ${Render.rfav?"scale-110":"scale-100 "} ${Render.rfav?"shadow-lg":"shadow"} hover:text-gray-50  hover:bg-blue-700 hover:shadow-lg hover:scale-110 duration-[0.2s] rounded mb-[10px]`}
              >
                <span className="pr-5 pl-2 text-2xl">
                  <TbFolder />
                </span>
                 favoritos
              </Link>
            </div>
            <hr className="bg-gray-500 h-[1px]" />
          </div>
        </div>
        {/* carousel */}
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
