"use client";
import React, { useEffect, useState } from "react";
import PanelMedico from "@/components/panel-medico";
import { useRouter } from "next/navigation";
import AppLayout from "@/layouts/AppLayout";
import PieChart from "@/components/graph";
import BluePieChart from "@/components/bluegraph";
import '../page.css'; 

const Page = () => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthorized(false);
      router.push("/notfound");
    } else {
      setTimeout(() => setShowContent(true), 100); 
    }
  }, [router]);

  if (!isAuthorized) {
    return null;
  }

  return (
    <AppLayout>
      <main className={`flex flex-col items-center h-full p-4 space-y-4 ${showContent ? 'fade-in' : 'initial'}`}>
        <div className="w-full max-w-screen-lg mb-8">
          <div className="bg-gray-50 p-4 rounded-md ">
            <PanelMedico />
          </div>
        </div>
        <div className="w-full max-w-screen-lg flex justify-start space-x-8 mt-16">
          <div className="bg-gray-50 p-4 rounded-md flex-1 flex flex-col items-center">
            <PieChart />
            <button className="bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-950 text-xs mb-7 mt-8">
              Ver más
            </button>
          </div>
          <div className="bg-gray-50 p-4 rounded-md flex-1 flex flex-col items-center">
            <BluePieChart />
            <button className="bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-950 text-xs mb-7 mt-8">
              Ver más
            </button>
          </div>
        </div>
      </main>
    </AppLayout>
  );
};

export default Page;

