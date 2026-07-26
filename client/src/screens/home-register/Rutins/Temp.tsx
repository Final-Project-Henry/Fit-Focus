import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import images from "./images";

export default function Temp(props: {
  time: number;
  isRunning: boolean;
  temp: number;
  handleCurrent: (direct: string) => void;
  handleTemp: (time: number) => void;
  handleInit: () => void;
  handleReset: () => void;
  img?: number;
  name?: string;
}) {
  const handleCurrent = (control: string) => {
    props.handleCurrent(control);
  };

  const navigate = useNavigate();

  const handleEnd = () => {
    Swal.fire({
      title: "¿Estas seguro que quieres terminar el entrenamiento?",
      text: "No se guardara el progreso de lo realizado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Terminar",
    }).then((result: any) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Terminado",
          "Terminaste el entrenamiento completo, felicidades!!!!!!",
          "success"
        ).then(() => {
          navigate("/fitFocus");
        });
      }
    });
  };

  useEffect(() => {
    props.handleTemp(props.time);
  }, [props.time]);

  return (
    <div className='ml-5' style={{ width: "35vw", height: "50vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>

      <img
      className='rounded-md'
      src={(images as any)[props.img?props.img:'z']}
      style={{ width: "5vw" }} />

      <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>

        <button
        onClick={()=>handleCurrent('prev')}
        className="hover:scale-105 duration-300 rounded-sm bg-[#111827] hover:bg-gray-700"
        style={{color: "white", padding: "10px" }}>
          {`<<`} Anterior 
          </button>

          <div className="w-24 mx-1 p-2 bg-white text-gray-700 rounded-lg shadow-lg flex flex-col">
                <div className="font-mono leading-none text-5xl font-bold text-gray-800 mx-auto" x-text="seconds">{props.temp}</div>
                <div className="font-mono uppercase text-sm leading-none mx-auto">segs</div>
          </div>
        

        <button 
        onClick={()=>handleCurrent('next')}
        className="hover:scale-105 duration-300 rounded-sm"
        style={{ backgroundColor: "#111827", color: "white", padding: "10px" }}>
          Siguiente {`>>`}
        </button>
      </div>

      <div style={{ width: "95%", display: "flex", justifyContent: "space-around" }}>

        <button
        onClick={props.handleInit}
        className="rounded-tr-md rounded-bl-md py-1"
        style={{ backgroundColor: "#111827", color: "white", width: "8vw" }}>
          {props.isRunning?"Pausa":props.time==props.temp?"Iniciar":"Reanudar" }
        </button>

        <button
        onClick={props.handleReset}
        className="py-1 rounded-sm"
        style={{ backgroundColor: "#111827", color: "white", width: "10vw" }}>
          Resetear
        </button>

        <button
        onClick={handleEnd}
        className="py-1 rounded-tr-md rounded-bl-md "
        style={{ backgroundColor: "#111827", color: "white", width: "8vw" }}>
          Terminar
        </button>
      </div>
    </div>
  );
}
