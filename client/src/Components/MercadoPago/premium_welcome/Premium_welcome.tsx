import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Premium_welcome.module.css';

export default function Premium_welcome() {
    const navigate = useNavigate();

    const onClick=()=>{
        navigate('/fitFocus');
    }
  return (
    <div className={styles.container}>
        <h1 className={styles.tittle} >Felicidades por hacerte Premium!</h1>
        <div className={styles.text}>
            <p>Ahora podras disfrutar de todos los beneficios sin restricciones.</p>
            <p>Cambia tu estilo de vida y mejora tu salud ya!</p>
            <button onClick={onClick} className={styles.btn}>COMENZAR AHORA</button>
        </div>
    </div>
  )
}
