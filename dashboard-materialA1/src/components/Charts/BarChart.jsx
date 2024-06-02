import { Bar } from "react-chartjs-2"
import {Chart as Chart } from "chart.js/auto"

const BarChart = ({chartData}) => {
    const options = {
        maintainAspectRatio: false,
        indexAxis: 'y',
        responsive: true,
        scales: {
            y: {
              grid: {
                display: false, // Oculta la cuadrícula del eje Y
              },
            },
          },
      };
    return (
        <Bar data={chartData} options={options}></Bar>
    )
}
export default BarChart;