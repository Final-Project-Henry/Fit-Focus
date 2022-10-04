import React, { useLayoutEffect, useRef } from 'react';
import images from './images';
import medio from '../imgs/30.png';
import cuarto from '../imgs/cuarto.png';
import sr, { configRight} from './scroll';

export default function Rest(props: { time: number }) {

    const right = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        sr.reveal(right.current, configRight);
      },[])
    return (
        <div style={{ display: "flex", justifyContent: "flex-end", width: "45vw", marginLeft: "30vw", alignItems: "center", gap: "20px",  boxShadow:"0 0 40px 5px #111827"  }} ref={right}>
            <h1 style={{ fontSize: "1.5rem", marginLeft: "5vw", color:"#111827",fontWeight:"500" }}>DESCANSO</h1>
            <img src={props.time == 30 ? medio : cuarto} style={{ height: "10vh" }}></img>
            <img src={images.z} style={{ height: "20vh", width: "20vh" }}></img>
        </div>
    )
}
