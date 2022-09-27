import React from 'react';
import styles from './Visitor2.module.css';
const laptop = require('../../assets/Fotos y Videos HomeVisitor/laptop page.mp4');

export default function Visitor2() {
  return (
    <div className={styles.container}>
      <video className={styles.animation} src={laptop} autoPlay loop muted></video>
      <div className={styles.container_2}>
        <h1 className={styles.tittle}>Esta aplicación:</h1>
        <div className={styles.text}>

          <p>
            Ofrece una gran variedad de ejercicios
            para realizarlos en casa, dependiendo
            la parte del cuerpo que se desee trabajar.
            Tambien nos brinda una calculadora
            para conocer el indice de masa corporal
            y asi tener un mayor conocimiento de
            nuestra salud.
          </p>
        </div>
      </div>
    </div>
  )
}
