import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Div_cards,
  Div_screem2,
  Div_about,
  Div_screem3,
  Span_decoration,
  Span_decoration2,
  Span_decoration3,
  Span_decoration4,
} from "./styles/styled_componet_homeVisite";

import Footer from "../footer/Footer";
import img1 from "../assets/Fotos y Videos HomeVisitor/home_img1.svg";
import img2 from "../assets/Fotos y Videos HomeVisitor/discount.svg";
import img3 from "../assets/Fotos y Videos HomeVisitor/undraw_calculator_re_alsc.svg";
import img4 from "../assets/Fotos y Videos HomeVisitor/undraw_my_personal_files_re_3q0p.svg";
import pilates from "../assets/Fotos y Videos HomeVisitor/pilates.svg";
import womanworkingout from "../assets/Fotos y Videos HomeVisitor/womanworkingout.svg";
import About from "./About";
import Navbar from "../Navbar/Navbar";
import FooterVisitor from "../footer/Footer2";

const img6 = require("../assets/Fotos y Videos HomeVisitor/urban-913.png");
const img13 = require("../assets/Fotos y Videos HomeVisitor/allpeople.jpg");

const opiniones = [
  {
    name: "Chacabuco",
    opinion: "epico ",
  },
  {
    name: "Juan",
    opinion: "baje 80 kilos en 10 dias ",
  },
  {
    name: "Roberto",
    opinion: "encreible! desde q uses su app me siento mas saludable ",
  },
  {
    name: "Fiona",
    opinion: "maravilloso ahora todos los hombres me hablan ",
  },
];

function ramdomMsj() {
  let ramdomMsj = Math.floor(Math.random() * opiniones.length);
  return ramdomMsj;
}
export default function HomeVisitor() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/mercadopago");
  };
  const [data, setData] = useState<number>(0);
  useEffect(() => {
    return setData(ramdomMsj());
  }, [ramdomMsj()]);
  return (
    <>
     
      {/* screen 1  */}
      <div className="bg-indigo-50">
        <div className="h-screen">
          <Div_cards>
            <div id="text-container">
              <h1 className="font-dark">Fit focus</h1>
              <p className=" text-gray-800 font-normal my-4 leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi quas et saepe cum earum? Nesciunt est mollitia
                distinctio laborum nam eos expedita quae iusto minus, natus ea.
                Quod, iusto odio.{" "}
              </p>
              <Link to="/auth/sing-up">
                <button className="font-normal"> REGISTRATE YA </button>
              </Link>
            </div>
            <div id="img-container">
              <img src={img1} alt="img" />
              <div id="card-opiniones">
                <div id="img">
                  <img src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe" />
                </div>
                <div id="card-text-opiniones">
                  <p>{opiniones[data].name}</p>
                  <p className="font-normal text-xl">
                    {opiniones[data].opinion}
                  </p>
                </div>
              </div>
            </div>
          </Div_cards>
        </div>

        {/* screen 2 */}
        <div className="h-screen flex justify-center ">
          <Div_screem2>
            <div id="text-screen2" className="font-dark mt-10">
              <h3>Nuetra app te ofrece</h3>
              <p className="font-normal  text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                ipsum voluptate, corporis blanditiis molestiae velit dolore?
                Maxime beatae natus dolorem repudiandae corrupti dolore vitae
                nisi adipisci commodi, ea ipsa nobis!{" "}
              </p>
            </div>
            <div id="img-screen2">
              <div>
                <img id="img-1" src={img3} alt="img" />
                <img id="img-2" src={img4} alt="img" />
              </div>
            </div>
          </Div_screem2>
          <Span_decoration2></Span_decoration2>
        </div>

        {/* screen 3  */}
        <Div_screem3 className="w-4/5 mx-auto px-4 mt-[14%] h-[64vh]">
          <section className="flex">
            <div className="w-2/5">
              <div>
                <h2 className="text-3xl font-dark">¿Para quien es esta app?</h2>
                <div className="h-1 bg-gray-300 w-10 mt-2"></div>
              </div>
              <p
                id="text-ofese"
                className="text-sm text-back font-normal my-4 leading-loose"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias mollitia enim aliquid debitis, dolor deserunt nihil in
                culpa vitae quibusdam qui earum cum! Similique eveniet at magnam
                laboriosam consequatur illo.
              </p>
            </div>
            <div className="ml-auto w-2/4 flex">
              <img src={img13} className="max-w-[100%]" alt="img not found" />
            </div>
          </section>
        </Div_screem3>

        {/* screen extra  */}
        <div className=" flex w-4/5 mx-auto px-4 mt-[0] justify-center  h-[62vh]  ">
          <section className="w-4/5 mx-auto flex">
            <div className="w-[80%]">
              <h2 className="text-3xl font-dark text-black">Beneficios</h2>
              <div className="h-1 bg-gray-300 w-10 mt-2"></div>
              <div className="">
                <p className="text-md  text-gray-900 font-normal my-4 leading-loose text-justify">
                  ¡Transformamos lo complicado en simple! Porque pensamos en tu
                  comodidad, lo mejor de FIT FOCUS es que puedes programarla a
                  tu ritmo de vida, ya seas un experto haciendo ejercicio o una
                  persona que apenas quiere comenzar a entrenarse, sin importar
                  la edad. Ademas, volvientote premium puedes gozar de
                  descuentos y rutinas personalizadas para mejores resultados.
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-wrap w-[50%] h-[100px]  items-center justify-center">
            <div className="flex flex-wrap  ">
              <div className=" w-[40%] relative z-20 bg-white border text-transparent hover:shadow-lg hover:text-black duration-[1s] border-grey-400 m-2">
                <img
                  src={pilates}
                  className="object-fill "
                  alt="image not found"
                />
                <p className=" text-[1rem] px-2 tracking-tight">
                  Entrena desde la comodidad de tu casa
                </p>
              </div>
              <div className=" w-[40%] text-transparent relative z-20 bg-white hover:text-black  hover:shadow-lg duration-[1s] border border-grey-400 m-2 ">
                <img
                  src={img2}
                  className="object-fill  "
                  alt="image not found "
                />
                <p className=" text-[1rem]  px-2 tracking-tight">
                  Obten descuentos por premium
                </p>
              </div>
              <div className=" w-[40%] text-transparent relative z-20 bg-white hover:text-black  hover:shadow-lg duration-[1s] border border-grey-400 m-2">
                <img
                  src={womanworkingout}
                  className="object-fill"
                  alt="image not found"
                />
                <p className="text-[1rem]  px-2 tracking-tight">
                  Nunca sabrás de lo que eres capaz sino comienzas
                </p>
              </div>
              <div className=" w-[40%]  relative z-20 flex items-center duration-[1s] m-2">
                <Link className="w-[100%]" to="/auth/sing-up">
                  <button
                    type="button"
                    className="text-white  hover:shadow-lg bg-blue-600 hover:bg-blue-700 felx-1 focus:ring-2 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                  >
                    Mas →
                  </button>
                </Link>
              </div>
            </div>
            <Span_decoration3></Span_decoration3>
          </section>
        </div>
        <div className="w-4/5 mx-auto px-4 mt-[10%] h-screen">
          <section className="flex">
            <div className="w-2/5">
              <div>
                <h2 className="text-3xl font-dark">Ofrecemos Ejercicos</h2>
                <div className="h-1 bg-gray-300 w-10 mt-2"></div>
              </div>
              <p
                id="text-ofese"
                className="text-sm text-black font-normal text-justify my-4 leading-loose"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias mollitia enim aliquid debitis, dolor deserunt nihil in
                culpa vitae quibusdam qui earum cum! Similique eveniet at magnam
                laboriosam consequatur illo. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Commodi dolorem numquam debitis
                accusamus cupiditate tempora minima nesciunt excepturi quam?
                Eius soluta voluptatem quidem nulla aspernatur ea dolore quia
                molestias quaerat.
              </p>
            </div>
            <div className="ml-auto w-2/4 flex">
              <div>
                <Link to="/auth/sing-up">
                  <img
                    src="https://c.tenor.com/g6XQ1z_Op0QAAAAC/squats-body-weight-training.gif"
                    className="max-w-[100%] hover:shadow-lg duration-[0.3s]"
                    alt="img not found"
                  />
                  <div className="relative top-[-50px] px-10 ">
                    <p className="text-md font-light text-gray-700">
                      SENTADILLAS
                    </p>
                    <p className="text-md font-light text-gray-700">
                      PRESIONA LA IMAGEN PARA COMENZAR
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* screen 5 */}
        <div className="flex justify-center w-full items-center  h-[20vh] space-x-5 ">
          <Span_decoration4></Span_decoration4>
          <div className="p-4 w-full max-w-sm h-[500px] mt-[60px]   bg-white rounded-lg border shadow-md sm:p-8   ">
            <h5 className="mb-4 text-xl font-medium text-gray-500">Gratis!</h5>
            <div className="flex items-baseline text-gray-900">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">0</span>
              <span className="ml-1 text-xl font-normal text-gray-500 ">
                /00
              </span>
            </div>
            <ul role="list" className="my-7 space-y-5">
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal text-gray-500  ">
                  20 ejercicio por mes
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  calculadora
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  nada..., Compra el premiun YA !
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  rutinas
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  ejercicio y su filtros
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  24×7 soporte
                </span>
              </li>
            </ul>
            <Link to="/auth/sing-up">
              <button
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-700 felx-1 focus:ring-2 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Empieza Gratis!
              </button>
            </Link>
          </div>
          <div className="p-4 w-full max-w-sm bg-white h-[600px] rounded-lg border shadow-md sm:p-8   ">
            <h5 className="mb-4 text-xl font-medium text-gray-500">
              Pago unico!
            </h5>
            <div className="flex items-baseline text-gray-900">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">35</span>
              <span className="ml-1 text-xl font-normal text-gray-500 ">
                /99
              </span>
            </div>
            <ul role="list" className="my-7 space-y-5">
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal text-gray-500  ">
                  Rutinas personalizadas
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                  Todos los ejercicio desbloqueados
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  Calculadora
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  rutinas
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  ejercicio y su filtros
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  50 ejercicio por mes
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  24×7 soporte
                </span>
              </li>
            </ul>
            <button
              type="button"
              onClick={onClick}
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Hazte Premium ya
            </button>
          </div>
        </div>

        {/* screen 6 */}
        <div className=" m-auto w-full">
          <div>
            <div className="w-11/12 m-auto mt-32 max-w-[80%]">
              <section className="flex items-center mt-[30%]">
                <div className="w-1/2">
                  <img src={img6} alt="img not found" />
                </div>
                <div className="w-2/5 ml-auto ">
                  <div>
                    <h2 className="text-3xl font-dark text-black">
                      ¿Que esperas?
                    </h2>
                    <div className="h-1 bg-gray-300 w-10 mt-2"></div>
                  </div>
                  <p className="text-md text-gray-900 font-normal my-4 leading-loose text-justify mr-5">
                    Realiza tu registro en tan sólo 1 minuto y comienza tu
                    entrenamiento en la mejor y mas comoda aplicación para
                    ejercicios, asi que... ¡A ENTRENAR!
                  </p>
                  <Link to="/auth/sing-up">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      REGISTRARSE
                    </button>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>

        <About />
        <FooterVisitor />
      </div>
    </>
  );
}
