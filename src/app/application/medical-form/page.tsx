'use client';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import AppLayout from '@/layouts/AppLayout';
import { getUserProfile } from '@/lib/utils'; 

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null); 

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
        Hola!
    </AppLayout>
  );
};

export default Page;

