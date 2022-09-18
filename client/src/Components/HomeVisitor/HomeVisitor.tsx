import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import {
  Div_cards,
  Div_video,
  Div_card_skill,
} from "./styles/styled_componet_homeVisite";
import img1 from "../assets/homeRegister-media/Img1.jpg";
import img2 from "../assets/homeRegister-media/Img2.jpg";
import img3 from "../assets/homeRegister-media/Img3.jpg";
import Footer from "../footer/Footer";


const foto1 = require("../assets/Fotos y Videos HomeVisitor/6Q26YGICPFBULGVJ2YO3RZN2F4.jpg");
const foto2 = require("../assets/Fotos y Videos HomeVisitor/depositphotos_81858526-stock-photo-couple-doing-planking-exercises.jpg");
const foto3 = require("../assets/Fotos y Videos HomeVisitor/NikeNews_NTC_Jen_02_native_1600-640x360.jpg");
const skille = require("../assets//Fotos y Videos HomeVisitor/Anillos_de_porcentajes.png");

const video = require("../assets/Fotos y Videos HomeVisitor/pexels-tima-miroshnichenko-6388870.mp4");

export default function HomeVisitor() {
  const [data, setData] = useState<any[]>();

  const handleChange = ()=>{


  }




  return (
    <div className="felx bg-slate-50">
      {/* <Navbar/> */}
      {/* Yo adrian he quitado de className la clase Carousel para que se vea, pero la pagina sirve asi que subire, ojo aqui */}
      <div className="w-screen">
        <Carousel
          content={[
            { src: img1, text: "hombre fuerte" },
            { src: img2, text: "Hombre fuerte 2" },
            { src: img3, text: "Hombre Fuerte 3" },
          ]}
        />
      </div>
      <Div_cards className="flex  ">
        <div id="card" className="   text-white bg-gray-900">
          <div id="img_card">

      

            <img src={foto1} className="foto1" alt="foto" />
          </div>
          <p>
          correr sin moverse del sitio es muy efectivo para quemar calorías. 
          Ésto, es fácil de entender, ya que al estar realizando movimientos musculares 
          y al estar haciendo esfuerzo, vamos a necesitar energía para mover esos músculos.
          </p>
        </div>
        <div id="card" className=" text-white bg-gray-900">
          <div id="img_card">
            <img src={foto2} className="foto1" />
            
          </div>
          <p>
          La plancha es uno de esos ejercicios que no pasan de moda 
          y esto tiene una buena razón: cuando se trata de calificar entrenamientos, 
          ningún ejercicio es mejor que la plancha en términos de tiempo y eficacia,
          </p>
        </div>
        <div id="card" className=" text-white bg-gray-900">
          <div id="img_card">
            <img src={foto3} className="foto1" alt="foto" />
          </div>
          <p>
          hacer abdominales te permite fortalecer y activar la musculatura abdominal, 
          central, permitiendo la eliminación no sólo de centímetros de volumen, 
          sino también de gases y ayudando a que el tránsito intestinal fluya correctamente.
          </p>
        </div>
      </Div_cards>
      <Div_video>
        <p className="text-white">EL ÚNICO LÍMITE ERES TÚ</p>
        <video id="video" src={video} autoPlay loop muted />
        {/* <div id="btm_video" className="w-1/4  bg-blue-700 absolute text-white text-center p-2 my-5">
          <button >Empieza a ENTRENAR</button>
        </div> */}
      </Div_video>
      {/* 
      <div className="FrasesMotivacionales">
        <h1 className="image"></h1>
      </div> */}
      <Div_card_skill>
        <img src={skille} alt="skills" />
      </Div_card_skill>
      <div className="flex justify-center" id="about">
        <p id="abut">Acerca de nosotros</p>
      </div>
      <div>
        <p className="p-5">
          Somos un grupo de jóvenes y entusiastas programadores que
          desarrollamos aplicaciones web responsive. Nuestra meta es desarrollar
          la App mística que nos de ingresos pasivos de por vida para lograr así
          derrotar al sistema y no tener que hacer aportes para la jubilación.
        </p>
      </div>
     <Footer/>
    </div>
  );
}
