'use client';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import AppLayout from '@/layouts/AppLayout';
import PsychologySessionForm from '@/components/FormsMedicals/psychologySessionForm';

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

  return (
    <AppLayout>
      <PsychologySessionForm hijoId={id as string} />
    </AppLayout>
  );
};

export default Page;

