import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Visitor3.module.css';

export default function Visitor3() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.tittle}>¿Tienes mas de 20?</h1>
        <p className={styles.p}>Entonces esta app esta hecha a tu medida</p>
        <Link to={'/auth/sing-up'}>Empieza a cambiar tu vida ya!</Link>
      </div>
      <p className={styles.img}> </p>
    </div>
  )
}
