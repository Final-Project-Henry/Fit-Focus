import React from 'react';
import styles from './Loading.module.css';
const loading_video = require('../assets/icons/loading_video.mp4');

export default function Loading() {
  return (
    <div style={{backgroundColor:'white', display:'flex', flexDirection:"column", alignItems:'center', height:'100vh'}}>
        <video className={styles.animation} src={loading_video} autoPlay loop muted></video>
        <p className={styles.text}>Cargando...espere por favor</p>
    </div>
  )
}
