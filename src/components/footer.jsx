import { React } from "react";
import { FaInstagram, FaYoutube, FaWhatsapp, FaFacebook } from "react-icons/fa";

export function Footer() {

    return (  
        <footer className="w-full py-5 bg-gray-700 mt-auto fade-in">
            <div className="flex justify-center space-x-8 flex-wrap">
            <a href="https://www.instagram.com/downisupcba/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white text-2xl hover:text-gray-400" />
            </a>
            <a href="https://www.youtube.com/@downisupcordoba2759" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-white text-2xl hover:text-gray-400" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5493517960194" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-white text-2xl hover:text-gray-400" />
            </a>
            <a href="https://www.facebook.com/downisupcba?locale=es_LA" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white text-2xl hover:text-gray-400" />
            </a>
            </div>
        </footer>
);
}

export default Footer;