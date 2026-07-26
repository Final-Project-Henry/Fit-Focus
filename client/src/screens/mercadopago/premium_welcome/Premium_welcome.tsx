import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useToken } from '@/app/hooks';
import { getProfileInfo } from '@/features/user/userSlice';
import './Premium_welcome.css';

export default function Premium_welcome() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const token = useToken();
    
  useEffect(() => {
    if(token){
      dispatch(getProfileInfo(token));
    }
  },[token])
  
    const onClick=()=>{
        navigate('/fitFocus');
    }
  return (
    <div className={"container"}>
        <h1 className={"tittle"} >Felicidades por hacerte Premium!</h1>
        <div className={"text"}>
            <p>Ahora podras disfrutar de todos los beneficios sin restricciones.</p>
            <p>Cambia tu estilo de vida y mejora tu salud ya!</p>
            <button onClick={onClick} className={"btn"}>COMENZAR AHORA</button>
        </div>
    </div>
  )
}
