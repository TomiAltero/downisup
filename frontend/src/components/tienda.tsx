"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import LandingLayout from "@/layouts/LandingLayout";

const products = [
  { 
    id: 1, 
    name: "A", 
    price: "10", 
    image: "/persona.webp",          // Imagen por defecto
    hoverImage: "/persona-hover.webp", // Imagen al pasar el cursor
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
    image: "/persona3.webp", 
    hoverImage: "/persona3-hover.webp", 
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
              <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-700 opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-xl font-bold">{product.name}</h2>
                  <p className="text-lg">{product.price}</p>
                </div>
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
                  className="border rounded-lg overflow-hidden shadow-md"
                  onMouseEnter={() => handleMouseEnter(product.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    src={hoveredProductId === product.id ? product.hoverImage : product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-center mb-2">{product.name}</h2>
                    <p className="text-gray-700 mb-4 text-left">{product.description}</p>
                    <p className="text-lg font-bold text-gray-900 mb-4 text-left">${product.price}</p>
                    <div className="text-center">
                      <button className="bg-blue-700 text-white py-2 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-900">
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
    </LandingLayout>
  );
}
