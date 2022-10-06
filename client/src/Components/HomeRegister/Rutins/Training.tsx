import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Rutines_Get } from "../../../features/counter/counterSlice";
import Loading from "../../loading/Loading";
import Temp from "./Temp";
import VisualExerc from "./VisualComponents/VisualExerc";
import VisualRest from "./VisualComponents/VisualRest";

export default function Training() {
  let id:number = 0;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const users = useAppSelector((state) => state.user);
  const [currentOrder, setOrder] = useState(1);
  const [endTraining, setEnd] = useState(false);
  const [isRunning, setRun] = useState(false);
  const [temp, setTemp] = useState(0);

  let timer = users.rutines.exercises?.find(
    (e: any, i: number) => i + 1 == currentOrder
  );

  const handleChangeOrder = (direc: string) => {
    if (direc === "next") {
      if (currentOrder < 29) setOrder((state) => state + 1);
    } else {
      if (currentOrder > 1) setOrder((state) => state - 1);
    }
    setRun(false);
  };

  const handleTemp = (time: number) => {
    setTemp(time);
  };

  const handleReset = () => {
    setTemp(timer.time);
    setRun(false);
  };

  const handleInit = () => {
    if (isRunning) setRun(false);
    else setRun(true);
  };

  if (temp === 0 && timer && !isRunning) {
    setTemp(timer.time);
  }
  if (currentOrder == 29 && temp === 0) {
    setRun(false);
    Swal.fire(
      "Terminado",
      "Terminaste el entrenamiento completo, felicidades!!!!!!",
      "success"
    ).then(() => {
      navigate("/fitFocus");
    });
  }

  useEffect(() => {
    let interval: any;
    let token;
    let userJSON = window.localStorage.getItem("Login_userFit_Focus");
    if (userJSON) {
      if (userJSON.length > 3) {
        let userlogin = JSON.parse(userJSON);
        token = userlogin.token;
      }
    }

    if (users.status === "none") dispatch(Rutines_Get({ token: token }));

    interval = setInterval(() => {
      if (isRunning) {
        setTemp((state) => state - 1);
        if (temp === 0 && currentOrder < 29) {
          setOrder((state) => state + 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, temp]);
  return (
    <div className='h-full'>
      {
        Object.keys(users.rutines).length === 0 ?
          <Loading />
          :
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 className='rounded-tr-md rounded-bl-md' style={{ fontWeight: "500", fontSize: "3.5rem", color: "white", margin: "3vh 0 20px 0", backgroundColor: "#111827", width: "50vw", display: "flex", justifyContent: "center" }}>
              Modo Entrenamiento
            </h1>
            <div style={{ display: "flex", gap: "5vw", justifyContent: "center" }}>
              <label className='text-xl'>Tiempo estimado: <b>{users.rutines.reps === "long" ? "25 min APROX." : "21 min APROX."}</b></label>
              <label className='text-xl'>Dificultad: <b className={`${users.rutines.difficulty === "easy" ? "text-green-500" : users.rutines.difficulty === "medium" ? "text-yellow-500" : "text-red-500"}`}>{users.rutines.difficulty.toUpperCase()}</b></label>
            </div>
            {
              users.rutines.exercises.map((e: any, i: number) => {
                if (i + 1 === currentOrder) return (
                  <div key={id++}>
                    <div style={{ display: "flex", marginTop: "5vh" }}>
                      <div className="w-[25vw]">
                        <img className="rounded-l-2xl h-[50vh] w-[25vw]" src={!e.exer ? e.exerc?.video : "https://media1.giphy.com/media/d8p3S8WcCRCnHJhW2S/giphy.gif?cid=ecf05e477t1wecvob5zi671125bk5hpdo7b5gotmfw7i4rn6&rid=giphy.gif&ct=g"}></img>
                      </div>
                      {!e.exer ?
                        <VisualExerc datos={e} />
                        :
                        <VisualRest />
                      }
                      <Temp

                        time={e.time}
                        isRunning={isRunning}
                        temp={temp}
                        handleCurrent={handleChangeOrder}
                        handleTemp={handleTemp}
                        handleInit={handleInit}
                        handleReset={handleReset}
                        img={e.order ? e.order : null}
                        name={e.exerc ? e.exerc.name : null}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
      }
    </div >
  );
}
