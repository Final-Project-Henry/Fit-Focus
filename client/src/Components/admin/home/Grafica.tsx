import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Chart from "../chart/Chart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface CharProps {
  datasets: Array<string>;
}

// DATOS FICTICIOS DE LA TABLA
const dataWeek = [
  {
    labels: [
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo",
    ],
    data: [
      {
        values: [8, 15, 30, 40, 25, 50, 20],
      },
      {
        values: [10, 25, 35, 30, 40, 25, 30],
      },
    ],
  },
];
export default function Grafica() {
  const name: boolean = true;
  return (
    <div className="bg-gray-200" style={{ width: "100%", height: "15vw" }}>
      <Chart
        labels={dataWeek.length === 0 ? ["pink"] : dataWeek[0].labels}
        data1={dataWeek[0].data[0].values}
        data2={dataWeek[0].data[1].values}
      />
    </div>
  );
}
