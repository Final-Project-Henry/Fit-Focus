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
  lastUsersMonth: Array<any>
}

const lengthUserDays = (lastUsersWeek: Array<any>, typeUser: string) => {

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

const to30 = () => {

  const arrayDays = []

  for (let i = 0; i < 30; i++) {
    arrayDays[i] = String(i + 1)
  }
  return arrayDays
}

const dataMonthFunction = (lastUsersMonth : Array<any>) => [
  {
    labels: to30(),
    data: [
      {
        values: lengthUserDays(lastUsersMonth, "normal"),
      },
      {
        values: lengthUserDays(lastUsersMonth, "premium"),
      },
    ],
  },
];
export default function SdGrafica({ lastUsersMonth }: Props) {
  

  const [dataMonth, setDataMonth] = useState<any>()


  useEffect(() => {
    setDataMonth(dataMonthFunction(lastUsersMonth))
  }, [lastUsersMonth])
  
  return (
    <div className="bg-gray-200 w-[36vw] h-[40vh] overflow-scroll">

      {
        lastUsersMonth &&
        <Chart
          labels={dataMonth[0].labels}
          data1={dataMonth[0].data[0].values}
          data2={dataMonth[0].data[1].values}
        />
      }
    </div>
  );
}
