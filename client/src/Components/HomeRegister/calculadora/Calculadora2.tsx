import React, { useState } from 'react';
import styles from "./Calculadora2.module.css";

export default function Calculadora2() {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [IMC, setIMC] = useState<number>();

    function calcularIMC() {
        const alt = parseInt(altura) / 100;
        const imc = parseInt(peso) / (alt * alt);
        setIMC(imc);
    }

    function onReset() {
        setPeso("");
        setAltura("");
    }

    return (
        <div className={styles.app}>
            <div className={styles.area_input}>
                <input
                    className={styles.input}
                    type="number"
                    placeholder="Peso en Kilogramos Ej: 75"
                    value={peso}
                    onChange={(e: any) => setPeso(e.target.value)}
                />
                <input
                    className={styles.input}
                    type="number"
                    placeholder="Altura en centimetros Ej: 170"
                    value={altura}
                    onChange={(e: any) => setAltura(e.target.value)}
                />
                <div className={styles.btns_group}>
                    <button className={styles.btns} onClick={calcularIMC}>Calcular</button>
                    <button className={styles.btns} onClick={onReset}>Limpiar</button>
                </div>
            </div>
        </div>
    );
}
