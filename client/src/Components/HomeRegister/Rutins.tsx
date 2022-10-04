import React from 'react';
import RandomCards from './RandomCards';
import styles from './Rutins.module.css';

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
    order:number,
    time: number,
    exerc: exercise
}

export default function Rutins(props: { rutins: Array<rutin> }) {

    return (
        <div className={styles.container}>
            <div className={styles.container_2}>
                <p className={styles.tittle}>Rutinas Personalizadas</p>
            </div>
            <h1 className={styles.tittle_2}>Estos son los mejores ejercicios para tu condicion fisica</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center"}}>
                {
                    props.rutins?.map((e: rutin) => (
                        <RandomCards
                            _id={e.exerc?._id}
                            name={e?.exerc?.name}
                            difficulty={e?.exerc?.difficulty}
                            equipment={e?.exerc?.equipment}
                            muscles={e?.exerc?.muscles}
                            genre={e?.exerc?.genre}
                            video={e?.exerc?.video}
                            premium={e?.exerc?.premium}
                        />
                    ))
                }
            </div>
        </div>
    )
}
