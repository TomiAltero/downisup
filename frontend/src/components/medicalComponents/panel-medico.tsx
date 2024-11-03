import React, { useState, useEffect } from "react";
import MedicalHistoryCard from "@/components/ui/cardMedical";
import PopUpPsychologycalSession from "../PopUpsMedicalData/popUpPsychologycalSession";
import PopUpSpeechTherapySession from "../PopUpsMedicalData/popUpSpeechSession";
import PopUpPhysiologycalTherapies from "../PopUpsMedicalData/popUpPhysiologicalSession";
import PopUpNeurologicalTherapies from "../PopUpsMedicalData/popUpNeurologicalSession";
import Typography from "@mui/material/Typography";
import { getPsycholgyTherapies } from "@/lib/utils";
import {
  RiMentalHealthFill,
  RiUserVoiceFill,
  RiBodyScanFill,
  RiBrainFill,
} from "react-icons/ri";

interface PanelMedicoProps {
  idHijo: number;
}

export default function PanelMedico({ idHijo }: PanelMedicoProps) {
  const [showInfoMedical, setShowInfoMedical] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getPsycholgyTherapies(idHijo);
        console.log("Datos del usuario:", userData);

        setUserName(
          `${userData.hijo?.nombre || "Nombre no disponible"} ${userData.hijo?.apellido || "Apellido no disponible"}`,
        );
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
        setUserName("Usuario desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [idHijo]);

  const handleViewMoreClick = (category: string) => {
    setSelectedCategory(category);
    setShowInfoMedical(true);
  };

  const handleCloseAjustes = () => {
    setShowInfoMedical(false);
    setSelectedCategory(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <section>
      <Typography
        variant="h4"
        component="h2"
        sx={{ mb: 4, textAlign: "left", fontWeight: "bold", ml: 2 }}
        className=" dark:text-white"
      >
        Panel Médico - {userName}
      </Typography>
      <div className="flex justify-between gap-8">
        <MedicalHistoryCard
          onViewMoreClick={() => handleViewMoreClick("psychological")}
          date="Ultima actualizacion: 12/08/2024"
          category="Evaluaciones Psicológicas"
          icon={<RiMentalHealthFill />}
        />
        <MedicalHistoryCard
          onViewMoreClick={() => handleViewMoreClick("speech")}
          date="Ultima Actualizacion: 12/08/2024"
          category="Evaluaciones Fonoaudiólogicas"
          icon={<RiUserVoiceFill />}
        />
        <MedicalHistoryCard
          onViewMoreClick={() => handleViewMoreClick("physiological")}
          date="Ultima actualizacion: 12/08/2024"
          category="Evaluaciones Fisiológicas"
          icon={<RiBodyScanFill />}
        />
        <MedicalHistoryCard
          onViewMoreClick={() => handleViewMoreClick("neurological")}
          date="Ultima actualizacion: 12/08/2024"
          category="Evaluaciones Neurológicas"
          icon={<RiBrainFill />}
        />
      </div>

      {showInfoMedical && selectedCategory === "psychological" && (
        <PopUpPsychologycalSession
          onClose={handleCloseAjustes}
          hijoId={idHijo}
        />
      )}
      {showInfoMedical && selectedCategory === "speech" && (
        <PopUpSpeechTherapySession
          onClose={handleCloseAjustes}
          hijoId={idHijo}
        />
      )}
      {showInfoMedical && selectedCategory === "physiological" && (
        <PopUpPhysiologycalTherapies
          onClose={handleCloseAjustes}
          hijoId={idHijo}
        />
      )}
      {showInfoMedical && selectedCategory === "neurological" && (
        <PopUpNeurologicalTherapies
          onClose={handleCloseAjustes}
          hijoId={idHijo}
        />
      )}
    </section>
  );
}
