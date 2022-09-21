import { Div_about } from "./styles/styled_componet_homeVisite";


import adrian from "../assets/Fotos y Videos HomeVisitor/adrian.png";
import caterina from "../assets//Fotos y Videos HomeVisitor/caterina.png";
const david = require("../assets/Fotos y Videos HomeVisitor/david.png");
const ivan = require("../assets/Fotos y Videos HomeVisitor/ivan.png");
const lautaro = require("../assets/Fotos y Videos HomeVisitor/marcel.png");
const martin = require("../assets/Fotos y Videos HomeVisitor/martin.png");
const rafael = require("../assets/Fotos y Videos HomeVisitor/rafael.png");
const rodrigo = require("../assets/Fotos y Videos HomeVisitor/rodrigo.png");

const email = require("../assets/Fotos y Videos HomeVisitor/email.png");
const github = require("../assets/Fotos y Videos HomeVisitor/github.png");
const linkedIn = require("../assets/Fotos y Videos HomeVisitor/linkedIn.png");


export default function About(){
  return(
    <div className="w-full m-auto h-screen  px-[100px]">
    
      <div className="text-4xl py-[100px] font-dark">
        <p className="text-center" id="abut">Conose a nuestros equipo</p>
      </div>
    
    <div  className=" mx-[40px] px-[100px] w-[100%]">
      <div className=" flex flex-wrap justify-center">
      <div className="w-[20%] mx-[5px]">
        <div>
          <img src={caterina} className="w-[50%]" alt="img not found" />
            <div className="bg-[#6c63ff] rounded-xl relative left-[10px]">
              <a href="https://github.com/catearacil" target="__blank">
                <img
                  src={github}
                  className="inline w-[20%] mx-1"
                  alt="img not found"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/caterina-aracil-42256722b/"
                target="__blank"
              >
                <img
                  src={linkedIn}
                  className="inline  w-[20%] mx-1"
                  alt="img not found"
                />
              </a>

              <a href="mailto:caterinaaracil@gmail.com" target="__blank">
                <img
                  src={email}
                  className="inline  w-[20%] mx-1"
                  alt="img not found"
                />
              </a>
            </div>
        </div>
      </div>
      <div className="w-[20%]">
        <div>
          <img src={martin} className="w-[50%]" alt="img not found" />
        
          <div className="bg-[#6c63ff] rounded-xl">
              <a href="https://github.com/MartinAngulo" target="__blank">
                <img
                  src={github}
                  className="inline w-[20%] mx-1"
                  alt="img not found"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/martinangulo1194/"
                target="___blank"
              >
                <img
                  src={linkedIn}
                  className="inline w-[20%] mx-1"
                  alt="img not found"
                />
              </a>

              <a
                href="mailto:martinangulo1194@gmail.com"
                target="__blank"
              >
                <img
                  src={email}
                  className="inline w-[20%] mx-1"
                  alt="img not found"
                />
              </a>
            </div>
        </div>
      </div>
      <div className="w-[20%]">
        <div>
          <img src={ivan} className="w-[50%]" alt="img not found" />
          <div>
  
            <div >
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
      <div className="w-[20%]">
        <div>
          <img src={adrian} className="w-[50%]" alt="img not found" />
          <div>
            <div>
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

      <div className="w-[20%]">
        <div>
          <img src={lautaro} className="w-[50%]" alt="img not found" />
          <div>
        
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
      <div className="w-[20%]">
        <div>
          <img src={rodrigo} className="w-[50%]" alt="img not found" />
          <div >

            <div >
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
      <div className="w-[20%]">
        <div>
          <img src={david} className="w-[50%]" alt="img not found" />
          <div>
            <div >
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
      <div className="w-[20%]">
        <div>
          <img src={rafael} className="w-[50%]" alt="img not found" />
          <div>
            <div>
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
    </div>
  </div>
  )
}
