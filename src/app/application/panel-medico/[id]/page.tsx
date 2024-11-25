'use client';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import AppLayout from '@/layouts/AppLayout';
import PanelMedico from '@/components/medicalComponents/panel-medico';
import PieChart from "@/components/graphs/graph";
import BluePieChart from "@/components/graphs/bluegraph";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsAuthorized(false);
      router.push('/notfound');
    } else {
      setTimeout(() => setShowContent(true), 100);
    }
  }, [router]);

  if (!isAuthorized) {
    return null;
  }

  if (!id) {
    return <div>No se encontró el ID del hijo.</div>;
  }

  const parsedId = Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10);

  if (isNaN(parsedId)) {
    return <div>El ID del hijo no es válido.</div>;
  }

  return (
    <AppLayout>
      <main className={`flex flex-col items-center h-full p-4 space-y-4 ${showContent ? 'fade-in' : 'initial'}`}>
        <div className="w-full max-w-screen-xl mb-8">
          <div className="bg-gray-50 dark:bg-gray-800 dark:text-white p-6 rounded-md">
            <PanelMedico idHijo={parsedId} />
          </div>
        </div>
        <div className="w-full max-w-screen-xl flex justify-start space-x-8 mt-16">
          <div className="bg-gray-50 dark:bg-gray-800 dark:text-white p-4 rounded-md flex-1 flex flex-col items-center">
            <PieChart />
            <button className="bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-950 text-xs mb-7 mt-8">
              Ver más
            </button>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 dark:text-white p-4 rounded-md flex-1 flex flex-col items-center">
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
