import { useLoaderData } from "react-router-dom"
import { PieChart, Tooltip, Pie, Legend, Cell} from "recharts";
const Statistics = () => {
  const obtainedMarks = useLoaderData();
  console.log(obtainedMarks)
  return (
    <PieChart width={700} height={400}>
       <Pie data={obtainedMarks} dataKey="marks" nameKey="title" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
       <Tooltip/>
       <Legend className="bg-black text-orange-600"></Legend>
       <Cell className="bg-black text-orange-600"></Cell>
     </PieChart>
  )
}

export default Statistics