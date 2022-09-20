import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import "./styles/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Div_cards,
  Div_video,
  Div_benefitsVisitor,
  Div_benefitsVisitor2,
  Div_about,
} from "./styles/styled_componet_homeVisite";
import Footer from "../footer/Footer";
import img1 from "../assets/Fotos y Videos HomeVisitor/home_img1.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const img6 = require("../assets/Fotos y Videos HomeVisitor/urban-913.png");

export default function HomeVisitor() {
  const [data, setData] = useState<string>();

  return (
    <>
      {/* screen 1  */}
      <div className="h-screen">
        <Div_cards>
          <div id="text-container">
            <h1>Fit focus</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quas et saepe cum earum? Nesciunt est mollitia distinctio laborum
              nam eos expedita quae iusto minus, natus ea. Quod, iusto odio.{" "}
            </p>
            <button> Empiza ya </button>
          </div>
          <div id="img-container">
            <img src={img1} alt="img" />
            <div id="card-opiniones" >
              <div id="img">
                <img src="" />
              </div>
              <div id="card-text-opiniones">
                <p>marcel</p>
                <p>"hermosa app"</p>
              </div>
            </div>
          </div>
          <div></div>
        </Div_cards>
      </div>
      {/* screen 2  rafa */}
      <div className="h-screen"></div>
      {/* screen 3  */}
      <div className="h-screen"></div>
      {/* screen 4  */}
      <div className="h-screen"></div>
      {/* screen 5 */}
      <div className="h-screen"></div>
      <Footer />
    </>
  );
}
