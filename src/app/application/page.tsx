"use client";
import React, { useEffect, useState, Suspense } from "react";
import { CardChildren } from '../../components/Childrens/cardChildrens';
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
      <main className={`h-[70vh] ${showContent ? 'fade-in' : 'initial'} dark:bg-gray-700 flex flex-col items-center p-4`}>
        <div className="w-full max-w-screen-md mb-8 bg-white dark:bg-gray-900 p-6 rounded-md"> {/* Ajuste de altura */}
          <h1 className="text-3xl font-bold mb-6 self-start text-black dark:text-white"></h1> 
          <div className="flex flex-col gap-4">
            <Suspense fallback={<p className="text-black dark:text-white"><ClipLoader/></p>}>
              <CardChildren token={token} />
            </Suspense>
            <div className="flex-1 bg-white dark:bg-gray-900 p-4 rounded-md">
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
};

export default Page;
