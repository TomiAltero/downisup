import React, { useState, useEffect } from "react";
import MedicalHistoryCard from "@/components/ui/cardMedical";
import InfoMedical from './infoMedical';
import Typography from "@mui/material/Typography";
import { getAll } from "@/lib/utils";

interface PanelMedicoProps {
  idHijo: number; 
}

export default function PanelMedico({ idHijo }: PanelMedicoProps) {
  const [showInfoMedical, setShowInfoMedical] = useState(false);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getAll(idHijo); 
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
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 xl:gap-7.5">
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
      </div>
      {showInfoMedical && <InfoMedical onClose={handleCloseAjustes} hijoId={idHijo} />}
    </section>
  );
}

