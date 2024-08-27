
"use client";
import React, { useEffect, useState } from "react";
import PanelMedico from "@/components/panel-medico";
import { useRouter } from "next/navigation";
import AppLayout from "@/layouts/AppLayout";
import PieChart from "@/components/graph";
import BluePieChart from "@/components/bluegraph";
import '../page.css'; // Import your custom CSS file

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
      // Delay applying the fade-in class
      setTimeout(() => setShowContent(true), 100); // Adjust the delay as needed
    }
  }, [router]);

  if (!isAuthorized) {
    return null;
  }

  return (
    <AppLayout>
      <main className={`flex flex-col items-center h-full p-4 space-y-4 ${showContent ? 'fade-in' : 'initial'}`}>
        <div className="w-full max-w-screen-lg mb-8">
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <PanelMedico />
          </div>
        </div>
        <div className="w-full max-w-screen-lg flex justify-start space-x-8 mt-16">
          <div className="bg-gray-100 p-4 rounded-md shadow-md flex-1">
            <PieChart />
          </div>
          <div className="bg-gray-100 p-4 rounded-md shadow-md flex-1">
            <BluePieChart />
          </div>
        </div>
      </main>
    </AppLayout>
  );
};

export default Page;

