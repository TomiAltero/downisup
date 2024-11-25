'use client'
import { useTerapiasContext } from "@/contexts/TerapiasContext"
import { getAllSpecialities } from "@/lib/utils"
import { useEffect, useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Especialidad } from "@/types"
import { RiMentalHealthFill, RiUserVoiceFill, RiBodyScanFill, RiBrainFill } from "react-icons/ri";

export default function PedirTurno() {
    const { selectedHijo } = useTerapiasContext()
    const [specialities, setSpecialities] = useState<Especialidad[]>([])
    useEffect(() => {
        async function fetchData() {
            const specialities = await getAllSpecialities()
            console.log(specialities)
            setSpecialities(specialities)
        }
        fetchData()
    }, [])

    
    const getSpecialityIcon = (name: string) => {
        if (name === "psicologia") {
            return <RiMentalHealthFill size={40} />;
        }
        if (name === "fonoaudiologia") {
            return <RiUserVoiceFill size={40} />;
        }
        if (name === "fisiologia") {
            return <RiBodyScanFill size={40} />;
        }
        if (name === "neurologia") {
            return <RiBrainFill size={40} />;
        }
        return; // Add a default return value if the name doesn't match any icon
      }
    return (
        <section className="p-20 flex flex-col items-center justify-center gap-y-10">
            <h3 className="text-lg text-center">Selecciona la especialidad a la que quieres pedir un turno</h3>
            <article className="grid grid-cols-2 grid-rows-2 w-1/2 gap-7">
                {
                    specialities.map((especialidad: Especialidad, index) => {
                        return (
                            <Link key={index} href={`pedir-turno/${especialidad.route}`}>
                                <Button className="hover:-translate-y-2 transition-transform duration-500 ease-in-out flex flex-col w-50 h-30 bg-custom-blue rounded-2xl justify-center items-center">
                                    {
                                        getSpecialityIcon(especialidad.route)
                                    }
                                    <h3 className="text-white text-center text-lg">
                                        {especialidad.name  }
                                    </h3>
                                </Button>
                            </Link>
                        )
                    })
                }
            </article>
            <h4 className="m-0 text-sm">
                Hijo Seleccionado : {selectedHijo?.nombre} {selectedHijo?.apellido}
            </h4>
        </section>
    )
}