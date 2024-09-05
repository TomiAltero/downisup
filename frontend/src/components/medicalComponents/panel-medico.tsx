import React, { useState, useEffect } from "react";
import MedicalHistoryCard from "@/components/ui/cardMedical";
import PopUpPsychologycalSession from '../PopUpsMedicalData/popUpPsychologycalSession';
import Typography from "@mui/material/Typography";
import { getPsycholgyTherapies} from "@/lib/utils";

interface PanelMedicoProps {
  idHijo: number; 
}

export default function PanelMedico({ idHijo }: PanelMedicoProps) {
  const [showInfoMedical, setShowInfoMedical] = useState(false);
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

  const handleViewMoreClick = () => {
    console.log("Ver más clickeado");
    setShowInfoMedical(true);
  };

  const handleCloseAjustes = () => {
    setShowInfoMedical(false);
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
          onViewMoreClick={handleViewMoreClick}
          category="Ultima actualizacion: 12/08/2024"
        />
        <MedicalHistoryCard
          date="Evaluaciones Fonoaudiólogicas"
          onViewMoreClick={handleViewMoreClick}
          category="Ultima actualizacion: 12/08/2024"
        />
        <MedicalHistoryCard
          date="Evaluaciones Fisiológicas"
          onViewMoreClick={handleViewMoreClick}
          category="Ultima actualizacion: 12/08/2024"
        />
        <MedicalHistoryCard
          date="Evaluaciones Neurológicas"
          onViewMoreClick={handleViewMoreClick}
          category="Ultima actualizacion: 12/08/2024"
        />
      </div>
      {showInfoMedical && <PopUpPsychologycalSession onClose={handleCloseAjustes} hijoId={idHijo} />}
    </section>
  );
}
