import React, { useState } from "react";
import Swal from "sweetalert2";
import { useAppDispatch } from "../../../app/hooks";
import { add_response, reset_status_res } from "../../../features/admin/admin";

interface datos {
  email: string;
  name: string;
  comment: string;
}

export default function Question(props: { datos: datos; index: number }) {
  const [isResponse, setResp] = useState(false);
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState("");

  const handleResp = () => {
    setResp(!isResponse);
  };
  const handleSend = () => {
    Swal.fire({
      title: "¿Estas seguro que quieres enviar la respuesta?",
      text: "La pregunta se eliminara una vez tenga una respuesta",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Enviar",
    }).then((result: any) => {
      if (result.isConfirmed) {
        dispatch(add_response({ email: props.datos.email, response: comment }));
      }
      setResp(false);
    });
  };

  const handleResponse = (e: any) => {
    setComment(e.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
        width: "20vw",
        padding: "5px 10px 5px 10px",
        gap: "5px",
        height: isResponse?"50vh":"25vh",
        boxShadow: "0 0 20px 3px gray",
      }}
    >
      <h1
        style={{
          fontSize: "1.3rem",
          fontWeight: "700",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        {props.datos.name}
      </h1>
      <p>
        <b>Email:</b> {props.datos.email}
      </p>
      <p>
        <b>Question:</b> {props.datos.comment}
      </p>
      <div className="p-4">
        <button
          className="bg-gray-900 text-white p-2 rounded "
          onClick={handleResp}
        >
          Responder
        </button>
      </div>
      {isResponse && (
        <div className="grid grid-cols-1">
          <textarea
            rows={4}
            cols={30}
            className="p-2 m-auto resize-none rounded"
            onChange={handleResponse}
            value={comment}
            placeholder="Type a response"
          />
          <button
            className="bg-green-700 w-20 m-auto text-white rounded p-2 my-4"
            onClick={handleSend}
          >
            Enviar
          </button>
        </div>
      )}
    </div>
  );
}
