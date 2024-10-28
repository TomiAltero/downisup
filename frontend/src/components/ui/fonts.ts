import { Lusitana, Nunito, Open_Sans, Playfair_Display, Poppins} from "next/font/google";

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ["700", "400"]
})

export const nunito = Nunito({
    subsets : ["latin"],
    weight : ["500", "700", "900"]
})

export const opensans = Open_Sans({
    subsets : ["latin"],
    weight : ["400", "700", "800", "300"]
})


export const playfairdisplay = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
})

export const poppins = Poppins({
    subsets : ["latin"],
    weight : ["400","500","600","700"]
})