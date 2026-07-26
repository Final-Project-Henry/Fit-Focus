import React from 'react'
import { useNavigate } from 'react-router-dom'
import './PlanNormal.css';

export default function Plan_normal() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/auth/sing-up');
  }
  return (
    <div className={"container"}>
      <div  className={"tittle"}>
        <h1>Plan de entrenamiento</h1>
        <h1>Normal</h1>
      </div>
      <br />
      <p className={"text"}>Calculadora</p>
      <p className={"text"}>Ejercicios basicos para empezar</p>
      <br />
      <div className={"precio"}>
        <p className={"monto"}>$0.00</p><p className={"cuota"}>/Gratis</p>
      </div>
      <button className={"btn"} onClick={onClick}>Registrate primero →</button>
    </div>
  )
}
