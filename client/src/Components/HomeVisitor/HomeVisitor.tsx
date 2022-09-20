import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Div_cards,
  Div_screem2,
  Div_benefitsVisitor,
  Div_benefitsVisitor2,
  Div_about,
} from "./styles/styled_componet_homeVisite";

import Footer from "../footer/Footer";
import img1 from "../assets/Fotos y Videos HomeVisitor/home_img1.svg";
import img7 from "../assets/Fotos y Videos HomeVisitor/discount.svg";
import img8 from "../assets/Fotos y Videos HomeVisitor/personaltrainer.svg";

import img9 from "../assets/Fotos y Videos HomeVisitor/undraw_calculator_re_alsc.svg";
import img10 from "../assets/Fotos y Videos HomeVisitor/undraw_my_personal_files_re_3q0p.svg";
import img11 from "../assets/Fotos y Videos HomeVisitor/Pilates-amico.svg";
import img12 from "../assets/Fotos y Videos HomeVisitor/undraw_people_re_8spw.svg";


const img6 = require("../assets/Fotos y Videos HomeVisitor/urban-913.png");

const opiniones = [{
  name: "Chacabuco",
  opinion:"epico "
},
{
  name: "Juan",
  opinion:"baje 80 kilos en 10 dias "

},
{
  name: "Roberto",
  opinion:"encreible! desde q uses su app me siento mas saludable "

},
{
  name: "Fiona",
  opinion:"maravilloso ahora todos los hombres me hablan "

}]

function ramdomMsj(){
  let ramdomMsj=Math.floor(Math.random()*opiniones.length)
return ramdomMsj
}
export default function HomeVisitor() {
  const [data, setData] = useState<number>(0);
useEffect(() => {
  return setData(ramdomMsj());
},[ramdomMsj()])
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
            <div id="card-opiniones" >
              <div id="img">
                <img src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe" />
              </div>
              <div id="card-text-opiniones">
                <p>{opiniones[data].name}</p>
                <p className="font-normal text-xl">{opiniones[data].opinion}</p>
              </div> 
            </div>
          </div>
          <div></div>
        </Div_cards>
      </div>
      {/* screen 2 */}
      <div className="h-screen flex justify-center">
        <Div_screem2>
          <div id="text-screen2">
            <h3>Nuetra app te ofrece</h3>
            <p className="font-normal text-gray-600" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum voluptate, corporis blanditiis molestiae velit dolore? Maxime beatae natus dolorem repudiandae corrupti dolore vitae nisi adipisci commodi, ea ipsa nobis! </p>
          </div>
          <div id="img-screen2">
            <div>
            <img id="img-1" src={img9} alt="img" />
            <img id="img-2" src={img10} alt="img" />
            </div>
          </div>
        </Div_screem2>
      </div>
      {/* screen 3  */}
      <div className="w-4/5 mx-auto px-4 mt-[30%] h-screen">
        <section className="flex">
          <div className="w-2/5">
            <div>
              <h2 className="text-3xl font-dark">
                ¿Para quien es esta app?
              </h2>
              <div className="h-1 bg-gray-300 w-10 mt-2"></div>
            </div>
            <p className="text-sm text-gray-500 font-normal my-4 leading-loose">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
              mollitia enim aliquid debitis, dolor deserunt nihil in culpa vitae
              quibusdam qui earum cum! Similique eveniet at magnam laboriosam
              consequatur illo.
            </p>
          </div>
          <div className="ml-auto w-2/4 flex">
            <img src={img12} className="max-w-[100%]" alt="img not found" />
          </div>
        </section>
      </div>
        {/* screen extra  */}
   <div className="h-screen">
          <div className="flex w-[90%]">
            <div className="w-[100%]">
                <img src={img11} alt="img" />
            </div>
            <div>
              <h3 className="text-3xl">Fit focus palabras palabras</h3>
              <p className="font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quasi minima nobis voluptatibus ratione doloremque itaque, sint tenetur, sed libero non ducimus dolorem voluptatem consectetur modi est illo commodi nihil.
              </p>
            </div>
          </div>
        </div>
        {/* screen 4  */}
        <div className="flex justify-center w-full ">
        <div className="max-w-[60%] flex justify-center w-full space-x-1.5 ">
          <div className="font-bold text-center text-2xl border border-indigo-400 max-w-[50%] rounded-md ">
            <h1>Conviertete en Premium y obten un 20% de descuento</h1>
            <img src={img7} alt="img not found" />
          </div>
          <div className="font-bold text-center text-2xl border border-indigo-400 max-w-[50%] rounded-md">
            <h1>Nunca sabras de lo que eres capaz, sino comienzas!</h1>
            <img src={img8} alt="img not found" />
          </div>
        </div>
      </div>

      {/* screen 5 */}
      <div className="">
        <div className="w-11/12 mr-auto mt-32 border border-indigo-400 max-w-[80%] " >
          <section className="flex items-center">
            <div className="w-1/2">
              <img src={img6} alt="img not found" />
            </div>
            <div className="w-2/5 ml-auto">
              <div>
                <h2 className="text-3xl font-light">
                  ¿Que esperas?
                </h2>
                <div className="h-1 bg-gray-300 w-10 mt-2"></div>
              </div>
              <p className="text-sm text-gray-500 font-normal my-4 leading-loose">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
                mollitia enim aliquid debitis, dolor deserunt nihil in culpa vitae
                quibusdam qui earum cum! Similique eveniet at magnam laboriosam
                consequatur illo.
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




      
    
