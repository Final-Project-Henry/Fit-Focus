import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Rutines_Get } from '../../../features/counter/counterSlice';
import Loading from '../../loading/Loading';
import Temp from './Temp';


export default function Training() {
    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.user);
    const [currentOrder, setOrder] = useState(1);
    const cExer = users.rutines.exercises?.find((e: any) => e?.order == currentOrder);

    const handleChangeOrder = (direc: string) => {
        if (direc === "next") {
            setOrder(state => state + 1);
        }
        else {
            if (currentOrder > 1) setOrder(state => state - 1);
        }
    }

    useEffect(() => {
        let token;
        let userJSON = window.localStorage.getItem("Login_userFit_Focus");
        if (userJSON) {
            if (userJSON.length > 3) {
                let userlogin = JSON.parse(userJSON);
                token = userlogin.token;
            }
        }
        if (users.status === "default") dispatch(Rutines_Get(token))
    }, [users, currentOrder])
    return (
        <div style={{ height: "100%" }}>
            {
                Object.keys(users.rutines).length > 0 ?
                    < div style={{ display: "flex", flexDirection: "column", alignItems: "center" }
                    }>
                        <h1 style={{ fontWeight: "500", fontSize: "3.5rem", color: "white", marginBottom: "20px", backgroundColor: "#111827", width: "50vw", display: "flex", justifyContent: "center" }}>Modo Entrenamiento</h1>
                        <div style={{ display: "flex", gap: "5vw", justifyContent: "center" }}>
                            <label>Tiempo estimado: <b>{users.rutines.reps === "long" ? "25 min APROX." : "21 min APROX."}</b></label>
                            <label>Dificultad: <b>{users.rutines.difficulty.toUpperCase()}</b></label>
                        </div>
                        <div style={{ display: "flex", marginTop: "5vh" }}>
                            <div style={{ width: "25vw", border: "1px solid red" }}>
                                <img style={{ height: "50vh", width: "25vw" }} src={users.rutines.exercises[currentOrder - 1].exerc?.video}></img>

                            </div>
                            <div style={{ width: "30vw", border: "1px solid red"}}>
                                <div style={{ display: "flex", flexDirection: "column", alignItems:"center", justifyContent:"space-around", height:"40vh" }}>
                                    <h1>{users.rutines?.exercises[currentOrder - 1].name}</h1>
                                    <label>Dificultad: {users.rutines?.exercises[currentOrder - 1].exerc?.difficulty}</label>
                                    <label>Musculos invol: {users.rutines?.exercises[(currentOrder - 1)].exerc?.muscles}</label>
                                    <label>Descripcion: </label><p  style={{width:"20vw", fontSize:"0.8rem"}}>{users.rutines?.exercises[currentOrder - 1].exerc?.description}</p>
                                </div>
                            </div>
                            <Temp change={handleChangeOrder} time={currentOrder}/>
                        </div>
                    </div >
                    : <Loading />
            }
        </div>
    )
}
