import { Pie } from "react-chartjs-2"
import { Chart as Chart } from "chart.js/auto"

const PieChart = ({ chartData, title }) => {
    const options = {
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: title,
            font: {
              size:13, // Puedes ajustar el tamaño del texto del título
            },
          },
        },
        maintainAspectRatio: false
      };
    return (
        <Pie data={chartData} options={options}></Pie>
    )
}
export default PieChart;
