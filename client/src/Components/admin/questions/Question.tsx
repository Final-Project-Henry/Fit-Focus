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
        <div style={{ border: "1px solid red" }}>
            <h1>{props.datos.name}</h1>
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
