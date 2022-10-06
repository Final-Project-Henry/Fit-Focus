import React, { useState } from 'react';
import edits from '../additional/edits';


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
                edits.userInfoProps.map((prop: string) => {
                    if (Object.keys(edits.userInfoOptions).includes(prop)) return (
                        <div style={{ display: "flex", justifyContent: 'space-between', gap: "10px", }}>
                            <p>{prop}:</p>
                            <select name={prop}  value={(info as any)[prop]}  onChange={onChange}>
                                {(edits.userInfoOptions as any)[prop].map((option: string) => (
                                    <option style={{ width: "70%" }}>
                                        {option}
                                    </option>
                                ))
                                }
                            </select>
                        </div>
                    )
                    else return (
                        <div style={{ display: "flex", justifyContent: 'space-between', gap: "10px", }}>
                            <p>{prop}:</p>
                            <input style={{ width: "70%" }} onChange={onChange} name={prop} value={(info as any)[prop]} />
                        </div>
                    )
                })
            }
        </div>

    )
}
