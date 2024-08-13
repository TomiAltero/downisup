"use client";
import React, { useEffect, useState, Suspense } from "react";
import { PanelHijo } from "@/components/panel-hijos";
import { useRouter } from "next/navigation";
import AppLayout from "@/layouts/AppLayout";
const Page = () => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
    setToken(token);
    }
    else {
      setIsAuthorized(false);
      router.push("/notfound");
    }
  }, [router]);

  if (!isAuthorized) {
    return null;
  }

  return (
    <AppLayout>
      <main className="flex items-center h-full">
        <Suspense fallback={<p>Cargando...</p>}>
          <PanelHijo token={token}/>
        </Suspense>
      </main>
    </AppLayout>
  );
};

export default Page;
