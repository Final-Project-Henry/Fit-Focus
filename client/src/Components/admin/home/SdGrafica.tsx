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

const dataMonth = [
  {
    labels: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    data: [
      {
        values: [8, 15, 30, 20, 25, 30, 20, 25, 18, 24, 25, 28],
      },
      {
        values: [10, 25, 35, 30, 40, 25, 24, 17, 8, 9, 30, 12, 14],
      },
    ],
  },
];
export default function SdGrafica() {
  return (
    <div className="bg-gray-200" style={{ width: "100%", height: "15vw" }}>
      <Chart
        labels={dataMonth[0].labels}
        data1={dataMonth[0].data[0].values}
        data2={dataMonth[0].data[1].values}
      />
    </div>
  );
}
