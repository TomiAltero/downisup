'use client'
import React from 'react';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AppLayout from "@/layouts/AppLayout";
import AdministrarTurnos from '@/components/admin/adminTurnos';


export default function Page() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthorized(false);
      router.push("/notfound");
    }
  }, [router]);

  if (!isAuthorized) {
    return null;
  }

  return (
    <AppLayout>
        <AdministrarTurnos />
    </AppLayout>
  );
}