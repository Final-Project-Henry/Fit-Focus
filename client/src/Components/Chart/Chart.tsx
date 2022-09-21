import { useEffect, useMemo, useState } from "react";
import { useRef } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js"
import {Chart} from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

const weight = [80, 82, 79, 75, 76, 74, 80, 83, 82, 79, 78, 73]
const months = ["ja", "fe", "ma", "ap", "ma", "ju", "ju", "ag", "se", "oc", "no", "de"];
console.log(Math.min.apply(Math, weight) - 20)

const options = {
    fill: true,
    scales: {
        y: {
            min: Math.min.apply(Math, weight) - 5
        }
    },
    responsive: true
}

const ChartLine = () => {

    const chartRef = useRef<ChartJS>(null)
    const [chartData, setChartData] = useState<any>({
        datasets: [],
    })

    

    useEffect(() => {
        const chart = chartRef.current
        if (!chart) return

        const createGradientColor = (color: string) => {
            
            const gradient = chart.ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, color);
            gradient.addColorStop(0.87, "rgba(255, 255, 255, 0.4)");
            gradient.addColorStop(1, "rgba(255, 255, 255, 0.6)")
            return gradient;
        }


        setChartData({
                datasets: [
                    {
                        label: "Peso",
                        data: weight,
                        tension: 0.4,
                        borderColor: "#0a3fFc",
                        pointRadius: 4,
                        pointBorderColor: "#0000008c",
                        pointBackgroundColor: "white",
                        backgroundColor: createGradientColor("#0a3fFc4c")
                    }
                ],
                labels: months
            })

    }, [])

    return (
        <Chart data={chartData} type="line" options={options} ref={chartRef} />
    )
}

export default ChartLine