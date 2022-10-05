import React, { useState } from 'react';

interface datos {
    email: string,
    name: string,
    comment: string,
}

export default function Question(props: { datos: datos, index: number }) {

    const [isResponse, setResp] = useState(false);

    const handleResp = () => {
        setResp(true);
    }
    const handleSend = () => {
        setResp(false);
    }

    return (
        <div
        style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            margin: "5px",
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
                    <input type="text" placeholder='Type a response' />
                    <button onClick={handleSend}>Send</button>
                </div>
            }
        </div>
    )
}
