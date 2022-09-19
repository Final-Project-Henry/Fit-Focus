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

const foto1 = require("../assets/Fotos y Videos HomeVisitor/6Q26YGICPFBULGVJ2YO3RZN2F4.jpg");
const foto2 = require("../assets/Fotos y Videos HomeVisitor/depositphotos_81858526-stock-photo-couple-doing-planking-exercises.jpg");
const foto3 = require("../assets/Fotos y Videos HomeVisitor/NikeNews_NTC_Jen_02_native_1600-640x360.jpg");
const skille = require("../assets//Fotos y Videos HomeVisitor/Anillos_de_porcentajes.png");
const video = require("../assets/Fotos y Videos HomeVisitor/pexels-tima-miroshnichenko-6388870.mp4");
const brain = require("../assets/Fotos y Videos HomeVisitor/brain.png");
const heart = require("../assets/Fotos y Videos HomeVisitor/heart.png");
const lungs = require("../assets/Fotos y Videos HomeVisitor/lungs.png");
const sleep = require("../assets/Fotos y Videos HomeVisitor/sueño.png");
const strong = require("../assets/Fotos y Videos HomeVisitor/fuerza.png");

const adrian = require("../assets/Fotos y Videos HomeVisitor/adrian.png");
const caterina = require("../assets//Fotos y Videos HomeVisitor/caterina.png");
const david = require("../assets/Fotos y Videos HomeVisitor/david.png");
const ivan = require("../assets/Fotos y Videos HomeVisitor/ivan.png");
const lautaro = require("../assets/Fotos y Videos HomeVisitor/marcel.png");
const martin = require("../assets/Fotos y Videos HomeVisitor/martin.png");
const rafael = require("../assets/Fotos y Videos HomeVisitor/rafael.png");
const rodrigo = require("../assets/Fotos y Videos HomeVisitor/rodrigo.png");

const email = require("../assets/Fotos y Videos HomeVisitor/email.png");
const github = require("../assets/Fotos y Videos HomeVisitor/github.png");
const linkedIn = require("../assets/Fotos y Videos HomeVisitor/linkedIn.png");

export default function HomeVisitor() {
  const [data, setData] = useState<any[]>();

  const handleChange = () => {};

  return (
    <>
    <div className="felx bg-slate-50">
      {/* <Navbar/> */}
      {/* Yo adrian he quitado de className la clase Carousel para que se vea, pero la pagina sirve asi que subire, ojo aqui */}
      <div className="w-screen">
        <Carousel
          content={[
            { src: img2, },
            { src: img3,},
            { src: img4 },
            { src: img5 },
          ]}
        />
      </div>
        <Div_cards className="flex  ">
          <div
            id="card"
            className=" rounded-xl overflow-hidden  text-white bg-gray-900"
          >
            <div id="img_card">
              <img src={foto1} className="foto1" alt="foto" />
            </div>
            <p>
              La combinación de ejercicio y comida saludable puede ayudarte a
              incrementar tu nivel de energía y a sentirte más alerta y
              conciente, tanto mental como físicamente.
            </p>
          </div>

          <div
            id="card"
            className="rounded-xl overflow-hidden text-white bg-gray-900"
          >
            <div id="img_card">
              <img src={foto2} className="foto1" />
            </div>
            <p>
              El ejercicio estimula los químicos del cerebro que ayudan a
              generar sentimientos de felicidad, satisfacción y relajación, por
              lo que te sentirás mejor si haces ejercicio regularmente.
            </p>
          </div>

          <div
            id="card"
            className="rounded-xl overflow-hidden overflow-hidden text-white bg-gray-900"
          >

            <div id="img_card">
              <img src={foto3} className="foto1" alt="foto" />
            </div>
            <p>
              El ejercicio y la dieta saludable pueden ayudarte a tener una vida
              más variada e interesante. Busca formas creativas de mantenerte
              activo físicamente en tu vida diaria, y no hagas siempre la misma
              rutina de ejercicio.
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
        <Div_benefitsVisitor>
          <p className="benefitsVisitor">Beneficios del ejercicio</p>
        </Div_benefitsVisitor>

        <Div_benefitsVisitor2>
          <p className="benefitsVisitor2">
            Por norma general y en todas las edades, las comodidades en las que
            vivimos hacen que veamos al ejercicio físico como algo "duro" e
            introducirlo de una forma regular en nuestra vida cotidiana no
            siempre resulta fácil debido a múltiples factores... Es por ello que
            hemos decidido crear dicha aplicación para mostrarte algunos de los
            beneficios y asi comiences a ejercitarte dónde quieras y cuando
            quieras. Solo debes dirigirte a la parte superior derecha de la
            pagina en el boton de <b>Registrarse</b> y comienza con tus
            entrenamientos básicos.
          </p>
        </Div_benefitsVisitor2>

        <Div_cards className="flex  ">
          <div
            id="card"
            className=" rounded-xl overflow-hidden  text-white bg-gray-900"
          >
            <div id="img_card">
              <img src={brain} className="brainImg" alt="foto" />
            </div>
            <p>Menor degeneración neuronal.</p>
          </div>
          <div
            id="card"
            className="rounded-xl overflow-hidden text-white bg-gray-900"
          >
            <div id="img_card">
              <img src={heart} className="foto1" />
            </div>
            <p>Mejora los factores de riesgo cardiovascular.</p>
          </div>
          <div
            id="card"
            className="rounded-xl overflow-hidden text-white bg-gray-900"
          >
            <div id="img_card">
              <img src={lungs} className="foto1" alt="foto" />
            </div>
            <p>Aumenta la capacidad de oxígeno pulmonar.</p>
          </div>
          <div
            id="card"
            className="rounded-xl overflow-hidden text-white bg-gray-900"
          >
            <div id="img_card">
              <img src={sleep} className="foto1" alt="foto" />
            </div>
            <p>Previene apnea del sueño.</p>
          </div>
          <div
            id="card"
            className="rounded-xl overflow-hidden text-white bg-gray-900"
          >
            <div id="img_card">
              <img src={strong} className="foto1" alt="foto" />
            </div>
            <p>
              Mejora la densidad ósea y disminuye el riesgo de osteoporosis.
            </p>
          </div>
        </Div_cards>
        {/* ABOUT US */}

        <Div_about className="flex border-b-4 bg-zinc-400 mt-8" id="about">
          <div id="text-about">
            <div className="flex " id="titel-about">
              <p id="abut">Acerca de nosotros</p>
            </div>
            <div id="text-description-about">
              <p className="p-5 text-2xl">
                Somos un grupo de jóvenes y entusiastas programadores que
                desarrollamos aplicaciones web responsive. Nuestra meta en estos
                momentos es desarrollar una aplicacion con fines saludables para
                ayudar al publico que no tiene tiempo de ir al gimnasio o
                simplemente le guste ejercitarse en la comodidad de su casa.
              </p>
            </div>
          </div>
          <div id="avatars-about" className=" text-white bg-gray-900">
            <div id="card">
              <div id="img_card">
                <img src={caterina} className="brainImg" alt="img not found" />
                <div id="item-card">
                  <p>Caterina Aracil</p>
                  <div id="item-a">
                    <a href="https://github.com/catearacil" target="__blank">
                      <img
                        src={github}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/caterina-aracil-42256722b/"
                      target="__blank"
                    >
                      <img
                        src={linkedIn}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>

                    <a href="mailto:caterinaaracil@gmail.com" target="__blank">
                      <img
                        src={email}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="card">
              <div id="img_card">
                <img src={martin} className="foto1" alt="img not found" />
                <div id="item-card">
                  <p className="">Martín Angúlo</p>
                  <div id="item-a">
                    <a href="https://github.com/MartinAngulo" target="__blank">
                      <img
                        src={github}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/martinangulo1194/"
                      target="___blank"
                    >
                      <img
                        src={linkedIn}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>

                    <a
                      href="mailto:martinangulo1194@gmail.com"
                      target="__blank"
                    >
                      <img
                        src={email}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="card">
              <div id="img_card">
                <img src={ivan} className="foto1" alt="img not found" />
                <div id="item-card">
                  <p className="">Sergio Garcia</p>
                  <div id="item-a">
                    <a href="https://github.com/x1vaan" target="__blank">
                      <img
                        src={github}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/sergio-ivan-garcia/"
                      target="__blank"
                    >
                      <img
                        src={linkedIn}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/rafaelgbetancourto/"
                      target="__blank"
                    >
                      <img
                        src={email}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="card">
              <div id="img_card">
                <img src={adrian} className="foto1" alt="img not found" />
                <div id="item-card">
                  <p className="">Adrian Acurero</p>
                  <div id="item-a">
                    <a href="https://github.com/Adr-AA" target="__blank">
                      <img
                        src={github}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/adrian-acurero/"
                      target="__blank"
                    >
                      <img
                        src={linkedIn}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/rafaelgbetancourto/"
                      target="__blank"
                    >
                      <img
                        src={email}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div id="card">
              <div id="img_card">
                <img src={lautaro} className="brainImg" alt="img not found" />

                <div id="item-card">
                  <p className="">Lautaro Franco</p>
                  <div id="item-a">
                    <a href="https://github.com/LautaroFranc" target="__blank">
                      <img
                        src={github}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/lautaro-franco-a1358722b/"
                      target="__blank"
                    >
                      <img
                        src={linkedIn}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>

                    <a href="mailto:Hola12lf@gmail.com" target="__blank">
                      <img
                        src={email}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="card">
              <div id="img_card">
                <img src={rodrigo} className="foto1" alt="img not found" />
                <div id="item-card">
                  <p className="">Rodrigo Santesteban</p>
                  <div id="item-a">
                    <a href="https://github.com/rodrisantes" target="__blank">
                      <img
                        src={github}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/rodrigo-santesteban-7334b5240/"
                      target="__blank"
                    >
                      <img
                        src={linkedIn}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/rafaelgbetancourto/"
                      target="__blank"
                    >
                      <img
                        src={email}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Rafa */}
            <div id="card">
              <div id="img_card">
                <img src={david} className="foto1" alt="img not found" />
                <div id="item-card">
                  <p className="">David Cicconi</p>
                  <div id="item-a">
                    <a
                      href="https://github.com/davidcicconi94"
                      target="__blank"
                    >
                      <img
                        src={github}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/david-cicconi-dev/"
                      target="__blank"
                    >
                      <img
                        src={linkedIn}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>

                    <a href="mailto:david.cicconi94@gmail.com" target="__blank">
                      <img
                        src={email}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="card">
              <div id="img_card">
                <img src={rafael} className="foto1" alt="img not found" />
                <div id="item-card">
                  <p className="">Rafael Betancourt</p>
                  <div id="item-a">
                    <a
                      href="https://github.com/RafaelBetancourt"
                      target="__blank"
                    >
                      <img
                        src={github}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/rafaelgbetancourto/"
                      target="__blank"
                    >
                      <img
                        src={linkedIn}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>

                    <a href="mailto:rafael18282@gmail.com">
                      <img
                        src={email}
                        className="inline my-2"
                        alt="img not found"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Div_about>
      </div>
      <Footer />
    </>
  );
}
