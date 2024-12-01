"use client";
import React, { useEffect, useState, Suspense } from "react";
import { ChildrenList } from "@/components/Childrens/childrenList";
import { useRouter } from "next/navigation";
import AppLayout from "@/layouts/AppLayout";

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
      <main className={`h-full ${showContent ? 'fade-in' : 'initial'}`}>
        <Suspense fallback={<p>Cargando...</p>}>
          <ChildrenList token={token}/>
        </Suspense>
      </main>
    </AppLayout>
  );
};

export default Page;
