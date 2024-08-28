import React from "react";
import { FormChildren } from "@/components/agregar-hijo";
import AppLayout from "@/layouts/AppLayout";
import Tienda from '@/components/tienda'
const Page = () => {
  return (
    <AppLayout>
      <main className="flex justify-center items-center h-full">
        <Tienda/>
      </main>
    </AppLayout>
  );
};

export default Page;