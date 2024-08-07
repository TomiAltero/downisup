import Perfil from "@/components/perfil";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthorized(false);
      router.push("/notfound");
    }
  }, [router]);

  if (!isAuthorized) {
    return null;
  }
  return (
      <main className="bg-custom-white h-full flex flex-col items-center">
        <section>
          <Perfil />
        </section>
      </main>
  );
}
