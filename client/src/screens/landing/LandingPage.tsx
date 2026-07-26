import Typewriter from "react-ts-typewriter";
import { useToken } from "@/app/hooks";
import './styles/LandingPage.css';
import { useNavigate } from 'react-router-dom';
import landingTrain from '@/assets/legacy/landing-media/landingTrain.mp4';


const LandingPage = () => {
  let user = useToken();
  const navigate = useNavigate();

  const onClick =()=>{
    navigate(user?'./fitFocus':'/home')
  }
  return (
    <div className={"main"}>
      <div className={"overlay"}></div>
      <video src={landingTrain} height='100vh' autoPlay loop muted />
      <div className={"titleApp"}>
        <h1 className={"name"}>FIT FOCUS</h1>
      </div>
      <div className={"content"}>
        <div className={"noPainDiv"}>
          <p>NO PAIN, NO GAIN!</p>
        </div>

        <div className={"typewriterDiv"}>
          <Typewriter
            text="¿No tienes tiempo para ir al gimnasio? ¿No sabes cómo comenzar tu vida fit? FIT FOCUS® es ideal para ti, esta aplicación nace como una iniciativa deportiva para aquellos que desean mantener un cuerpo fuerte y saludable ya que la modificación de hábitos y estilos de vida conlleva grandes beneficios para la salud y todo esto lo puedes hacer desde la comodidad de tu casa.
            Además, vas a poder ver y crear tu estilo de entrenamiento adecuado a través de nuestra biblioteca de ejercicios y rutinas, ¡¡vamos a entrenar!!"
            speed={20}
          />
        </div>
        <div className={"buttonDiv"}>
          <button
          onClick={onClick} 
          className={"landingButton"}>COMENCEMOS</button>
        </div>

      </div>
    </div>
  );
};


export default LandingPage;

