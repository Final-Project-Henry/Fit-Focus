import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RandomCards from './RandomCards';
import styles from './Rutins.module.css';
import Exerc from './Rutins/Exerc';
import Rest from './Rutins/Rest';
import { v4 as uuidv4 } from "uuid"

interface exercise {
    _id: string;
    name: string;
    difficulty: string;
    equipment: true;
    muscles: string;
    genre: string;
    video: string;
    premium: string;
}

interface rutin {
    order: number,
    time: number,
    exerc: exercise
}

export default function Rutins(props: { rutins: Array<rutin>, reps:string, dif:string }) {

    let id:number = 0;

    const navigate = useNavigate();
    const onClick = () => {
        navigate('/training');
    }

    return (
        <div className={styles.container}>
            <div className={styles.container_2}>
                <p className={styles.tittle}>Rutinas Personalizadas</p>
            </div>
            <h1 className={styles.tittle_2}>Esta la rutina que se adapta a tu condicion fisica</h1>
            <button onClick={onClick} style={{ color: "white", backgroundColor: "#111827", width: "40vw", height: "8vh", fontWeight: "500", fontSize: "1.5rem", display: "block", alignSelf: "center" }}>Empezar entrenamiento</button>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5vh" }}>
                <h1 className={styles.tittle_2}>Resumen</h1>
                <div style={{display:"flex", gap:"10vw"}}>
                    <label>Tiempo estimado: <b>{props.reps==="long"?"25 min APROX.":"21 min APROX."}</b></label>
                    <label>Dificultad: <b>{props.dif?.toUpperCase()}</b></label>
                </div>
                {
                    props.rutins?.map((e: rutin) => {

                        if (e.order) {
                            return (
                                <Exerc key={e.exerc._id} exer={e?.exerc} time={e.time} order={e.order} />
                            )
                        } else {
                            return (
                                <Rest key={++id} time={e.time} />
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
