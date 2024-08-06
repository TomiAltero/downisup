import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface TemperaturaData {
  _id: string;
  fecha: string;
  valor: number;
}

interface Props {
  hijoId: string;
}

const PesoChartTemperatura: React.FC<Props> = ({ hijoId }) => {
  const [temperatura, setTemperatura] = useState<TemperaturaData[]>([]);

  useEffect(() => {
    const obtenerTemperatura = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get<TemperaturaData[]>(
            `http://localhost:5000/api/hijos/${hijoId}/temperatura`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          setTemperatura(response.data);
        }
      } catch (error) {
        console.error("Error al obtener temperaturas:", error);
      }
    };

    obtenerTemperatura();
  }, [hijoId]);

  const data = {
    labels: temperatura.map((temp) =>
      new Date(temp.fecha).toLocaleDateString(),
    ),
    datasets: [
      {
        label: "Temperatura",
        data: temperatura.map((temp) => temp.valor),
        fill: false,
        borderColor: "#164BC6",
        tension: 0.1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Datos de temperatura por semana",
        font: {
          size: 16,
        },
      },
      legend: {
        position: "top" as const,
      },
    },
  };

  return (
    <div className="md:w-1/2 lg:w-3/4 xl:w-2/3 mt-6">
      <Line data={data} options={options} />
    </div>
  );
};

export default PesoChartTemperatura;
