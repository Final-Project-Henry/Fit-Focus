import React from 'react';
import tabla from '@/assets/legacy/homeRegister-media/tabla.png';
import './Result.css';
import functions from '@/additional_info/functions';

export default function Result(props: { function: { (): void }, IMC: number, peso: number, altura: number }) {
    let indice = props.IMC.toFixed(1);

    const data = functions.get_message_IMC(parseInt(indice));

    return (
        <div className={"container"}>
            <button className={"btn"} onClick={props.function}>Volver a calcular</button>
            <div style={{ display: "flex", gap: "5vw" }}>
                <div className={"text"}>
                    <p>Para la información que ingresó:</p>
                    <p><b>Estatura:</b> {props.altura} centimetros</p>
                    <p><b>Peso:</b> {props.peso} kilogramos</p>
                    <p>Su IMC es <b>{indice}</b>, lo que indica que su peso está en la categoría: <b>{data.nivel}</b> para adultos de su misma estatura.</p>
                </div>
                <img className={"img"} src={tabla} />
            </div>
            <div className={"end"}>
                <p className={"message"}>{data?.message}</p>
            </div>
        </div>
    )
}
