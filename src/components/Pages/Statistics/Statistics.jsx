import useTitle from "../../../Hooks/useTitle";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Statistics = () => {
  useTitle("Statistics");

  const data = useLoaderData()


  // const [data, setData] = useState([])

  // useEffect(()=>{
  //   fetch("../../assignment.json")
  //   .then(res => res.json())
  //   .then(data =>setData(data))
  // })

  // data
  const colors = ['#7a4a57', '#f0214a', '#4db3f8', '#486885', '#486885', '#c0a9cb', '#4db3f8', '#486885',]


  return (
    <div className="my-20">
      <h1 className="text-center font-bold text-3xl">Assignment Marks Analysis</h1>
      <PieChart  className="mx-auto" width={600} height={450}>
      <Pie legendType="circle" data={data} dataKey="marks" nameKey="title" cx="50%" cy="50%" outerRadius={80} label>
    {
      data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]}/>
      ))
    }
  </Pie>
  <Tooltip></Tooltip>
  <Legend></Legend>
    </PieChart>
    </div>
  );
};

export default Statistics;
