import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../../../app/hooks';
import styles from './PlanPremium.module.css';

export default function Plan_premium(props: { url: string }) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/auth/sing-up');
  }
  const token = useToken();
  return (
    <div className={styles.container}>
      <div className={styles.tittle}>
        <h1>Plan de entrenamiento</h1>
        <h1>Premium</h1>
      </div>
      <br />
      <p className={styles.text}>Beneficios plan Normal</p>
      <p className={styles.text}>+</p>
      <p className={styles.text}>Rutinas personalizadas</p>
      <p className={styles.text}>Todos los ejercicios desbloqueados</p>
      <p className={styles.text}>Ejercicios de estiramiento</p>
      <br />
      <div className={styles.precio}><p className={styles.monto}>$3000.00</p><p className={styles.cuota}>/Pago unico</p></div>
      {token.length > 0
        ?
        <a className={styles.btn} href={props.url}>Obtener todos los Beneficios →</a>
        :
        <button className={styles.btn} onClick={onClick}>Registrate primero →</button>
      }
    </div>
  )
}
