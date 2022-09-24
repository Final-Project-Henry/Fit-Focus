import React from 'react';
import { useState } from 'react';
import "./styles/calculadora.css";


function Calculadora() {

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const [mensaje, setMensaje] = useState("");
  const [imcMensaje, setImcMensaje] = useState("");


  function calcularIMC(altura: number, peso: number) {

    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (altura <= 0 || peso <= 0) {
      alert("Error. Por Favor, agregue el peso y la altura corretamente!");
      
    } else if (!alt) {
      alert("Error. Por Favor, agregue o peso y la altura corretamente!");

    } else if (imc < 16.9) {
      setMensaje(`Usted está severamente por debajo del promedio de peso, por favor consulte a un médico antes de proseguir!`);
      setImcMensaje(`Su IMC es de: ${imc.toFixed(2)}`);
      alert("Usted está severamente por debajo del promedio de peso, por favor consulte a un médico antes de proseguir!");

    } else if (imc >= 17 && imc < 18.4) {
      setMensaje(`Usted está por debajo del peso promedio, por favor consulte a su médico antes de proseguir!`);
      setImcMensaje(`Su IMC es de: ${imc.toFixed(2)}`);
      alert("Usted está por debajo del promedio de peso, por favor consulte a un médico antes de proseguir!");

    } else if (imc >= 18.5 && imc < 24.9) {
      setMensaje(`Usted se encuentra en un peso promedio!`);
      setImcMensaje(`Su IMC es de: ${imc.toFixed(2)}`);
      alert("Usted se encuentra en un peso promedio!");

    } else if (imc >= 25 && imc < 29.9) {
      setMensaje(`Usted esta ligeramente por encima de su peso!`);
      setImcMensaje(`Su IMC es de: ${imc.toFixed(2)}`);
      alert("Usted esta ligeramente por encima de su peso!");

    } else if (imc >= 30 && imc < 34.9) {
      setMensaje(`Usted esta con obesidad grado I, por favor consulte a su médico antes de proseguir!`);
      setImcMensaje(`Su IMC es de: ${imc.toFixed(2)}`);
      alert("Usted esta con obesidad grado I, por favor consulte a su médico antes de proseguir!");

    } else if (imc >= 35 && imc < 40) {
      setMensaje(`Usted esta con obesidad grado II, por favor consulte a su médico antes de proseguir!`);
      setImcMensaje(`Su IMC es de: ${imc.toFixed(2)}`);
      alert("Usted esta con obesidad grado II, por favor consulte a su médico antes de proseguir!");

    } else if (imc >= 40) {
      setMensaje(`Usted esta con obesidad grado III, por favor consulte a su médico antes de proseguir!`);
      setImcMensaje(`Su IMC es de: ${imc.toFixed(2)}`);
      alert("Usted esta con obesidad grado III, por favor consulte a su médico antes de proseguir!");
    }

    setPeso("");
    setAltura("");
  }

  function onReset() {
    setMensaje("");
    setImcMensaje("");
  }

  return (

    <div className="app">
      <div className="area-input">
        <h1 className='title'>Calculadora de IMC </h1>
        <span>Vamos a calcular tu indice de masa corporal </span>

        <input
          type="number"
          placeholder="Peso en [KG] Ej: 75"
          value={peso}
          onChange={(e: any) => setPeso(e.target.value)}
        />

        <input
          type="number"
          placeholder="Altura en [CM] Ej: 170"
          value={altura}
          onChange={(e: any) => setAltura(e.target.value)}
        />

        <button onClick={() => calcularIMC(Number(altura), Number(peso))}>
          Calcular
        </button>

        <h2 className='mensajes'>
          {mensaje} <br />
          {imcMensaje}
        </h2>

        <button onClick={() => onReset()} type='reset' >
          Limpiar
        </button>
      </div>
    </div>
  );
}

export default Calculadora;

