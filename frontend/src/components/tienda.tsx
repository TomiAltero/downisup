'use client';
import React, { useState } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import LandingLayout from "@/layouts/LandingLayout";
import { FooterWithLinks } from "@/components/footerLinks";
import { ProductCard } from "./ProductCard";  // Asegúrate de que la ruta esté correcta

const products = [
  { 
    id: 1, 
    name: "Calendario", 
    price: "10", 
    image: "/background.png",          
    hoverImage: "/chicosPlaza.jpg",
    description: "Producto1" 
  },
  { 
    id: 2, 
    name: "B", 
    price: "20", 
    image: "/background.png", 
    hoverImage: "/mision.png", 
    description: "Producto2" 
  },
  { 
    id: 3, 
    name: "C", 
    price: "30", 
    image: "/background.png", 
    hoverImage: "/mision.png", 
    description: "Producto3" 
  },
  { 
    id: 4, 
    name: "4", 
    price: "30", 
    image: "/background.png", 
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
      <section className="relative w-fullscreen pt-16" style={{ height: "250px" }}>
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
        <main className="p-4 w-full max-w-screen-xl mx-auto">
          {/* Sección de productos en la tienda */}
          <section className="gap-10 py-10">
            <h1 className="text-3xl text-custom-blue font-bold text-center mb-8">Productos destacados</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  hoverImage={product.hoverImage}
                  description={product.description}
                  hovered={hoveredProductId === product.id}
                  onHover={handleMouseEnter}
                  onLeave={handleMouseLeave}
                />
              ))}
            </div>
          </section>
        </main>
      </div>


      <FooterWithLinks />

    </LandingLayout>
  );
}
