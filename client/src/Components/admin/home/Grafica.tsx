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

interface Props {
  lastUsersWeek: Array<any>
}

const lengthUserDays = (lastUsersWeek : Array<any>, typeUser: string) => {

  if (typeUser === "premium") {

    return lastUsersWeek?.map((e, index, array) => {
      return array[index].premium.length
    })

  }
  else {

    return lastUsersWeek?.map((e, index, array) => {
      return array[index].normal.length
    })  
    
  }
}

const dataWeekFunction = (lastUsersWeek : Array<any>) => 
   [
    {
      labels: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
      ],
      data: [
        {
          values: lengthUserDays(lastUsersWeek, "normal"),
        },
        {
          values: lengthUserDays(lastUsersWeek, "premium"),
        },
      ],
    },
  ];


export default function Grafica({ lastUsersWeek }: Props) {

  const [dataWeek, setDataWeek] = useState<any>()

  useEffect(() => {
    
    setDataWeek(dataWeekFunction(lastUsersWeek))
  }, [lastUsersWeek])
  

  return (
    <div className="bg-gray-200 w-[36vw] h-[40vh] overflow-scroll">
      {
        dataWeek &&
        <Chart
        labels={dataWeek[0].labels}
        data1={dataWeek[0].data[0].values}
        data2={dataWeek[0].data[1].values}
      />
      }
    </div>
  );
}
