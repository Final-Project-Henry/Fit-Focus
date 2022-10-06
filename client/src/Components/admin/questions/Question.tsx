import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useAppDispatch } from '../../../app/hooks';
import { add_response, reset_status_res } from '../../../features/admin/admin';

interface datos {
    email: string,
    name: string,
    comment: string,
}

export default function Question(props: { datos: datos, index: number }) {

    const [isResponse, setResp] = useState(false);
    const dispatch = useAppDispatch();
    const [comment, setComment] = useState("");

    const handleResp = () => {
        setResp(true);
    }
    const handleSend = () => {
        Swal.fire({
            title: '¿Estas seguro que quieres enviar la respuesta?',
            text: "La pregunta se eliminara una vez tenga una respuesta",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "Cancelar",
            confirmButtonText: 'Enviar',
          }).then((result: any) => {
            if (result.isConfirmed) {
              dispatch(add_response({email:props.datos.email, response:comment}));

            }setResp(false);
          });
    }

    const handleResponse = (e:any)=>{
        setComment(e.target.value);
    }

    return (
        <div
        style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            margin: "20px",
            width: "40vw",
            padding: "5px 10px 5px 10px",
            gap: "5px",
            boxShadow:"0 0 20px 3px gray"
          }}
        >
            <h1
            style={{fontSize:"1.2rem", fontWeight:"700", marginTop:"10px"}}
            >{props.datos.name}</h1>
            <p><b>Email:</b> {props.datos.email}</p>
            <p><b>Question:</b> {props.datos.comment}</p>
            <button onClick={handleResp}>Responder</button>
            {
                isResponse &&
                <div>
                    <input onChange={handleResponse} type="textarea" value={comment} placeholder='Type a response' />
                    <button onClick={handleSend}>Enviar</button>
                </div>
            }
        </div>
    )
}
