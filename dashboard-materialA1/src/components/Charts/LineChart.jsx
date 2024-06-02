import { Line } from "react-chartjs-2";
import { Chart as Chart } from "chart.js/auto";

const LineChart = ({ chartData }) => {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      filler: {
        propagate: true, // Activa el relleno del gráfico de línea
      },
    },
  };
  return <Line data={chartData} options={options}></Line>;
};
export default LineChart;
