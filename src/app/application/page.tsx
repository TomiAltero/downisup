"use client";
import React, { useEffect, useState, Suspense } from "react";
import { CardChildren } from '../../components/medicalComponents/cardChildrens';
import { DefaultTable } from '../../components/medicalComponents/workShiftTable';
import PieChart from "@/components/graphs/graph";
import { useRouter } from "next/navigation";
import AppLayout from "@/layouts/AppLayout";
import ClipLoader from "react-spinners/ClipLoader";

const Page = () => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [token, setToken] = useState<string>("");
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      setTimeout(() => {
        setShowContent(true);
        setLoading(false); 
      }, 100); 
    } else {
      setIsAuthorized(false);
      router.push("/notfound");
    }
  }, [router]);

  if (!isAuthorized) {
    return null;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color={'#123abc'} loading={loading} size={150} />
      </div>
    );
  }

  return (
    <AppLayout>
      <main className={`h-full ${showContent ? 'fade-in' : 'initial'} dark:bg-gray-700 flex flex-col items-center p-4`}>
        <div className="w-full max-w-screen-xl mb-8 bg-white dark:bg-gray-900 p-6 rounded-md">
          <h1 className="text-3xl font-bold mb-6 self-start text-black dark:text-white"></h1> 
          <div className="flex flex-col lg:flex-row gap-4">
            <Suspense fallback={<p className="text-black dark:text-white">Cargando...</p>}>
              <CardChildren token={token} />
            </Suspense>
            <div className="flex-1 bg-white dark:bg-gray-900 p-4 rounded-md">
              <Suspense fallback={<p className="text-black dark:text-white">Cargando...</p>}>
                <PieChart />
              </Suspense>
            </div>
          </div>
        </div>
        <div className="w-full max-w-screen-xl flex justify-start gap-4 mt-8">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-md flex-1">
            <Suspense fallback={<p className="text-black dark:text-white">Cargando...</p>}>
              <DefaultTable />
            </Suspense>
          </div>
        </div>
      </main>
    </AppLayout>
  );
};

export default Page;
