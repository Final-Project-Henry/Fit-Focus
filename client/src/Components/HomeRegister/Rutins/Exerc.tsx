import React, { useLayoutEffect, useRef } from 'react';
import medio from '../imgs/30.png';
import cuarto from '../imgs/cuarto.png';
import uno from '../imgs/60.png';
import unoMedio from '../imgs/90.png';
import dos from '../imgs/120.png';
import images from './images';
import sr, { configLeft } from './scroll';

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

export default function Exerc(props: { exer: exercise, time: number, order: number }) {

    const left = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        sr.reveal(left.current, configLeft);
    }, [])
    return (
        <div style={{ display: "flex", width: "45vw", marginRight: "30vw", alignItems: "center", gap: "20px", boxShadow:"0 0 40px 5px #111827" }} ref={left}>
            <div style={{display:"flex"}}>
                <img src={(images as any)[props.order]} style={{ height: "20vh", width: "20vh" }}></img>
                <img src={props.exer.video} style={{ height: "20vh", width: "10vw" }}></img>
            </div>
            <img src={props.time == 120 ? dos : props.time == 90 ? unoMedio : props.time == 60 ? uno : props.time == 30 ? medio : cuarto} style={{ height: "10vh" }}></img>
            <h1 style={{ fontSize: "1.5rem", color: "#111827", fontWeight: "500" }}>{props.exer.name}</h1>
        </div>
    )
}
