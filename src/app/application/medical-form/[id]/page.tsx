'use client';

import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import AppLayout from '@/layouts/AppLayout';
import PsychologySessionForm from '@/components/FormsMedicals/psychologySessionForm';
import NeurologicalSessionForm from '@/components/FormsMedicals/neurologicalSessionForm';
import PhysiologicalSessionForm from '@/components/FormsMedicals/physiologicalSessionForm';
import SpeechSessionForm from '@/components/FormsMedicals/speechSessionForm';
import { getUserProfile } from '@/lib/utils'; 
import Typography from "@mui/material/Typography";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null); 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsAuthorized(false);
      router.push('/notfound');
    } else {
      const fetchProfile = async () => {
        try {
          const profile = await getUserProfile({ token });
          setUserProfile(profile);
          setShowContent(true);
        } catch (error) {
          console.error('Error fetching user profile:', error);
          router.push('/notfound');
        }
      };

      fetchProfile();
    }
  }, [router]);

  if (!isAuthorized) {
    return null;
  }

  if (!id) {
    return <div>No se encontró el ID del hijo.</div>;
  }

  if (!showContent) {
    return <div>Cargando...</div>;
  }

  return (
    <AppLayout>
      {isMobile ? (
      <section className="flex items-center justify-center h-screen">
                    
                <Typography
                variant="h6"
                component="p"
                className="text-center text-red-600 dark:text-red-400"
            >
                Este formulario no es apto para dispositivos moviles
            </Typography>
            
      
      </section>
      ) : (
        <div>
          {userProfile?.specialityId === 1 ? (
            <NeurologicalSessionForm hijoId={id as string} />
          ) : userProfile?.specialityId === 2 ? (
            <PsychologySessionForm hijoId={id as string} />
          ) : userProfile?.specialityId === 3 ? (
            <SpeechSessionForm hijoId={id as string} />  
          ) : userProfile?.specialityId === 4 ? (
            <PhysiologicalSessionForm hijoId={id as string} />
          ) : (
            <div>No tienes permiso para acceder a este formulario.</div>
          )}
        </div>
      )}
    </AppLayout>
  );
};

export default Page;
