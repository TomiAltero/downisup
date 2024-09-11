'use client'
import AppLayout from "@/layouts/AppLayout"
import TerapiasLayout from "@/layouts/TerapiasLayout"
import { useTerapiasContext} from "@/contexts/TerapiasContext"
import { useEffect } from 'react'
import PedirTurno from "@/components/pedirturno"
export default function PedirTurnoPage() {
    return (
        <AppLayout>
            <TerapiasLayout>
                <PedirTurno />
            </TerapiasLayout>
        </AppLayout>
    )
}