import { useEffect, useState } from "react";
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
    <section className="flex justify-center items-center h-full">
      <h1 className="text-xl text-center text-gray-500">
        Sistema de chat (proximamente)
      </h1>
    </section>
  );
}
