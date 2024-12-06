"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogIn } from "@/components/UserForms/log-in";
import { motion } from "framer-motion";

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
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <LogIn />
      </section>
    </motion.main>
  );
};

export default Page;
