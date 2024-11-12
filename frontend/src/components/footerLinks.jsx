import { Typography } from '@mui/material';
import { FaInstagram, FaYoutube, FaWhatsapp, FaFacebook } from "react-icons/fa";

const LINKS = [
  {
    title: "Sobre Nosotros",
    items: [
      { name: "Quienes somos", href: "/quienessomos" },
      { name: "Como comenzamos", href: "/quienessomos" },
      { name: "Objetivos", href: "/quienessomos" },
    ],
  },
  {
    title: "Contacto",
    items: [
      { name: "Contacto", href: "/contactanos" },
      { name: "Enviar email", href: "/contactanos" },
      { name: "Redes sociales", href: "/contactanos" },
    ],
  },
  {
    title: "Donar",
    items: [
      { name: "Sumate como empresa", href: "/donar" },
      { name: "Sumate como voluntario", href: "/donar" },
      { name: "Donacion mensual", href: "/donar" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export function FooterWithLinks() {
  return (
    <footer className="relative w-full text-lg md:text-base bg-gray-700 p-6">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <Typography as="a" href="#" variant="h5" className="text-white font-bold text-2xl">
            Down Is Up
          </Typography>
        </div>

        <div className="w-full md:w-2/3 flex justify-between">
          {LINKS.map(({ title, items }) => (
            <ul key={title}>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-bold text-gray-300"
              >
                {title}
              </Typography>
              {items.map(({ name, href }) => (
                <li key={name}>
                  <Typography
                    as="a"
                    href={href}
                    color="gray"
                    className="block py-1 text-gray-400 hover:text-white"
                  >
                    {name}
                  </Typography>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-gray-600 pt-4 flex justify-between">
        <Typography
          variant="small"
          className="text-center text-gray-400 text-sm md:text-sm"
        >
          &copy; {currentYear} DownIsUp Cordoba. All Rights Reserved.
        </Typography>
        
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/downisupcba/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@downisupcordoba2759" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaYoutube />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5493517960194" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaWhatsapp />
          </a>
          <a href="https://www.facebook.com/downisupcba?locale=es_LA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}
