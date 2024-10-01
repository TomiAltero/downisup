'use client'
import AppLayout from "@/layouts/AppLayout";
import TerapiasLayout from "@/layouts/TerapiasLayout";
import { useParams } from "next/navigation"
import Calendar from "@/components/calendar/Calendar"
export default function PedirTurnoPorEspecialidadPage(){
    const {speciality} = useParams()
    return (
        <AppLayout>
            <TerapiasLayout>
                <section className="">

                    <h3 className="text-lg m-4">Selecciona un turno para la especialidad: <span className="font-bold">{speciality}</span></h3>
                    <Calendar />
                </section>
            </TerapiasLayout>
        </AppLayout>
    )

}