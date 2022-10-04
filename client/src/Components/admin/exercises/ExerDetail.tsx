import React from 'react';

interface exercise {
    name: string,
    difficulty: string,
    muscles: string,
    genre: string,
    video: string,
    premium: boolean,
    description: string,
}

export default function ExerDetail(props:{exer:exercise}) {
    return (
        <div>
            {
                Object.keys(props.exer).map((prop: string) => {
                    if (!["_id", "feedback", "__v"].includes(prop)) return (
                        <div style={{ display: "flex", justifyContent: 'space-between', gap: "10px", }}>
                            <p>{prop}:</p>
                            <p style={{width:"70%"}}>{prop === 'premium' ? `${props.exer[prop]}` : (props.exer as any)[prop]}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
