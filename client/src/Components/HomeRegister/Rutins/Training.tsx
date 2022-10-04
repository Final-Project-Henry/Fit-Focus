import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Rutines_Get } from '../../../features/counter/counterSlice';
import Loading from '../../loading/Loading';


export default function Training() {
    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.user);

    const [currentOrder, setOrder] = useState(1);
    const [temp, setTemp] = useState(0);

    useEffect(() => {
        let token;
        let userJSON = window.localStorage.getItem("Login_userFit_Focus");
        if (userJSON) {
            if (userJSON.length > 3) {
                let userlogin = JSON.parse(userJSON);
                token = userlogin.token;
            }
        }
        if (Object.keys(users.rutines).length === 0) dispatch(Rutines_Get(token))
    }, [])
    return (
        <div style={{ height: "100%" }}>
            {
                Object.keys(users.rutines).length > 0 ?
                    < div style={{ display: "flex", flexDirection: "column", alignItems: "center" }
                    }>
                        <h1 style={{ fontWeight: "500", fontSize: "3.5rem", color: "white", marginBottom: "20px", backgroundColor: "#111827", width: "50vw", display: "flex", justifyContent: "center" }}>Modo Entrenamiento</h1>
                        <div style={{ display: "flex", gap: "5vw", justifyContent: "center" }}>
                            <label>Tiempo estimado: <b>{users.rutines?.reps === "long" ? "25 min APROX." : "21 min APROX."}</b></label>
                            <label>Dificultad: <b>{users.rutines.difficulty?.toUpperCase()}</b></label>
                        </div>
                        <div>
                            <div>
                                <img style={{ height: "20vh", width: "10vw" }} src={users?.rutines.exercises[currentOrder - 1].video}></img>
                                <div style={{display:"flex", flexDirection:"column"}}>
                                    <h1>{users.rutines.exercises[currentOrder - 1].name}</h1>
                                    <label>Dificultad: {users.rutines.exercises[currentOrder - 1].difficulty}</label>
                                    <label>Musculos invol: {users.rutines.exercises[currentOrder-1].muscles}</label>
                                    <label>Descripcion: </label><p>{users.rutines.exercises[currentOrder-1].description}</p>
                                </div>
                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                    </div >
                    : <Loading />
            }
        </div>
    )
}
