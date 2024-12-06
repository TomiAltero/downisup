"use client";
import { SignUp } from "@/components/UserForms/sign-up";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="flex justify-center items-center h-screen">
      <section className="flex justify-center items-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SignUp />
        </motion.div>
      </section>
    </main>
  );
}
