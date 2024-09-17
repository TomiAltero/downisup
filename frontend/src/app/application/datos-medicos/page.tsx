"use client";
import React, { useEffect, useState, Suspense } from "react";
import { CardChildren } from '../../../components/medicalComponents/cardChildrens';
import { DefaultTable } from '../../../components/medicalComponents/workShiftTable';
import PieChart from "@/components/graphs/graph";
import { useRouter } from "next/navigation";
import AppLayout from "@/layouts/AppLayout";
import '../page.css'; 

const Page = () => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [token, setToken] = useState<string>("");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      setTimeout(() => setShowContent(true), 100); 
    } else {
      setIsAuthorized(false);
      router.push("/notfound");
    }
  }, [router]);

  if (!isAuthorized) {
    return null;
  }

  return (
    <AppLayout>
      <main className={`h-full ${showContent ? 'fade-in' : 'initial'} flex flex-col items-center p-4`}>
        <div className="w-full max-w-screen-xl mb-8 bg-gray-50 p-6 rounded-md">
          <div className="flex gap-4">
            <Suspense fallback={<p>Cargando...</p>}>
              <CardChildren token={token} />
            </Suspense>
            <div className="flex-1 bg-gray-50 p-4 rounded-md">
              <Suspense fallback={<p>Cargando...</p>}>
                <PieChart />
              </Suspense>
            </div>
          </div>
        </div>
        <div className="w-full max-w-screen-xl flex justify-start gap-4 mt-8">
          <div className="bg-gray-50 p-4 rounded-md flex-1">
            <Suspense fallback={<p>Cargando...</p>}>
              <DefaultTable />
            </Suspense>
          </div>
        </div>
      </main>
    </AppLayout>
  );
};

export default Page;

