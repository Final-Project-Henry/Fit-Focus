import { url } from "inspector";
import React, { useEffect, useState } from "react";
import "./HomeVisitor.css";
import exercises from "./EjerciciosProvisorio/ejercicios";

export default function HomeVisitor() {
  // const [data, setData] = useState<any[]>();
  // const [promoRutina, setPromoRutina] = useState<any[]>()


  return (
    <div>
      NavBar
      <div className="bannerTop">
        <h1 className="CarruselDePromos">Carrusel de Promos</h1>

        <button className="buttonBanner">SING IN</button>

        <div className="Publicidad">

        {exercises && exercises.slice(0,3).map((e) => <div className="Card">Name : {e.name}
         Difficulty: {e.difficulty}
         Equipment: {e.equipment}
         Muscles: {e.muscles}
         Genre": {e.genre}
         Video:  {e.video}

          </div>)}
        </div>
       
       
        <div className="Video">Video</div>

        <div>
          CHECK OUT YOUR SKILLS
          



          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, sit iusto optio explicabo, voluptates totam voluptas maiores ipsa tempora vero voluptatem dicta necessitatibus nisi itaque aut dolore odio laborum labore.    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, sit iusto optio explicabo, voluptates totam voluptas maiores ipsa tempora vero voluptatem dicta necessitatibus nisi itaque aut dolore odio laborum labore.    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, sit iusto optio explicabo, voluptates totam voluptas maiores ipsa tempora vero voluptatem dicta necessitatibus nisi itaque aut dolore odio laborum labore</div>


<div className="FrasesMotivacionales">
CARRUSEL DE FRASES MOTIVACIONALES

<h1 className="image" ></h1>
</div>   

<div className="bannerFinal">
<h1 className="image2" ></h1>

<div className="AboutUs">
  ABOUT US:   
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci quaerat deserunt aut repellat corrupti et itaque rem voluptatum, quis repellendus maiores fugit est iusto rerum beatae saepe veniam ducimus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci quaerat deserunt aut repellat corrupti et itaque rem voluptatum, quis repellendus maiores fugit est iusto rerum beatae saepe veniam ducimus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci quaerat deserunt aut repellat corrupti et itaque rem voluptatum, quis repellendus maiores fugit est iusto rerum beatae saepe veniam ducimus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci quaerat deserunt aut repellat corrupti et itaque rem voluptatum, quis repellendus maiores fugit est iusto rerum beatae saepe veniam ducimus.</div>


<h1>Al navegar en este sitio aceptas las cookies que utilizamos para mejorartu experiencia</h1>
<footer className="Footer">PROYECTO FINAL SOY HENRY 2022</footer>
</div>


</div>

    </div>
  );
}
