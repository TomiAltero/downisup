"use client";
import React, { useEffect, useState } from "react";
import Perfil from "@/components/perfil";
import { useRouter } from "next/navigation";
import AppLayout from "@/layouts/AppLayout";
import { Suspense } from "react";

export default function Page() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<Boolean>(true);
  const [token, setToken] = useState<string | null>("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthorized(false);
      router.push("/notfound");
    }
    setToken(token);
  }, [router]);

  if (!isAuthorized) {
    return
  }

  // Add ProfileTableSkeleton component to Suspense fallback
  return (
    <AppLayout>
      <main className="flex items-center h-full">
        <Suspense fallback={<p>Cargando...</p>}>
          <Perfil token={token}/>
        </Suspense>
      </main>
    </AppLayout>
  );
};
