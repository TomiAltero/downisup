import { opensans } from "@/components/ui/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
      <main className="h-screen flex flex-col justify-center items-center space-y-8 ">
        <section className="relative h-full w-full flex flex-col justify-center items-center space-y-10 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/background.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="z-[-1] opacity-95"
            />
          </div>
          <section className={`${opensans.className} font-semibold z-10`}>
            <h1 className="text-center my-4 text-4xl text-white">
              Bienvenidos a
            </h1>
            <article className="text-6xl text-center text-white">
              <h1 className="mb-4 text-white">DownIsUp</h1>
              <h1 className="text-white">Córdoba</h1>
            </article>
          </section>
          <section className="flex flex-col items-center z-10">
            <Link href="/contactanos">
              <Button className="bg-custom-white text-black text-base px-4 py-2 font-semibold animate-pulse hover:text-white hover:bg-custom-blue">
                Contáctanos
              </Button>
            </Link>
          </section>
        </section>
      </main>
  );
}
