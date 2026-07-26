import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Visitor6.css';

export default function Visitor6() {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/mercadopago');
    }
    return (
        <div className={"container"}>
            <h1 className={"tittle"}>¿Por que esperar?</h1>
            <div className={"container_2"} >
                <div className={"container_3"}>
                    <h1 className={"tittle_2"}>Obten todo esto y más!!</h1>
                    <div className={"text"}>
                        <p>Calculadora</p>
                        <p>Rutinas personalizadas</p>
                        <p>Ejercicios de estiramiento</p>
                    </div>
                    <button className={"btn"} onClick={onClick}>HAZTE PREMIUM</button>
                </div>
                <p className={"img"}> </p>
            </div>
        </div>
    )
}
