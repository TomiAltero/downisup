'use client'
import AppLayout from "@/layouts/AppLayout"
import { poppins } from "@/components/ui/fonts"
import { Button} from "@/components/ui/button"
import { CalendarIcon, DocumentIcon } from "@/components/ui/icons"
import TerapiasLayout from "@/layouts/TerapiasLayout"
import Link from "next/link"
export default function TerapiasPage() {
    return (
        <AppLayout>
                <TerapiasLayout>
                    <main className="h-full flex flex-col pt-25 items-center">
                        <section className={` flex gap-8`}>
                            
                            <Link href={"/application/terapias/pedir-turno"}>
                                <Button  className="hover:-translate-y-2 transition-transform duration-500 ease-in-out flex flex-col w-70 h-60 gap-y-8 bg-custom-blue rounded-2xl justify-center items-center">
                                    <DocumentIcon className="size-16"/>
                                        <h3 className="text-white text-center text-lg">
                                            Perdir Un Turno
                                        </h3>
                                </Button>
                            </Link>
                            <Link href={"/application/terapias/ver-turnos"}>
                                <Button className="hover:-translate-y-2 transition-transform duration-500 ease-in-out flex flex-col w-70 h-60 gap-y-8 bg-custom-blue rounded-2xl justify-center items-center">
                                <CalendarIcon className="size-16"/>
                                    <h3 className="text-white text-center text-lg ">
                                        Ver Mis Turnos
                                    </h3>       
                                </Button>
                            </Link>
                        </section>
                        
                    </main>
                </TerapiasLayout>
        </AppLayout>
    ) 




}