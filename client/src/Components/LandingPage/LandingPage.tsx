import { Link  } from "react-router-dom";

import './styles/LandingPage.css';
import Typewriter from "react-ts-typewriter";
import HomeVisitor from "../HomeVisitor/HomeVisitor";
//import Home from "./Home";
const landingTrain = require("../assets/landing-media/landingTrain.mp4");


const LandingPage = () => {
  
  return (
    <div className="main">
      <div className="overlay"></div>

      <video src={landingTrain} width="100%" autoPlay loop muted />

      <div className="titleApp">
        <h1>FIT FOCUS</h1>
      </div>

      <div className="content">
        <div className="noPainDiv">
          <p>NO PAIN, NO GAIN!</p>
        </div>

        <div className="typewriterDiv">
          <Typewriter
            text="¿No tienes tiempo para ir al gimnasio? ¿No sabes cómo comenzar tu vida fit? FIT FOCUS® es ideal para ti, esta aplicación nace como una iniciativa deportiva para aquellos que desean mantener un cuerpo fuerte y saludable ya que la modificación de hábitos y estilos de vida conlleva grandes beneficios para la salud y todo esto lo puedes hacer desde la comodidad de tu casa.
            Además, vas a poder ver y crear tu estilo de entrenamiento adecuado a través de nuestra biblioteca de ejercicios y rutinas, ¡¡vamos a entrenar!!"
            speed={20}
          />
        </div>
      </div>
      <div className="buttonDiv">
        <Link to="/home">
          <button  className="landingButton">COMENCEMOS</button>
        </Link>
      </div>
    </div>
  );
};


export default LandingPage;

