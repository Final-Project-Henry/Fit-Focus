import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector, useSesion, useToken } from '../../app/hooks';
import { get_payment, verify_payment } from '../../features/mercadopago/mercadopago';
import Navbar from '../Navbar/Navbar';
import styles from './MercadoPago.module.css';
import Plan_normal from './Plans/Plan_normal';
import Plan_premium from './Plans/Plan_premium';

export default function MercadoPago() {
    const id = useParams().payment_id;
    const token = useToken();
    const mercadoData = useAppSelector(state => state.mercadopago);
    const dispatch = useAppDispatch();
    const [pay, setPay] = useState(false);
    const url = `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${mercadoData.id}`

    useEffect(() => {
        if (token.length > 0 && mercadoData.id === '') {
            console.log(token);
            dispatch(get_payment({ token: token, id: null }));
        }
        if (mercadoData.id !== '') {
            setPay(true);
        }
    }, [token, mercadoData])
    return (
        <Fragment>
        <Navbar/>
        <div className={styles.container}>
            <div className={styles.tittle}>
                <h1 style={{color:'#111827'}}>Tu trayectoria con Fit Focus</h1>
                <h1 style={{color:'#111827'}}>comienza ahora</h1>
            </div>
            <div className={styles.planes}>
                <div>{token.length === 0 && <Plan_normal />}</div>
                <div><Plan_premium url={url} pay={pay} /></div>
            </div>
        </div>
        </Fragment>
    )
}