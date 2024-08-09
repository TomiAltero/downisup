"use client";
import React, { useEffect, useState } from "react";
import Perfil from "@/components/perfil";
import { useRouter } from "next/navigation";
import AppLayout from "@/layouts/AppLayout";

const Page = () => {
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
      <main className="flex items-center h-full">
        <Perfil />
      </main>
    </AppLayout>
  );
};

export default Page;
