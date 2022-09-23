import React from 'react';
import styles from './Visitor2.module.css';

export default function Visitor2() {
  return (
    <div className={styles.container}>
        <p className={styles.animation}> </p>
      <div className={styles.container_2}>
        <h1 className={styles.tittle}>Esta app:</h1>
        <div className={styles.text}>
          <p>Ofrece una gran variedad de ejercicios</p>
          <p>para realizarlos en casa, dependiendo</p>
          <p>la parte del cuerpo que se desee trabajar.</p>
          <p>Tambien nos brinda una calculadora</p>
          <p>para conocer el indice de masa corporal</p>
          <p>y asi tener un mayor conocimiento de</p>
          <p>nuestra salud.</p>
        </div>
      </div>
    </div>
  )
}
