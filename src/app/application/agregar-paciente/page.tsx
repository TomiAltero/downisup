import React from "react";
import { FormChildren } from "@/components/childrenComponents/agregar-hijo";
import AppLayout from "@/layouts/AppLayout";
const Page = () => {
  return (
    <AppLayout>
      <main className="flex justify-center items-center h-full">
        <FormChildren />
      </main>
    </AppLayout>
  );
};

export default Page;
