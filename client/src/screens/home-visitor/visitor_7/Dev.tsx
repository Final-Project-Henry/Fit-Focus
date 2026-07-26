import React from 'react';
import './Dev.css';

interface dev {
    name: string,
    link: string,
    git: string,
    mail: string,
    avatar: any,
}

export default function Dev(props: { data: dev }) {
    return (
        <div className={"container"}>
            <img src={props.data.avatar} width='100px' style={{borderRadius:'50%'}}></img>
            <div className={"container_2"}>
                <p className={"name"}>{props.data.name}</p>
                <div className={"social"}>
                    <a className={"git"} href={props.data.git} target='_blank'> </a>
                    <a className={"link"} href={props.data.link} target='_blank'> </a>
                    <a className={"mail"} href={props.data.mail} target='_blank'> </a>
                </div>
            </div>
        </div>
    )
}
