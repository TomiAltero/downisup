'use client';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import AppLayout from '@/layouts/AppLayout';
import PanelMedico from '@/components/panel-medico';
import PieChart from "@/components/graph";
import BluePieChart from "@/components/bluegraph";

const Page = () => {
  const { id } = useParams(); // Utiliza useParams para obtener el parámetro de la ruta
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsAuthorized(false);
      window.location.href = '/notfound';
    } else {
      setTimeout(() => setShowContent(true), 100);
    }
  }, []); 

  if (!isAuthorized) {
    return null;
  }

  if (!id) {
    return <div>No se encontró el ID del hijo.</div>;
  }

  return (
    <AppLayout>
      <main className={`flex flex-col items-center h-full p-4 space-y-4 ${showContent ? 'fade-in' : 'initial'}`}>
        <div className="w-full max-w-screen-lg mb-8">
          <div className="bg-gray-50 p-4 rounded-md">
            <PanelMedico idHijo={id as string} /> 
          </div>
        </div>
        <div className="w-full max-w-screen-lg flex justify-start space-x-8 mt-16">
          <div className="bg-gray-50 p-4 rounded-md flex-1 flex flex-col items-center">
            <PieChart />
            <button className="bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-950 text-xs mb-7 mt-8">
              Ver más
            </button>
          </div>
          <div className="bg-gray-50 p-4 rounded-md flex-1 flex flex-col items-center">
            <BluePieChart />
            <button className="bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-950 text-xs mb-7 mt-8">
              Ver más
            </button>
          </div>
          </div>
      </main>
    </AppLayout>
  );
};

export default Page;

