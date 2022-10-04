import React, { useState } from 'react';


interface exercise {
    name: string,
    difficulty: string,
    muscles: string,
    genre: string,
    video: string,
    premium: boolean,
    description: string,
}

export default function ExerEdit(props: { exer: exercise, save: (e: any) => void }) {

    const [exercise, setExer] = useState<exercise>({
        name: props.exer.name,
        difficulty: props.exer.difficulty,
        muscles: props.exer.muscles,
        genre: props.exer.genre,
        video: props.exer.video,
        premium: props.exer.premium,
        description: props.exer.description,
    });

    const onChange = (e: any) => {
        if (e.target.name === 'name') setExer((state: exercise) => { return { ...state, name: e.target.value.toUpperCase() } })
        setExer((state: exercise) => { return { ...state, [e.target.name]: e.target.value } })

        props.save(e);
    }
    return (
        <div>
            {
                ["name","difficulty", "muscles", "genre", "video", 'premium','description'].map((prop: string) => {
                    if (!["_id", "feedback", "__v"].includes(prop)) return (
                        <div style={{ display: "flex", justifyContent: 'space-between', gap: "10px", }}>
                            <p>{prop}:</p>
                            <input style={{ width: "70%" }} onChange={onChange} name={prop} value={(exercise as any)[prop]} />
                        </div>
                    )
                })
            }
        </div>
    )
}
