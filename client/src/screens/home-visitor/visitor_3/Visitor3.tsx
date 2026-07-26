import React from 'react';
import { Link } from 'react-router-dom';
import './Visitor3.css';

export default function Visitor3() {
  return (
    <div className={"container"}>
      <div className={"text"}>
        <h1 className={"tittle"}>¿Tienes mas de 20?</h1>
        <p className={"p"}>Entonces esta app esta hecha a tu medida</p>
        <Link to={'/auth/sing-up'}>Empieza a cambiar tu vida ya!</Link>
      </div>
      <p className={"img"}> </p>
    </div>
  )
}
