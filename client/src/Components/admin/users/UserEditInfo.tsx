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

export default function UserEditInfo(props: { data: data, save: (e: any) => void, }) {
    const [info, setInfo] = useState<info>({
        genre: props.data.info[0].genre,
        age: props.data.info[0].age,
        weight: props.data.info[0].weight,
        height: props.data.info[0].height,
        goal: props.data.info[0].goal,
        experience: props.data.info[0].experience,
    });

    const onChange = (e: any) => {
        setInfo((state: info) => { return { ...state, [e.target.name]: e.target.value } });
        props.save(e);
    }
    return (
        <div>
            {
                ["genre", "age","weight","height", "goal", "experience"].map((prop: string) => {
                    if (prop !== "_id" && prop!=="equipment") return (
                        <div style={{ display: "flex", justifyContent: 'space-between', gap: "10px", }}>
                            <p>{prop}: </p>
                            <input name={prop} value={(info as any)[prop]} onChange={onChange}/>
                        </div>)
                    else return;
                })
            }
        </div>

    )
}
