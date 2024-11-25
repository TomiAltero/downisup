"use client";
import React, { useEffect, useState } from "react";
import Perfil from "@/components/profileComponents/perfil";
import { useRouter } from "next/navigation";
import AppLayout from "@/layouts/AppLayout";
import { Suspense } from "react";
import ClipLoader from "react-spinners/ClipLoader";

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
    return null;
  }

  return (
    <AppLayout>
      <main className="flex items-center justify-center h-full dark:bg-gray-700">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <ClipLoader color="#1e3a8a" size={80} />
            </div>
          }
        >
          <Perfil token={token} />
        </Suspense>
      </main>
    </AppLayout>
  );
}

