import { url } from "inspector";
import React, { useEffect, useState } from "react";
import "./HomeVisitor.css";

export default function HomeVisitor() {
  const [data, setData] = useState<any[]>();
  const [promoRutina, setPromoRutina] = useState<any[]>()


  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds?api_key=$%7BAPI_KEY%7").then(
      (res) => res.json().then(data => setData(data))
    );
  }, []);
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds?api_key=$%7BAPI_KEY%7").then(
      (res) => res.json().then(data => setPromoRutina(data))
    );
  }, []);




  console.log(data)

  return (
    <div>
      NavBar
      <div className="bannerTop">
        <h1 className="CarruselDePromos">Carrusel de Promos</h1>

        <button className="buttonBanner">SING IN</button>

        <div className="Publicidad">
          {data && data.slice(0,3).map((e) => <div className="Card">Name : {e.name}
          edad: {e.lifespan}
          </div>)}
        </div>
        <div className="PublicidadRutina">
          {data && data.slice(0,3).map((e) => <div className="Card">Name : {e.name}
          edad: {e.lifespan}
          </div>)}
        </div>
        <div className="VideoPicante">Video Picante</div>

        <div>
          CHECK OUT YOUR SKILLS
          



          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, sit iusto optio explicabo, voluptates totam voluptas maiores ipsa tempora vero voluptatem dicta necessitatibus nisi itaque aut dolore odio laborum labore.    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, sit iusto optio explicabo, voluptates totam voluptas maiores ipsa tempora vero voluptatem dicta necessitatibus nisi itaque aut dolore odio laborum labore.    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, sit iusto optio explicabo, voluptates totam voluptas maiores ipsa tempora vero voluptatem dicta necessitatibus nisi itaque aut dolore odio laborum labore</div>


<div className="FrasesMotivacionales">
CARRUSEL DE FRASES MOTIVACIONALES

<h1 className="image" ></h1>
</div>   

<div className="bannerFinal">
<h1 className="image2" ></h1>

<div className="AboutUs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci quaerat deserunt aut repellat corrupti et itaque rem voluptatum, quis repellendus maiores fugit est iusto rerum beatae saepe veniam ducimus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci quaerat deserunt aut repellat corrupti et itaque rem voluptatum, quis repellendus maiores fugit est iusto rerum beatae saepe veniam ducimus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci quaerat deserunt aut repellat corrupti et itaque rem voluptatum, quis repellendus maiores fugit est iusto rerum beatae saepe veniam ducimus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci quaerat deserunt aut repellat corrupti et itaque rem voluptatum, quis repellendus maiores fugit est iusto rerum beatae saepe veniam ducimus.</div>


</div>


</div>

    </div>
  );
}
