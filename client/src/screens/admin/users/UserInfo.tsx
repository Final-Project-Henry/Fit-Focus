import React, { useState } from 'react';


interface info {
    genre: string,
    age: number,
    weight: number,
    height: number,
    goal: string,
    experience: string,
}
interface data {
    info: Array<info>,
}

export default function UserInfo(props: { data: data}) {
    return (
        <div>
            {
                Object.keys(props.data.info[0])?.map((prop: string) => {
                    if (prop !== "_id" && prop!=="equipment") return (
                        <div style={{ display: "flex", justifyContent: 'space-between', gap: "10px", }}>
                            <p>{prop}: </p>
                            <p>{(props.data.info[0]as any)[prop]}</p>
                        </div>)
                    else return;
                })
            }
        </div>

    )
}
