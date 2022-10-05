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
    <div
      style={{
        border: "1px solid red",
        width: "35vw",
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "500" }}>
        {props.name ? props.name : "Descanso"}
      </h1>

      <img
        src={(images as any)[props.img ? props.img : "z"]}
        style={{ width: "5vw" }}
      />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <button
          onClick={() => handleCurrent("prev")}
          style={{
            backgroundColor: "#111827",
            color: "white",
            padding: "10px",
          }}
        >
          Anterior {`<<`}
        </button>

        <h1
          style={{
            border: "2px solid #111827",
            padding: "10px",
            fontSize: "2rem",
          }}
        >
          {props.temp} segs
        </h1>

        <button
          onClick={() => handleCurrent("next")}
          style={{
            backgroundColor: "#111827",
            color: "white",
            padding: "10px",
          }}
        >
          Siguiente {`>>`}
        </button>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <button
          onClick={props.handleInit}
          style={{ backgroundColor: "#111827", color: "white", width: "10vw" }}
        >
          {props.isRunning
            ? "Pausa"
            : props.time == props.temp
            ? "Iniciar"
            : "Reanudar"}
        </button>

        <button
          onClick={props.handleReset}
          style={{ backgroundColor: "#111827", color: "white", width: "10vw" }}
        >
          Resetear
        </button>

        <button
          onClick={handleEnd}
          style={{ backgroundColor: "#111827", color: "white", width: "10vw" }}
        >
          Terminar
        </button>
      </div>
    </div>
  );
}
