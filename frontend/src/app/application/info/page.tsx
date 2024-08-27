"use client";
import React, { useEffect, useState } from "react";
import InfoMedical from '../../../components/infoMedical';
import AppLayout from "@/layouts/AppLayout";

const Page = () => {
  const [hijoId, setHijoId] = useState("some-default-hijoId"); 
  const [showInfoMedical, setShowInfoMedical] = useState(true);

  useEffect(() => {
    console.log("Current hijoId:", hijoId); 
  }, [hijoId]);

  const handleCloseInfoMedical = () => {
    setShowInfoMedical(false);
  };

  return (
    <AppLayout>
      <main className="flex items-center h-full">
       <InfoMedical /> 
      </main>
    </AppLayout>
  );
};
export default Page;

