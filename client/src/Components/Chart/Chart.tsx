import { useEffect, FC, useState } from "react";
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

interface props {
    label: string
    borderColor: string
    backgroundColor: string
    ejeY: Array<number>
    ejeX: Array<string | number>
}



const ChartLine: FC<props> = ({ejeX, ejeY, label, backgroundColor, borderColor}) => {

    const limit = (type:string) => {
        if (type === "min") return Math.min.apply(Math, ejeY) - Math.round((Math.min.apply(Math, ejeY) * 8) / 100)
        else if (type === "max") return Math.max.apply(Math, ejeY) + Math.round((Math.max.apply(Math, ejeY) * 6) / 100)
    }

    const options = {
        fill: true,
        scales: {
            y: {
                min: limit("min"),
                max: limit("max")
            },
        },
        responsive: true
    }

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
                        label,
                        data: ejeY,
                        tension: 0.4,
                        borderColor,
                        pointRadius: 4,
                        pointBorderColor: "#0000008c",
                        pointBackgroundColor: "white",
                        backgroundColor: createGradientColor(backgroundColor)
                    }
                ],
                labels: ejeX
            })

    }, [])

    return (
        <Chart data={chartData} type="line" options={options} ref={chartRef} />
    )
}

export default ChartLine