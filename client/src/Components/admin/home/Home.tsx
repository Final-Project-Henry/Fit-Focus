import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import DataCard from "./DataCard";
import users2 from "../imgs/users.png";
import money from "../imgs/money.png";
import time from "../imgs/time.png";
import Grafica from "./Grafica";
import { get_users } from "../../../features/admin/admin";
import SdGrafica from "./SdGrafica";

interface LastUsers {
  premium: Array<any>
  normal: Array<any>
}

export default function Home() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const admin = useAppSelector((state) => state.admin);
  const cant = admin.users?.length;
  const premiums = admin.users?.filter((e: any) => e.plan === "premium").length;
  const [users, setusers] = useState(null)
  const [lastUsersWeek, setLastUsersWeek] = useState<any>()
  const [lastUsersMonth, setLastUsersMonth] = useState<any>()

  const restarDias = (fecha: Date, dias: number) => {
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  const filterUsersDays = (daysLess: Date) => {
    return admin.users?.filter(e => {
      const signupDate = new Date(e.signupDate)
      return signupDate > daysLess
    })
  }

  const sortLastUser = (lastUsers: any, days: number) => {
    let sortLastUser: Array<LastUsers> = []

    for (let i = 0; i <= days; i++) {
      sortLastUser.push({ premium: [], normal: [] })
    }

    lastUsers.map((e: any) => {
      const day = days < 7 ? new Date(e.signupDate).getDay() : new Date(e.signupDate).getDate()

      if (e.plan === "premium")
        sortLastUser[day].premium.push(e)
      else
        sortLastUser[day].normal.push(e)

    })

    return sortLastUser
  }


  useEffect(() => {

    if (admin.users) {
      const currentDate = new Date()

      //Last seven days
      const pastSevenDays = restarDias(currentDate, -6)
      const lastUsers = filterUsersDays(pastSevenDays)
      setLastUsersWeek(sortLastUser(lastUsers, 6))

      //Last thirty days
      const pastThirtyDays = restarDias(currentDate, -30)
      const lastUsersMonth = filterUsersDays(pastThirtyDays)
      setLastUsersMonth(sortLastUser(lastUsersMonth, 30))

    }

  }, [admin.users])



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
      <div className="">
        <div>
          <div style={{ display: "flex", gap: "5vw" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "20vw",
                gap: "5vh",
              }}
              className=""
            >
              <DataCard data={{ img: users2, tittle: "Total Users", value: cant }} />
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

            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "5vh" }}>
              <DataCard
                data={{
                  img: time,
                  tittle: "Current Date",
                  value: window.Date().slice(0, 25),
                }}
              />
            </div>

          </div>
          <div className="w-full flex justify-around mt-12">
            <Grafica lastUsersWeek={lastUsersWeek} />
            <SdGrafica lastUsersMonth={lastUsersMonth} />
          </div>

        </div>
      </div>
    </div>
  );
}
