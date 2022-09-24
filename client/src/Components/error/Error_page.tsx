import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Error_page.module.css';

export default function Error_page() {
    const navigate = useNavigate();

    const onClick=()=>{
        navigate('/home');
    }
  return (
    <div style={{display:'flex', flexDirection:"column", gap:"50px", alignItems:'center', marginTop:"10vh"}}>
        <h1 style={{color:"#111828", fontSize:"3.5rem", fontWeight:"500"}}>Ocurrio un error inesperado</h1>
        <p className={styles.img}> </p>
        <button className={styles.btn} onClick={onClick}>Regresar a home</button>
    </div>
  )
}
