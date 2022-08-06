import { Bar } from "react-chartjs-2";
import {Chart as chartJS} from 'chart.js/auto'
import { chartdata } from "./chartdata";
function Barchart({chartdata}){
return (
    <Bar data={chartdata} />
)

}

export default Barchart