import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import DataCard from "./DataCard";
import users from "../imgs/users.png";
import money from "../imgs/money.png";
import time from "../imgs/time.png";
import Grafica from "./Grafica";
import { get_users } from "../../../features/admin/admin";
import SdGrafica from "./SdGrafica";

export default function Home() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const admin = useAppSelector((state) => state.admin);
  const cant = admin.users?.length;
  const premiums = admin.users?.filter((e: any) => e.plan === "premium").length;

  useEffect(() => {
    dispatch(get_users());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "5vw",
        gap: "5vh",
        marginBottom: "10vh",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "300",
          marginTop: "25px",
          textAlign: "center",
        }}
      >
        Welcome <b>{user.user?.name}</b> to the Admin Dashboard!
      </h1>
      <div style={{ display: "flex", gap: "5vw" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "20vw",
            gap: "5vh",
          }}
        >
          <DataCard data={{ img: users, tittle: "Total Users", value: cant }} />
          <p
            style={{
              width: "20vw",
              padding: "25px",
              fontSize: "1.5rem",
              backgroundColor: "gray",
              height: "100%",
            }}
          >
            Esta pagina esta diseñada para mostrarle informacion importante
            sobre la app. En el panel lateral izquierdo podras encontrar las
            divisiones de cambios o modificaciones que podras realizar.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5vh",
          }}
        >
          <DataCard
            data={{
              img: money,
              tittle: "Total Money",
              value: `$ ${premiums ? premiums * 3000 : 0}`,
            }}
          />
          <Grafica />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5vh" }}>
          <DataCard
            data={{
              img: time,
              tittle: "Current Date",
              value: window.Date().slice(0, 25),
            }}
          />
          <SdGrafica />
        </div>
      </div>
    </div>
  );
}
