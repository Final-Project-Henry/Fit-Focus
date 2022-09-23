import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import functions from '../../../additional_info/functions';
import datos from '../../../additional_info/comments';
import Comment from '../comments/Comment';
import styles from './Visitor_1.module.css';

interface data {
    [key: string]: {
        avatar: any,
        name: string,
        comment: string
    }
}

export default function Visitor1() {
    const navigate = useNavigate();

    const initialValue = functions.random(datos);
    const [comments, setComments] = useState(initialValue);

    const onClick = () => {
        navigate('/auth/sing-up')
    }


    useEffect(() => {
        let interval = setInterval(() => {
            setComments(functions.random(datos));
        }, 5000);
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className={styles.container} >
            <div className={styles.container_2}>
                <h1 className={styles.tittle}>FIT FOCUS</h1>
                <div className={styles.text}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p>¿No sabes como empezar a cambiar</p>
                        <p>tu vida y mejorar tu salud?</p>
                    </div>
                    <p className={styles.text_1}>No tienes que preocuparte, nosotros te ayudamos a lograrlo</p>
                    <button className={styles.btn} onClick={onClick}>HAZ CLICK AQUI</button>
                </div>
            </div>
            <div className={styles.container_3}>
                <p className={styles.tittle_2}>Lo que opinan algunos miembros:</p>
                <div className={styles.comments}>
                    {comments.map((comment: string, index: number) => (
                        <Comment data={(datos as data)[comment]} />
                    ))}
                </div>
            </div>
        </div>
    )
}
