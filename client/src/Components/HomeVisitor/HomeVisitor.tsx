import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import {
  Div_cards,
  Div_video,
  Div_benefitsVisitor,
  Div_benefitsVisitor2,
  Div_about,
} from "./styles/styled_componet_homeVisite";
import Footer from "../footer/Footer";
import img7 from "../assets/Fotos y Videos HomeVisitor/discount.svg";
import img8 from "../assets/Fotos y Videos HomeVisitor/personaltrainer.svg";

const img6 = require("../assets/Fotos y Videos HomeVisitor/urban-913.png");


// const img7 = require("../assets/Fotos y Videos HomeVisitor/discount.png");
// const img8 = require("../assets/Fotos y Videos HomeVisitor/personaltrainer.png");

export default function HomeVisitor() {

  const [data, setData] = useState<string>();
  // function words(){
  //   let words=["en casa", "comodo", "y satifecho"];
  //   setTimeout(() =>{

  //     setData(words[])
  //   },2000)
  // }
  return (
    <>
      {/* screen 1  */}
      <div className="h-screen">
        <div>
          <div>
            <h1>lorem</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quas et saepe cum earum? Nesciunt est mollitia distinctio laborum nam eos expedita quae iusto minus, natus ea. Quod, iusto odio. </p>
            <p>Entrena <span>{ }</span> </p>
          </div>
          <div>

          </div>
        </div>

      </div>
      {/* screen 2  rafa */}
      <div className="h-screen">

      </div>
      {/* screen 3  */}
      <div className="h-screen">

      </div>
      {/* screen 4  */}
      <div className="flex justify-center w-full ">
        <div className="max-w-[60%] flex justify-center w-full space-x-1.5 ">
          <div className="font-bold text-center text-2xl border border-indigo-400 max-w-[50%] rounded-md ">
          <h1>Conviertete en Premium y obten un 20% de descuento</h1>
          <img src={img7} />
          </div>
          <div className="font-bold text-center text-2xl border border-indigo-400 max-w-[50%] rounded-md">
          <h1>Nunca sabras de lo que eres capaz, sino comienzas!</h1>
          <img src={img8} />
          </div>
        </div>
      </div>
      {/* screen 5 */}

      <div className="flex justify-center w-full ">
        <div className="font-bold text-center text-2xl border border-indigo-400 max-w-[50%] rounded-md ">
          <h1 className="text-3xl">
            ¿QUE ESPERAS?
            <br />
            ¡¡Unete a FIT FOCUS ahora mismo y comienza a entrenar!!
          </h1>
          <br />
          <Link to="/auth/sing-up">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">REGISTRARSE</button>
          </Link>
          <img src={img6} />
        </div>
      </div>
      <Footer />
    </>
  );
}
