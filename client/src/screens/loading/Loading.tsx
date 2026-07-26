import React from 'react';
import './Loading.css';
import loading_video from '@/assets/legacy/icons/loading_video.mp4';

export default function Loading() {
  return (
    <div style={{backgroundColor:'white', display:'flex', flexDirection:"column", alignItems:'center', height:'100vh'}}>
        <video className={"animation"} src={loading_video} autoPlay loop muted></video>
        <p className={"text"}>Cargando...espere por favor</p>
    </div>
  )
}
