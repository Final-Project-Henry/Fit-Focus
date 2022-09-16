import React, { useEffect, useState } from "react";
import "./styles/HomeVisitor.css";

const foto1 = require("../assets/Fotos y Videos HomeVisitor/6Q26YGICPFBULGVJ2YO3RZN2F4.jpg");
const foto2 = require("../assets/Fotos y Videos HomeVisitor/depositphotos_81858526-stock-photo-couple-doing-planking-exercises.jpg");
const foto3 = require("../assets/Fotos y Videos HomeVisitor/NikeNews_NTC_Jen_02_native_1600-640x360.jpg");
const banner = require("../assets/Fotos y Videos HomeVisitor/deporte-5-e1587429339116-800x416.jpg");

const video = require("../assets/Fotos y Videos HomeVisitor/pexels-tima-miroshnichenko-6388870.mp4");

export default function HomeVisitor() {
  const [data, setData] = useState<any[]>();
  const [promoRutina, setPromoRutina] = useState<any[]>();

  console.log(data);

  return (
    <div className="container">
      <div className="bannerTop"></div>

      <div className="fotos">
        <img src={foto1} className="foto1" />
        <img src={foto2} className="foto1" />
        <img src={foto3} className="foto1" />
      </div>
      <video src={video} autoPlay loop muted className="Video" />

      <div className="FrasesMotivacionales">
        <h1 className="image"></h1>
      </div>

      {<img src={banner} />}
      <h1 className="image2"></h1>

      <div className="AboutUs" id="about">
        ABOUT US: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Libero adipisci quaerat deserunt aut repellat corrupti et itaque rem
        voluptatum, quis repellendus maiores fugit est iusto rerum beatae saepe
        veniam ducimus.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Libero adipisci quaerat deserunt aut repellat corrupti et itaque rem
        voluptatum, quis repellendus maiores fugit est iusto rerum beatae saepe
        veniam ducimus.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Libero adipisci quaerat deserunt aut repellat corrupti et itaque rem
        voluptatum, quis repellendus maiores fugit est iusto rerum beatae saepe
        veniam ducimus.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Libero adipisci quaerat deserunt aut repellat corrupti et itaque rem
        voluptatum, quis repellendus maiores fugit est iusto rerum beatae saepe
        veniam ducimus.
      </div>

      <div id="skills">
        CHECK OUT YOUR SKILLS Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Illo, sit iusto optio explicabo, voluptates totam
        voluptas maiores ipsa tempora vero voluptatem dicta necessitatibus nisi
        itaque aut dolore odio laborum labore. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Illo, sit iusto optio explicabo,
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
