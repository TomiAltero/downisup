"use client";
import React, { useEffect, useState } from "react";
import Inicio from "@/components/inicio";
import AppLayout from "@/app/applayout";
import { useRouter } from "next/navigation";

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
      <main className="flex justify-center items-center h-full">
        <Inicio />
      </main>
    </AppLayout>
  );
};

export default Page;
