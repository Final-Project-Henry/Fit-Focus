import React, { useEffect, useState } from "react";
import "./styles/HomeVisitor.css";
import Carousel from "../HomeRegister/Carousel";
import Navbar from "../Navbar/Navbar";


const foto1 = require("../assets/Fotos y Videos HomeVisitor/6Q26YGICPFBULGVJ2YO3RZN2F4.jpg");
const foto2 = require("../assets/Fotos y Videos HomeVisitor/depositphotos_81858526-stock-photo-couple-doing-planking-exercises.jpg");
const foto3 = require("../assets/Fotos y Videos HomeVisitor/NikeNews_NTC_Jen_02_native_1600-640x360.jpg");
const banner = require("../assets/Fotos y Videos HomeVisitor/deporte-5-e1587429339116-800x416.jpg")

const video = require("../assets/Fotos y Videos HomeVisitor/pexels-tima-miroshnichenko-6388870.mp4")


export default function HomeVisitor() {
  const [data, setData] = useState<any[]>();
  const [promoRutina, setPromoRutina] = useState<any[]>();


  return (
    <div className="container">
      {/* <Navbar/> */}
      <div className="Carousel">       <Carousel></Carousel> 
</div>
       
     
        <div className="fotos">
          <img src={foto1} className="foto1" /> Correr puede tener numerosos beneficios sobre tu salud. Un estudio publicado por la Universidad de Brigham Young muestra que el beneficio de correr  5 días a la semana durante 30-40 minutos aumenta la longevidad a nivel celular. 
          <img src={foto2} className="foto1" /> Si de manera individual hacer ejercicio ya tiene grandes beneficios (reduce la ansiedad y el estrés, mejora la concentración, previene el deterioro cognitivo, etc), el hecho de realizarlo en familia los multiplica.
          <img src={foto3} className="foto1"/>La contracción y relajación de los músculos que realizamos al trabajar nuestros abdominales lleva consigo una mayor movilidad intestinal y una mejora del tránsito
        </div>
        <video src={video} autoPlay loop muted className="Video"/>

        

        <div className="FrasesMotivacionales">
          <h1 className="image"></h1>
        </div>

        { <img src={banner}/> }
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
      
  );
}
