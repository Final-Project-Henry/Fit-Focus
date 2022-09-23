import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './PlanNormal.module.css';

export default function Plan_normal() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/auth/sing-up');
  }
  return (
    <div className={styles.container}>
      <div  className={styles.tittle}>
        <h1>Plan de entrenamiento</h1>
        <h1>Normal</h1>
      </div>
      <br />
      <p className={styles.text}>Calculadora</p>
      <p className={styles.text}>Ejercicios basicos para empezar</p>
      <br />
      <div className={styles.precio}>
        <p className={styles.monto}>$0.00</p><p className={styles.cuota}>/Gratis</p>
      </div>
      <button className={styles.btn} onClick={onClick}>Registrate primero →</button>
    </div>
  )
}
