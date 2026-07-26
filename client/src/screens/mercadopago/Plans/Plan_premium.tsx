import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useToken } from '@/app/hooks';
import './PlanPremium.css';

export default function Plan_premium(props: { url: string }) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/auth/sing-up');
  }
  const token = useToken();
  return (
    <div className={"container"}>
      <div className={"tittle"}>
        <h1>Plan de entrenamiento</h1>
        <h1>Premium</h1>
      </div>
      <br />
      <p className={"text"}>Beneficios plan Normal</p>
      <p className={"text"}>+</p>
      <p className={"text"}>Rutinas personalizadas</p>
      <p className={"text"}>Todos los ejercicios desbloqueados</p>
      <p className={"text"}>Ejercicios de estiramiento</p>
      <br />
      <div className={"precio"}><p className={"monto"}>$3000.00</p><p className={"cuota"}>/Pago unico</p></div>
      {token.length > 0
        ?
        props.url
          ? <a className={"btn"} href={props.url}>Obtener todos los Beneficios →</a>
          : <button className={"btn"} type="button" disabled>Preparando checkout…</button>
        :
        <button className={"btn"} onClick={onClick}>Registrate primero →</button>
      }
    </div>
  )
}
