import React, { useEffect, useRef, useState } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart(props) {

  /* const chartRef = useRef()
  const [chartData, setChartData] = useState({
    datasets: [],
}) */

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Cantidad de Usuarios",
      },
    },
  };

  const data = {
    labels: props.labels,
    datasets: [
      {
        label: "Usuarios Normales",
        data: props.data1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Usuarios Premium",
        data: props.data2,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };


  //Gradient
/*  useEffect(() => {
     const chart = chartRef.current  
    if (!chart) return

    const createGradientColor = (color) => {
        
        const gradient = chart.ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.87, "rgba(255, 255, 255, 0.4)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0.6)")
        return gradient;
    }


    setChartData(() => {return{
            labels: props.labels,
            datasets: [
                {
                  label: "Usuarios Normales",
                  data: props.data1,
                  backgroundColor: createGradientColor("#ff638480"),
                },
                {
                  label: "Usuarios Premium",
                  data: props.data2,
                  backgroundColor: createGradientColor("#35a2eb80"),
                },
            ],
        }})

}, [chartRef]) */

  return (
    <>
      <div style={{ width: "520px", margin: "auto auto" }}>
          <Bar options={options} data={data} /* ref={chartRef}  *//>
      </div>
    </>
  );
  
}

export default Chart;
