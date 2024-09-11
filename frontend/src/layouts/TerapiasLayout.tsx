import ChildProfile from "@/components/ChildProfile"
import TerapiasContextProvider from "@/contexts/TerapiasContext"
import { poppins } from "@/components/ui/fonts";
export default function TerapiasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TerapiasContextProvider>
        <section className={`h-full ${poppins.className}`}>
            <header className="w-full flex justify-between px-5">
                <h1 className="text-3xl font-semibold">Terapias</h1>
                <ChildProfile />
            </header>
            {children}
        </section>
    </TerapiasContextProvider>

  );
}
1