import React, { useEffect, useState } from 'react';
import images from './images';

export default function Temp(props:{
    change:(direct:string)=>void,
    time: number
}) {
    const tiempo = 120;
    const number = 1;
    const [cNumber, setNumber] = useState<number>(number)
    const [time, setTime] = useState<number>(props.time);
    const [run, setRun] = useState(false);

    const handleToggle =()=>{
        if(run)setRun(false);
        else setRun(true);
    }

    const onReset =()=>{
        setRun(false);
        setTime(tiempo);
    }

    const onChangeExer =(direc:string)=>{
        if(direc==="next"){
            setNumber(state=>state+1);
        }
        else{
            if(cNumber>1)setNumber(state=>state-1);
        }
    }
    useEffect(() => {
        let interval:any;
        if(run){
            interval= setInterval(()=>{
                setTime(state=>state-1)
            }, 1000)
        }
        if(!run){
            clearInterval(interval);
        }
    
    return ()=>clearInterval(interval);
    
    },[run])
    

    return (
        <div style={{ border: "1px solid red", width: "35vw", height: "50vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
            <h1 style={{ fontSize: "2rem" }}>Ejercicio N</h1>
            <img src={(images as any)[props.time]} style={{ width: "5vw" }}></img>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                <button onClick={()=>props.change('prev')} style={{ backgroundColor: "#111827", color: "white", padding: "10px" }}>Anterior {`<<`}</button>
                <h1 style={{ border: "2px solid #111827", padding: "10px", fontSize: "2rem" }}>{time} segs</h1>
                <button onClick={()=>props.change('next')} style={{ backgroundColor: "#111827", color: "white", padding: "10px" }}>Siguiente {`>>`}</button>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                <button onClick={handleToggle} style={{ backgroundColor: "#111827", color: "white", width:"10vw" }}>{run ? "Pausa" : time==tiempo?"Start":"Reanudar"}</button>
                <button onClick={onReset} style={{ backgroundColor: "#111827", color: "white", width:"10vw" }}>Reset</button>
                <button style={{ backgroundColor: "#111827", color: "white", width:"10vw" }}>Terminar</button>
            </div>
        </div>
    )
}
