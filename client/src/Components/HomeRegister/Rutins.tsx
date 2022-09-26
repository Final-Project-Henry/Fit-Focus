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

export default function Rutins(props: { rutins: Array<exercise> }) {

    return (
        <div className={styles.container}>
            <div className={styles.container_2}>
                <p className={styles.tittle}>Rutinas Personalizadas</p>
            </div>
            <h1 className={styles.tittle_2}>Estos son los mejores ejercicios para tu condicion fisica</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center"}}>
                {
                    props.rutins?.map((e: exercise) => (
                        <RandomCards
                            _id={e?._id}
                            name={e?.name}
                            difficulty={e?.difficulty}
                            equipment={e?.equipment}
                            muscles={e?.muscles}
                            genre={e?.genre}
                            video={e?.video}
                            premium={e?.premium}
                        />
                    ))
                }
            </div>
        </div>
    )
}
