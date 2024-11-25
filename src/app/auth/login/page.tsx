"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogIn } from "@/components/UserForms/log-in";

const Page = () => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.replace("/application");
    } else {
      setIsAuthorized(false);
    }
  }, [router]);

  if (isAuthorized) {
    return null;
  }

  return (
    <main className="flex flex-col justify-center items-center h-full">
      <section>
        <LogIn />
      </section>
    </main>
  );
};

export default Page;
