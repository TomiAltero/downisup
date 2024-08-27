import React from "react";
import { FormChildren } from "@/components/agregar-hijo";
import AppLayout from "@/layouts/AppLayout";
import FormMedical from '@/components/formulario-medico'
const Page = () => {
  return (
    <AppLayout>
      <main className="flex justify-center items-center h-full">
        <FormMedical/>
      </main>
    </AppLayout>
  );
};

export default Page;