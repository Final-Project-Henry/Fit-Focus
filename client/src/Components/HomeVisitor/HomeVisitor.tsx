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
import img6 = require("../assets/Fotos y Videos HomeVisitor/urban-913.png")
export default function HomeVisitor() {

  const [data, setData] = useState<string>();
  function words(){
    let words=["en casa", "comodo", "y satifecho"];
    setTimeout(() =>{
      
      setData(words[])
    },2000)
  }
  return (
    <>
    {/* screen 1  */}
      <div className="h-screen">
        <div>
          <div>
            <h1>lorem</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quas et saepe cum earum? Nesciunt est mollitia distinctio laborum nam eos expedita quae iusto minus, natus ea. Quod, iusto odio. </p>
            <p>Entrena <span>{}</span> </p>
          </div> 
          <div>
          
          </div> 
        </div>
         
      </div>
   {/* screen 2  rafa */ }
      <div className="h-screen">

      </div>
    {/* screen 3  */}
      <div className="h-screen">

      </div>
    {/* screen 4  */}
      <div className="h-screen">

      </div>
   {/* screen 5 */}
      <div className="h-screen">

      </div>
      <Footer />
    </>
  );
}
