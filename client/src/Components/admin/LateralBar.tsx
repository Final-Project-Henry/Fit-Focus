import React from 'react';
import { useNavigate } from 'react-router-dom';
import btns from './additional/routes';


export default function LateralBar() {

  const navigate = useNavigate();
  const onClick = (url: string) => {
    navigate(`${url}`)
  }
  return (
    <div style={{ width: "10vw", display: "flex", flexDirection: "column", gap: "10vh", marginTop:"5vh", marginLeft:"15px"}}>
      {
        btns.map((btn: any) => (
          <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }} onClick={() => onClick(btn.url)}>
            <img src={btn.img} width="30px" />
            <p>{btn.tittle}</p>
          </div>
        ))
      }
    </div>
  )
}
