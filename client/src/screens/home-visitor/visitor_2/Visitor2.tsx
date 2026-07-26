import React from 'react';
import './Visitor2.css';
import laptop from '@/assets/legacy/Fotos y Videos HomeVisitor/laptop page.mp4';

export default function Visitor2() {
  return (
    <div className={"container"}>
      <video className={"animation"} src={laptop} autoPlay loop muted></video>
      <div className={"container_2"}>
        <h1 className={"tittle"}>Esta aplicación:</h1>
        <div className={"text"}>

          <p>
            Ofrece una gran variedad de ejercicios
            para realizarlos en casa, dependiendo
            la parte del cuerpo que se desee trabajar.
            Tambien nos brinda una calculadora
            para conocer el indice de masa corporal
            y asi tener un mayor conocimiento de
            nuestra salud.
          </p>
        </div>
      </div>
    </div>
  )
}
