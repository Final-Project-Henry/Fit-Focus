import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Visitor6.module.css';

export default function Visitor6() {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/mercadopago');
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.tittle}>¿Por que esperar?</h1>
            <div className={styles.container_2} >
                <div className={styles.container_3}>
                    <h1 className={styles.tittle_2}>Obten todo esto y más!!</h1>
                    <div className={styles.text}>
                        <p>Calculadora</p>
                        <p>Rutinas personalizadas</p>
                        <p>Ejercicios de estiramiento</p>
                    </div>
                    <button className={styles.btn} onClick={onClick}>HAZTE PREMIUM</button>
                </div>
                <p className={styles.img}> </p>
            </div>
        </div>
    )
}
