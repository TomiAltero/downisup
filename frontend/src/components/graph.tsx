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

interface Peso {
  fecha: string;
  peso: number;
}

interface Props {
  hijoId: string;
}

const PesoChart: React.FC<Props> = ({ hijoId }) => {
  const [pesos, setPesos] = useState<Peso[]>([]);

  useEffect(() => {
    const obtenerPesos = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get<Peso[]>(
            `http://localhost:5000/api/hijos/${hijoId}/peso`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          console.log(response.data);
          setPesos(response.data);
        }
      } catch (error) {
        console.error("Error al obtener pesos:", error);
      }
    };

    obtenerPesos();
  }, [hijoId]);

  const data = {
    labels: pesos.map((peso) => new Date(peso.fecha).toLocaleDateString()), // Formatear la fecha para mejor legibilidad
    datasets: [
      {
        label: "Peso",
        data: pesos.map((peso) => peso.peso),
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
        text: "Datos de peso por semana",
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

export default PesoChart;
