import React from 'react';

interface prop {
    img: any,
    tittle: string,
    value: string | number | undefined,
}

export default function DataCard(props:{data:prop}) {
    return (
        <div style={{display:"flex", backgroundColor:"gray"}}>
            <img src={props.data.img} width="100px"/>
            <div style={{display:"flex", flexDirection:"column", width:"15vw", alignItems:"center", justifyContent:"center", gap:"10px"}}>
                <h1>{props.data.tittle}</h1>
                <p>{props.data.value}</p>
            </div>
        </div>
    )
}
