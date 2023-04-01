import Typewriter from 'react-ts-typewriter'
import styles from './styles/LandingPage.module.css'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/home')
  }
  return (
    <div className={styles.main}>
      <div className={styles.overlay}></div>
      <video
        src='https://res.cloudinary.com/dm0fwscsy/video/upload/v1677647332/Fit-Focus/videos/landingTrain_lgruzz.mp4'
        height='100vh'
        autoPlay
        loop
        muted
      />
      <div className={styles.titleApp}>
        <h1 className={styles.name}>FIT FOCUS</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.noPainDiv}>
          <p>NO PAIN, NO GAIN!</p>
        </div>

        <div className={styles.typewriterDiv}>
          <Typewriter
            text='¿No tienes tiempo para ir al gimnasio? ¿No sabes cómo comenzar tu vida fit? FIT FOCUS® es ideal para ti, esta aplicación nace como una iniciativa deportiva para aquellos que desean mantener un cuerpo fuerte y saludable ya que la modificación de hábitos y estilos de vida conlleva grandes beneficios para la salud y todo esto lo puedes hacer desde la comodidad de tu casa.
            Además, vas a poder ver y crear tu estilo de entrenamiento adecuado a través de nuestra biblioteca de ejercicios y rutinas, ¡¡vamos a entrenar!!'
            speed={20}
          />
        </div>
        <div className={styles.buttonDiv}>
          <button onClick={onClick} className={styles.landingButton}>
            COMENCEMOS
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
