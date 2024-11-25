'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AppLayout from "@/layouts/AppLayout";
import ChatBotComponent from '@/components/ChatBotComponent';

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
    <AppLayout>
      <ChatBotComponent />
    </AppLayout>
  );
}
