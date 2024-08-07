import React from "react";
import { FormHijo } from "@/components/agregar-hijo";
import AppLayout from "@/layouts/AppLayout";
const Page = () => {
  return (
    <AppLayout>
      <main className="flex justify-center items-center h-full">
        <FormHijo />
      </main>
    </AppLayout>
  );
};

export default Page;
