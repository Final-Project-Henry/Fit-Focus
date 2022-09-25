import React from 'react';
import styles from './Dev.module.css';

interface dev {
    name: string,
    link: string,
    git: string,
    mail: string,
    avatar: any,
}

export default function Dev(props: { data: dev }) {
    return (
        <div className={styles.container}>
            <img src={props.data.avatar} width='100px' style={{borderRadius:'50%'}}></img>
            <div className={styles.container_2}>
                <p className={styles.name}>{props.data.name}</p>
                <div className={styles.social}>
                    <a className={styles.git} href={props.data.git} target='_blank'> </a>
                    <a className={styles.link} href={props.data.link} target='_blank'> </a>
                    <a className={styles.mail} href={props.data.mail} target='_blank'> </a>
                </div>
            </div>
        </div>
    )
}
