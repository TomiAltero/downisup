import LandingLayout from "@/layouts/LandingLayout";
import { poppins } from "@/components/ui/fonts";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FaInstagram, FaYoutube, FaWhatsapp, FaFacebook } from "react-icons/fa";

const diaSemana = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
const diaMes = 31;

const eventCards = [
    {
        title : "Down is Up - event 1",
        shortDesc : " lorem isdiasidoasdiaisdaosdiasdas",

    },
    {

    },
    {

    },
]


export default function Accionespage() {
    return (
        <LandingLayout>
            <main className={`h-screen flex flex-col justify-start items-center ${poppins.className}`}>
                <h1 className="text-4xl mt-22 mb-5 text-custom-blue font-semibold">Acciones</h1>
                <section className="flex justify-between w-full px-30">
                    <section className="flex flex-col justify-center items-center">
                        <h1 className="text-black">
                            Card de evento
                        </h1>
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