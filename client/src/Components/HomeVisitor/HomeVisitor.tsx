import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Div_cards,
  Div_screem2,
  Div_benefitsVisitor,
  Div_benefitsVisitor2,
  Div_about,
  Div_screem3,
  Span_decoration,
  Span_decoration2,
} from "./styles/styled_componet_homeVisite";

import Footer from "../footer/Footer";
import img1 from "../assets/Fotos y Videos HomeVisitor/home_img1.svg";
import img7 from "../assets/Fotos y Videos HomeVisitor/discount.svg";
import img8 from "../assets/Fotos y Videos HomeVisitor/personaltrainer.svg";

import img9 from "../assets/Fotos y Videos HomeVisitor/undraw_calculator_re_alsc.svg";
import img10 from "../assets/Fotos y Videos HomeVisitor/undraw_my_personal_files_re_3q0p.svg";
import img11 from "../assets/Fotos y Videos HomeVisitor/Pilates-amico.svg";
import img12 from "../assets/Fotos y Videos HomeVisitor/undraw_people_re_8spw.svg";
import pilates from "../assets/Fotos y Videos HomeVisitor/pilates.svg";
import womanweight from "../assets/Fotos y Videos HomeVisitor/womanweight.svg";
import womanworkingout from "../assets/Fotos y Videos HomeVisitor/womanworkingout.svg";

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
  const [data, setData] = useState<number>(0);
  useEffect(() => {
    return setData(ramdomMsj());
  }, [ramdomMsj()]);
  return (
    <>
      {/* screen 1  */}
      <div className="h-screen">
        <Div_cards>
          <div id="text-container">
            <h1>Fit focus</h1>
            <p className="text-sm text-gray-800 font-normal my-4 leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quas et saepe cum earum? Nesciunt est mollitia distinctio laborum
              nam eos expedita quae iusto minus, natus ea. Quod, iusto odio.{" "}
            </p>
            <button className="font-normal"> Empiza ya </button>
          </div>
          <div id="img-container">
            <img src={img1} alt="img" />
            <div id="card-opiniones">
              <div id="img">
                <img src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe" />
              </div>
              <div id="card-text-opiniones">
                <p>{opiniones[data].name}</p>
                <p className="font-normal text-xl">{opiniones[data].opinion}</p>
              </div>
            </div>
          </div>
        
        </Div_cards>
      </div>
      {/* screen 2 */}
      <div className="h-screen flex justify-center">
        <Div_screem2>
          <div id="text-screen2" className="font-dark mt-10">
            <h3>Nuetra app te ofrece</h3>
            <p className="font-normal text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              ipsum voluptate, corporis blanditiis molestiae velit dolore?
              Maxime beatae natus dolorem repudiandae corrupti dolore vitae nisi
              adipisci commodi, ea ipsa nobis!{" "}
            </p>
          </div>
          <div id="img-screen2">
            <div>
              <img id="img-1" src={img9} alt="img" />
              <img id="img-2" src={img10} alt="img" />
            </div>
          </div>
        </Div_screem2>
        <Span_decoration></Span_decoration>
        <Span_decoration2></Span_decoration2>
      </div>
      {/* screen 3  */}
      <Div_screem3 className="w-4/5 mx-auto px-4 mt-[30%] h-screen">
        <section className="flex">
          <div className="w-2/5">
            <div>
              <h2 className="text-3xl font-dark">¿Para quien es esta app?</h2>
              <div className="h-1 bg-gray-300 w-10 mt-2"></div>
            </div>
            <p id="text-ofese" className="text-sm text-back font-normal my-4 leading-loose">
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
    
      <div className="mt-32">
        <section className="w-4/5 mx-auto flex justify-between items-center">
          <div className="w-1/5 mr-auto " >
            <h2 className="text-3xl font-dark text-black">
              Beneficios
            </h2>
            <div className="h-1 bg-gray-300 w-10 mt-2"></div>
          </div>
          <div className="w-1/2">
            <p className="text-md text-gray-900 font-normal my-4 leading-loose text-justify">
              ¡Transformamos lo complicado en simple! Porque pensamos en tu comodidad,
              lo mejor de FIT FOCUS es que puedes programarla a tu ritmo de vida,
              ya seas un experto haciendo ejercicio o una persona que apenas quiere
              comenzar a entrenarse, sin importar la edad. Ademas, volvientote premium puedes
              gozar de descuentos y rutinas personalizadas para mejores resultados.
            </p>
          </div>
        </section>
        <section>
          <div className="card relative">
            <div className="display: inline-block border border-grey-400 ml-5">
              <img src={pilates} className="object-fill h-80 w-full" alt="image not found" />
              <div className="absolute overlay-text w-full flex flex-col items-center">
                <p className="text-black text-2xl tracking-tight">Entrena desde la comodidad de tu casa</p>
              </div>
            </div>
            <div className="display: inline-block border border-grey-400 ml-5">
              <img src={img7} className="object-fill h-80 w-full " alt="image not found " />
              <div className="absolute overlay-text w-full flex flex-col items-center">
                <p className="text-black text-2xl tracking-tight">Obten descuentos por premium</p>
              </div>
            </div>
            <div className="display: inline-block border border-grey-400 ml-5">
              <img src={womanworkingout} className="object-fill h-80 w-full" alt="image not found" />
              <div className="absolute overlay-text w-full flex flex-col items-center">
                <p className="text-black text-2xl tracking-tight">Nunca sabrás de lo que eres capaz sino comienzas</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <br/>
      <hr/>

      {/* screen 5 */}
      
      <div className=" display: flex justify-content: center max-w-[100%]">
        <div className="w-11/12 mr-auto mt-32 border border-black-500 max-w-[80%]" >
          <section className="flex items-center">
            <div className="w-1/2">
              <img src={img6} alt="img not found" />
            </div>
            <div className="w-2/5 ml-auto">
              <div>
                <h2 className="text-3xl font-dark text-black">
                  ¿Que esperas?
                </h2>
                <div className="h-1 bg-gray-300 w-10 mt-2"></div>
              </div>
              <p className="text-md text-gray-900 font-normal my-4 leading-loose text-justify mr-5">
                Realiza tu registro en tan sólo 1 minuto y comienza tu entrenamiento en la mejor 
                y mas comoda aplicación para ejercicios, asi que... ¡A ENTRENAR!
              </p>
              <Link to="/auth/sing-up">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">REGISTRARSE</button>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
