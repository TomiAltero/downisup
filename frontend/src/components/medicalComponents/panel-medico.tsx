import React, { useState, useEffect } from "react";
import MedicalHistoryCard from "@/components/ui/cardMedical";
import PopUpPsychologycalSession from '../PopUpsMedicalData/popUpPsychologycalSession';
import PopUpSpeechTherapySession from '../PopUpsMedicalData/popUpSpeechSession';
import PopUpPhysiologycalTherapies from "../PopUpsMedicalData/popUpPhysiologicalSession";
import PopUpNeurologicalTherapies from "../PopUpsMedicalData/popUpNeurologicalSession";
import Typography from "@mui/material/Typography";
import { getPsycholgyTherapies } from "@/lib/utils";

interface PanelMedicoProps {
  idHijo: number; 
}

export default function PanelMedico({ idHijo }: PanelMedicoProps) {
  const [showInfoMedical, setShowInfoMedical] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getPsycholgyTherapies(idHijo); 
        console.log("Datos del usuario:", userData);

        setUserName(`${userData.hijo?.nombre || "Nombre no disponible"} ${userData.hijo?.apellido || "Apellido no disponible"}`);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
        setUserName("Usuario desconocido");
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

  return (
    <section>
      <Typography
        variant="h4"
        component="h2"
        sx={{ mb: 4, textAlign: "left", fontWeight: "bold", ml: 2 }}
      >
        Panel Médico - {userName}
      </Typography>
      <div className="flex justify-between">
        <MedicalHistoryCard
          date="Evaluaciones Psicológicas"
          onViewMoreClick={() => handleViewMoreClick("psychological")}
          category="Ultima actualizacion: 12/08/2024"
        />
        <MedicalHistoryCard
          date="Evaluaciones Fonoaudiólogicas"
          onViewMoreClick={() => handleViewMoreClick("speech")}
          category="Ultima actualizacion: 12/08/2024"
        />
        <MedicalHistoryCard
          date="Evaluaciones Fisiológicas"
          onViewMoreClick={() => handleViewMoreClick("physiological")}
          category="Ultima actualizacion: 12/08/2024"
        />
        <MedicalHistoryCard
          date="Evaluaciones Neurológicas"
          onViewMoreClick={() => handleViewMoreClick("neurological")}
          category="Ultima actualizacion: 12/08/2024"
        />
      </div>

      {showInfoMedical && selectedCategory === "psychological" && (
        <PopUpPsychologycalSession onClose={handleCloseAjustes} hijoId={idHijo} />
      )}
      {showInfoMedical && selectedCategory === "speech" && (
        <PopUpSpeechTherapySession onClose={handleCloseAjustes} hijoId={idHijo} />
      )}
      {showInfoMedical && selectedCategory === "physiological" && (
        <PopUpPhysiologycalTherapies onClose={handleCloseAjustes} hijoId={idHijo} />
      )}
      {showInfoMedical && selectedCategory === "neurological" && (
        <PopUpNeurologicalTherapies onClose={handleCloseAjustes} hijoId={idHijo} />
      )}
    </section>
  );
}

