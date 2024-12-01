'use client';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import AppLayout from '@/layouts/AppLayout';
import MedicalPanel from '@/components/medicalComponents/medicalPanel';

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

  if (!id || Array.isArray(id) || isNaN(parseInt(id))) {
    return <div>No se encontró el ID válido del hijo.</div>;
  }
  
  const numericId = parseInt(id, 10); // Convierte el ID a número
  
  return (
    <AppLayout>
      <main className="flex flex-col items-center w-full max-w-screen-xl px-4 space-y-4">
        <div className="bg-gray-50 dark:bg-gray-800 dark:text-white p-6 rounded-md w-full">
          <MedicalPanel idHijo={numericId} />
        </div>
      </main>

    </AppLayout>
  );
};

export default Page;
