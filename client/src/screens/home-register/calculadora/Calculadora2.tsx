import React, { useState } from 'react';
import './Calculadora2.css';

export default function Calculadora2(props:{function:{(imc:number):void}, info:{(peso:number, altura:number):void}}) {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");

    const validation =()=>{
        if(peso=='' || altura ==''){
            return false;
        }
        return true;
    }

    function calcularIMC() {
        if(validation()){
        const alt = parseInt(altura) / 100;
        const imc = parseInt(peso) / (alt * alt);
        props.function(imc);
        props.info(parseInt(peso), parseInt(altura))
        }
        else {
            alert('Por favor llenar con la informacion solicitada');
        }
    }

    function onReset() {
        setPeso("");
        setAltura("");
    }

    const onChange = (e:any, dato:string)=>{
        if(dato=='peso'){
            setPeso(e.target.value);
        }
        else {
            setAltura(e.target.value);
        }
    }

    return (
        <div className={"app"}>
                <div className={"group"}>
                    <label className={"label"}>Peso: </label>
                    <input
                        className={"input"}
                        type="number"
                        placeholder="Peso en Kilogramos Ej: 75"
                        value={peso}
                        onChange={(e: any) => onChange(e, 'peso')}
                    />
                </div>
                <div className={"group"}>
                    <label className={"label"}>Altura: </label>
                    <input
                        className={"input"}
                        type="number"
                        placeholder="Altura en centimetros Ej: 170"
                        value={altura}
                        onChange={(e: any) => onChange(e, 'altura')}
                    />
                </div>
                <div className={"btns_group"}>
                    <button className={"btns"} onClick={calcularIMC}>Calcular</button>
                    <button className={"btns"} onClick={onReset}>Limpiar</button>
                </div>
        </div>
    );
}
