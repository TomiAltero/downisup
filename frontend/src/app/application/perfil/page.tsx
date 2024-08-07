'use client'
import Perfil from "@/components/perfil";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AppLayout from "@/layouts/AppLayout";
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
    Array.isArray([]) ? null :
      <AppLayout>
        <main className="bg-custom-white h-full flex flex-col items-center">
          <section>
            <Perfil />
          </section>
        </main>
    </AppLayout>
  );
}
