import type { Metadata } from "next";
import "@/app/globals.css";
import Sidebar from "@/components/Sidebar/index";
import HeadBar from "@/components/HeadbarElements/index";

export const metadata: Metadata = {
  title: "Down Is Up",
  description:
    "We are an non-profit organization that helps kids with Down Syndrome",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className="flex h-screen dark:bg-gray-700"
      style={{
        minHeight: "100vh", // Elimina cualquier espacio blanco
        backgroundColor: "background.default",
      }}
    >
      <Sidebar />
      <div className="flex flex-col w-full">
        <HeadBar />
        <div className="flex-grow p-4">{children}</div>
      </div>
    </main>
  );
}
