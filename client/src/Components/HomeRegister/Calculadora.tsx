import React, { useState } from 'react';
import Calculadora2 from './calculadora/Calculadora2';
import Result from './calculadora/Result';
import styles from "./styles/calculadora.module.css";


function Calculadora() {

  const [indice, setIndice] = useState<number | null>();
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);

  const calculate = (IMC: number) => {
    setIndice(IMC);
  }

  const info = (peso:number, altura:number)=>{
    setPeso(peso);
    setAltura(altura);
  }

  const again = () => {
    setIndice(null);
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_2}>
        <p className={styles.tittle}>Calculadora</p>
      </div>
      <h1 className={styles.tittle_2}>Te ayudamos a saber cual es tu indice de Masa Corporal</h1>
      <div className={styles.text}>
        <p>Esta calculadora proporciona el IMC y la correspondiente categoría de nivel de peso según el IMC.</p>
        <p>Utilícela para adultos de 20 años o más</p>
      </div>
      {indice == null
        ?
        <Calculadora2 function={calculate} info={info}/>
        :
        <Result function={again} IMC={indice} peso={peso} altura={altura}/>
      }
    </div>
  );
}

export default Calculadora;

