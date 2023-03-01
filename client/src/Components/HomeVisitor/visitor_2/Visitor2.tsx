import styles from './Visitor2.module.css'

export default function Visitor2() {
  return (
    <div className={styles.container}>
      <video
        className={styles.animation}
        src='https://res.cloudinary.com/dm0fwscsy/video/upload/v1677647247/Fit-Focus/videos/laptop_page_g8ee5i.mp4'
        autoPlay
        loop
        muted
      ></video>
      <div className={styles.container_2}>
        <h1 className={styles.tittle}>Esta aplicación:</h1>
        <div className={styles.text}>
          <p>
            Ofrece una gran variedad de ejercicios para realizarlos en casa, dependiendo la parte del cuerpo que se
            desee trabajar. Tambien nos brinda una calculadora para conocer el indice de masa corporal y asi tener un
            mayor conocimiento de nuestra salud.
          </p>
        </div>
      </div>
    </div>
  )
}
