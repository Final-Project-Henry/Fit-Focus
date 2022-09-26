import React from 'react';
import Calculadora2 from './calculadora/Calculadora2';
import baner from '../assets/homeRegister-media/calculadora_baner.png';
import styles from "./styles/calculadora.module.css";


function Calculadora() {

  return (
    <div className={styles.container}>
      <div className={styles.container_2}>
        <p className={styles.tittle}>Calculadora</p>
      </div>
      <h1 className={styles.tittle_2}>Te ayudamos a saber cual es tu indice de Masa Corporal</h1>
      <div>
        <p>Esta calculadora proporciona el IMC y la correspondiente</p>
        <p>categoría de nivel de peso según el IMC. Utilícela para adultos</p>
        <p>de 20 años o más</p>
      </div>
      <Calculadora2 />
    </div>
  );
}

export default Calculadora;

