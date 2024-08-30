import LandingLayout from "@/layouts/LandingLayout";
import { poppins } from "@/components/ui/fonts";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const diaSemana = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
const diaMes = 31;

const eventCards = [
    {
        title: "Event 1",
        shortDescription: "Short description for Event 1",
        longDescription: "Long description for Event 1",
        image: "/chicasPlaza.jpg"
    },
    {
        title: "Event 2",
        shortDescription: "Short description for Event 2",
        longDescription: "Long description for Event 2",
        image: "/chicasPlaza.jpg"
    },
    {
        title: "Event 3",
        shortDescription: "Short description for Event 3",
        longDescription: "Long description for Event 3",
        image: "/chicasPlaza.jpg"
    }
];


export default function AccionesPage() {
    return (
        <LandingLayout>
            <main className={`h-screen flex flex-col items-center ${poppins.className}`}>
                <h1 className="text-4xl mt-22 mb-5 text-custom-blue font-semibold">Acciones</h1>
                <section className="flex w-full px-30">
                    <section className="flex flex-col w-full items-center">
                        {
                            eventCards.map((event, index) => (
                                <article key={index} className="flex items-center justify-center w-120 h-96 bg-gray-300 rounded-lg shadow-md p-5 m-5 gap-5">
                                    <Image src={event.image} alt="Event" className="object-cover rounded-3xl" width={250} height={250}/>
                                    <article className="flex flex-col">
                                        <h2 className="text-xl mt-5 mb-2 text-custom-blue font-semibold">{event.title}</h2>
                                        <p className="text-sm text-center text-gray-700">{event.shortDescription}</p>
                                        <Button className="mt-5 bg-custom-blue text-white px-5 py-2 rounded-lg">Ver más</Button>
                                    </article>
                                </article>
                            ))
                        }
                    </section>

                    <section>
                        <h2 className="text-xl mt-12 mb-5 text-custom-blue font-semibold">
                            Proximos Eventos
                        </h2>
                        <div className="calendar-container">
                            <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-blue-900">
                                {diaSemana.map((dia) => (
                                    <div key={dia}>{dia}</div>
                                ))}
                            </div>
                        
                            <div className="grid grid-cols-7 gap-2 text-center text-black text-sm">
                                {Array.from({ length: diaMes }, (_, i) => i + 1).map((dia) => (
                                    <div key={dia} className="h-10 flex items-center justify-center border rounded-lg bg-gray-100">
                                    {dia}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </LandingLayout>
    );
}