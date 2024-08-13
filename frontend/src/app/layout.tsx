import React from "react";
import { opensans } from "@/components/ui/fonts";
import NavBar from "@/components/nav-bar";
import "./globals.css"

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${opensans.className} h-[100vh] text-2xl`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}                             
