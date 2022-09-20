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
const img2 = require("../assets/Fotos y Videos HomeVisitor/imgSlide2.2.jpeg");
const img3 = require("../assets/Fotos y Videos HomeVisitor/imgSlide3.jpg");
const img4 = require("../assets/Fotos y Videos HomeVisitor/imgSlide4.jpeg");
const img5 = require("../assets/Fotos y Videos HomeVisitor/imgSlide5.jpeg");

export default function HomeVisitor() {
  const [data, setData] = useState<any[]>();

  const handleChange = () => {};

  return (
    <>
    {/* screen 1  */}
      <div className="h-screen">

      </div>
   {/* screen 2  */}

      <div className="h-screen">

      </div>
    {/* screen 3 */}
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
