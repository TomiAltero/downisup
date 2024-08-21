"use client";
import React, { useState } from "react";
import MedicalHistoryCard from "@/components/ui/cardMedical";
import InfoMedical from './infoMedical'
export default function PanelMedico() {
  const [showInfoMedical, setshowinfomedical] = useState(false);

  const handleViewMoreClick = () => {
    setshowinfomedical(true);
  };

  const handleCloseAjustes = () => {
    setshowinfomedical(false);
  };

  return (
    <section>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 xl:gap-7.5">
        <MedicalHistoryCard
          date="Evaluaciones Psicológicas"
          onViewMoreClick={handleViewMoreClick}
          category="Ultima actualizacion: 12/08/2024"
        />
        <MedicalHistoryCard
          date="Evaluaciones Neurológicas"
          onViewMoreClick={handleViewMoreClick}
          category="Ultima actualizacion: 12/08/2024"
        />
        <MedicalHistoryCard
          date="Evaluaciones Fisiológicas"
          onViewMoreClick={handleViewMoreClick}
          category="Ultima actualizacion: 12/08/2024"
        />
      </div>
      {showInfoMedical && <InfoMedical onClose={handleCloseAjustes} />}
    </section>
  );
}

