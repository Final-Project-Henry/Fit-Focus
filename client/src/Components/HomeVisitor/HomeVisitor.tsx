import React, { useEffect, useState } from "react";
import "./styles/HomeVisitor.css";
import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/Navbar";
import img1 from "../assets/homeRegister-media/Img1.jpg";
import img2 from "../assets/homeRegister-media/Img2.jpg";
import img3 from "../assets/homeRegister-media/Img3.jpg";

import { Div_cards, Div_video,Div_card_skill } from "./styles/styled_componet_homeVisite";

const foto1 = require("../assets/Fotos y Videos HomeVisitor/6Q26YGICPFBULGVJ2YO3RZN2F4.jpg");
const foto2 = require("../assets/Fotos y Videos HomeVisitor/depositphotos_81858526-stock-photo-couple-doing-planking-exercises.jpg");
const foto3 = require("../assets/Fotos y Videos HomeVisitor/NikeNews_NTC_Jen_02_native_1600-640x360.jpg");
const skille = require("../assets//Fotos y Videos HomeVisitor/Anillos_de_porcentajes.png");

const video = require("../assets/Fotos y Videos HomeVisitor/pexels-tima-miroshnichenko-6388870.mp4");

export default function HomeVisitor() {
  const [data, setData] = useState<any[]>();
  const [promoRutina, setPromoRutina] = useState<any[]>();

  return (
    <div className="felx bg-slate-100">
      {/* <Navbar/> */}
      {/* Yo adrian he quitado de className la clase Carousel para que se vea, pero la pagina sirve asi que subire, ojo aqui */}
      <div className="">
        <Carousel
          content={[
            { src: img1, text: "hombre fuerte" },
            { src: img2, text: 'Hombre fuerte 2' },
            { src: img3, text: "Hombre Fuerte 3" }
          ]}
        />
      </div>


      <div className="fotos">
        <img src={foto1} className="foto1" /> Correr puede tener numerosos beneficios sobre tu salud. Un estudio publicado por la Universidad de Brigham Young muestra que el beneficio de correr  5 días a la semana durante 30-40 minutos aumenta la longevidad a nivel celular.
        <img src={foto2} className="foto1" /> Si de manera individual hacer ejercicio ya tiene grandes beneficios (reduce la ansiedad y el estrés, mejora la concentración, previene el deterioro cognitivo, etc), el hecho de realizarlo en familia los multiplica.
        <img src={foto3} className="foto1" />La contracción y relajación de los músculos que realizamos al trabajar nuestros abdominales lleva consigo una mayor movilidad intestinal y una mejora del tránsito
      </div>
      <video src={video} autoPlay loop muted className="Video" />



      <div className="FrasesMotivacionales">
        <h1 className="image"></h1>
      </div>

      {<img src={banner} />}
      <h1 className="image2"></h1>

      <div className="AboutUs">
        Somos un grupo de jóvenes y entusiastas programadores que desarrollamos aplicaciones web responsive. Nuestra meta es desarrollar la App mística que nos de ingresos pasivos de por vida para lograr así derrotar al sistema y no tener que hacer aportes para la jubilación.
      </div>

      <div>
        CHECK OUT YOUR SKILLS Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Illo, sit iusto optio explicabo, voluptates totam
        voluptas maiores ipsa tempora vero voluptatem dicta necessitatibus
        nisi itaque aut dolore odio laborum labore. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Illo, sit iusto optio explicabo,
        voluptates totam voluptas maiores ipsa tempora vero voluptatem dicta
        necessitatibus nisi itaque aut dolore odio laborum labore. Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Illo, sit iusto optio
        explicabo, voluptates totam voluptas maiores ipsa tempora vero
        voluptatem dicta necessitatibus nisi itaque aut dolore odio laborum
        labore
      </div>
      <h1>
        Al navegar en este sitio aceptas las cookies que utilizamos para
        mejorartu experiencia
      </h1>
      <footer className="Footer">PROYECTO FINAL SOY HENRY 2022</footer>
    </div>

      <Div_cards className="flex  ">
        <div id="card" className="   text-white bg-gray-900">
          <div id="img_card">
          <img src={foto1} className="foto1" />
          </div>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo id dicta magni, deleniti
          </p>
        </div>
        <div id="card" className=" text-white bg-gray-900">
          <div id="img_card">
          <img src={foto2} className="foto1" />
          </div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo id dicta magni, deleniti
          </p>
        </div>
        <div id="card" className=" text-white bg-gray-900">
          <div id="img_card">
            <img src={foto3} className="foto1" />
          </div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo id dicta magni, deleniti
          </p>
        </div>
      </Div_cards>
      <Div_video>
        <p className="text-white">
            EL ÚNICO LÍMITE ERES TÚ
        </p>
        <video id="video"  src={video} autoPlay loop muted  />
        {/* <div id="btm_video" className="w-1/4  bg-blue-700 absolute text-white text-center p-2 my-5">
          <button >Empieza a ENTRENAR</button>
        </div> */}
      </Div_video>
{/* 
      <div className="FrasesMotivacionales">
        <h1 className="image"></h1>
      </div> */}

      <Div_card_skill>
        <img src={skille}/>
      </Div_card_skill>
      <div className="flex justify-center">
        <p id="abut">Acerca de nosotros</p>
      </div>
      <div >
        <p className="p-5">
          Somos un grupo de jóvenes y entusiastas programadores que
          desarrollamos aplicaciones web responsive. Nuestra meta es desarrollar
          la App mística que nos de ingresos pasivos de por vida para lograr así
          derrotar al sistema y no tener que hacer aportes para la jubilación.
        </p>
      </div>


      <footer className="bg-black">
        <div className="text-white">
          <p >
             PROYECTO FINAL SOY HENRY 2022
          </p>
        </div>
      </footer>
    </div>
  );
}
