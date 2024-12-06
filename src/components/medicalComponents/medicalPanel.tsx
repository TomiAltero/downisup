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
import { motion } from "framer-motion";

interface PanelMedicoProps {
  idHijo: number;
}

export default function PanelMedico({ idHijo }: PanelMedicoProps) {
  const [showInfoMedical, setShowInfoMedical] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // Check on initial render
    window.addEventListener("resize", checkMobile); // Update on window resize
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getPsycholgyTherapies(idHijo);
        console.log("Datos del usuario:", userData);

        setUserName(
          `${userData.hijo?.nombre || "Nombre no disponible"} ${
            userData.hijo?.apellido || "Apellido no disponible"
          }`,
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

  if (isMobile) {
    return (
      <section className="flex items-center justify-center h-screen">
        <Typography
          variant="h6"
          component="p"
          className="text-center text-red-600 dark:text-red-400"
        >
          El panel medico no es apto para dispositivos móviles
        </Typography>
      </section>
    );
  }

  return (
    <section className="p-4">
      <Typography
        variant="h4"
        component="h2"
        sx={{ mb: 4, textAlign: "left", fontWeight: "bold", ml: 2 }}
        className="dark:text-white"
      >
        Panel Médico - {userName}
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
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
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <PopUpPsychologycalSession
            onClose={handleCloseAjustes}
            hijoId={idHijo}
          />
        </motion.div>
      )}
      {showInfoMedical && selectedCategory === "speech" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <PopUpSpeechTherapySession
            onClose={handleCloseAjustes}
            hijoId={idHijo}
          />
        </motion.div>
      )}
      {showInfoMedical && selectedCategory === "physiological" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <PopUpPhysiologycalTherapies
            onClose={handleCloseAjustes}
            hijoId={idHijo}
          />
        </motion.div>
      )}
      {showInfoMedical && selectedCategory === "neurological" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <PopUpNeurologicalTherapies
            onClose={handleCloseAjustes}
            hijoId={idHijo}
          />
        </motion.div>
      )}
    </section>
  );
}
