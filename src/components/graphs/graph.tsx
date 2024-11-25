import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import PopUpPsychologycalSession from "@/components/PopUpsMedicalData/popUpPsychologycalSession";
import { getChildrenAndUser } from "@/lib/utils";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = () => {
  const [showInfoMedical, setShowInfoMedical] = useState(false);
  const [hijoId, setHijoId] = useState(1);
  const [tipoUsuarioId, setTipoUsuarioId] = useState<number | null>(null);
  const [chartTitle, setChartTitle] = useState("");
  const [data, setData] = useState({
    labels: ["Presencia", "Ausencia"],
    datasets: [
      {
        label: "",
        data: [7, 3],
        backgroundColor: ["rgb(30, 58, 138)", "rgba(173, 216, 230, 0.6)"],
        borderColor: ["rgba(0, 123, 255, 1)", "rgba(173, 216, 230, 1)"],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const allChildren = await getChildrenAndUser({ token });
        const userTipo = allChildren.usuario.tipoUsuarioId;
        setTipoUsuarioId(userTipo);

        if (userTipo === 1) {
          setChartTitle("");
        } else if (userTipo === 2) {
          setChartTitle("");
        }
      }
    };

    fetchUserData();
  }, []);

  const handleChartClick = (event: any, elements: any[]) => {
    // Verifica si se ha clickeado un elemento del gráfico
    if (elements && elements.length > 0) {
      setShowInfoMedical(true);
    }
  };

  const handleClose = () => {
    setShowInfoMedical(false);
  };

  return (
    <div className="relative flex justify-center dark:text-white">
      <div style={{ width: "100%", maxWidth: "260px" }}>
        <h2 className="text-center dark:text-white">{chartTitle} 7/10</h2>
        <Pie
          data={data}
          options={{
            onClick: (event, elements) => handleChartClick(event, elements),
          }}
        />
      </div>
      {showInfoMedical && (
        <PopUpPsychologycalSession onClose={handleClose} hijoId={hijoId} />
      )}
    </div>
  );
};

export default PieChart;
