"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import LandingLayout from "@/layouts/LandingLayout";
import { FooterWithLinks } from "@/components/footerLinks";


const products = [
  { 
    id: 1, 
    name: "Calendario", 
    price: "10", 
    image: "/persona.webp",          
    hoverImage: "/mision.png",
    description: "Producto1" 
  },
  { 
    id: 2, 
    name: "B", 
    price: "20", 
    image: "/persona2.webp", 
    hoverImage: "/persona2-hover.webp", 
    description: "Producto2" 
  },
  { 
    id: 3, 
    name: "C", 
    price: "30", 
    image: "/persona2.webp", 
    hoverImage: "/mision.png", 
    description: "Producto3" 
  },
  { 
    id: 4, 
    name: "4", 
    price: "30", 
    image: "/persona2.webp", 
    hoverImage: "/mision.png", 
    description: "Producto3" 
  },
  // Agrega más productos aquí con sus respectivas imágenes
];

export default function Tienda() {
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

  const handleMouseEnter = (productId: number) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  return (
    <LandingLayout>
      {/* Sección del carrusel de productos destacados - sin límite de ancho */}
      <section className="relative w-fullscreen pt-16" style={{ height: "300px" }}>
        {/* Título sobre el carrusel */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold mt-10">Nuestra Tienda</h1>
        </div>

        {/* Carrusel de productos */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000, // Cambia cada 3 segundos
            disableOnInteraction: false,
          }}
          loop={true} // Vuelve a la primera imagen después de la última
          navigation={false} // Deshabilita las flechas de navegación
          allowTouchMove={false} // Deshabilita el arrastre manual
          className="h-full w-full"
        >
          {products.map(product => (
            <SwiperSlide key={product.id} className="relative h-full">
              <Image
                src="/background.png"
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="z-[-1]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-900 opacity-50 flex items-center justify-center">
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="flex justify-center">
        {/* Contenedor Principal con ancho limitado */}
        <main className="p-4 max-w-5xl mx-auto w-full">
          {/* Sección de productos en la tienda */}
          <section className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Productos destacados</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map(product => (
                <div
                  key={product.id}
                  className="border rounded-lg overflow-hidden shadow-md transform scale-90 transition-transform hover:scale-95"
                  onMouseEnter={() => handleMouseEnter(product.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    src={hoveredProductId === product.id ? product.hoverImage : product.image}
                    alt={product.name}
                    width={255} // Reducido un 15% de 300px
                    height={170} // Reducido un 15% de 200px
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3"> {/* Ajusté el padding para que coincida con el tamaño más pequeño */}
                    <h2 className="text-lg font-semibold text-center mb-2">{product.name}</h2>
                    <p className="text-gray-700 mb-3 text-left">{product.description}</p>
                    <p className="text-lg font-bold text-gray-900 mb-3 text-left">${product.price}</p>
                    <div className="text-center">
                      <button className="bg-blue-900 text-white py-1.5 px-5 rounded-full shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-700">
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      <FooterWithLinks />

    </LandingLayout>
  );
}
