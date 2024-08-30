"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import LandingLayout from "@/layouts/LandingLayout";

const products = [
  { id: 1, name: "", price: "", image: "/persona.webp" },
  { id: 2, name: "", price: "", image: "/persona.webp" },
  { id: 3, name: "", price: "", image: "/persona.webp" },
  // Agrega más productos aquí
];

export default function Tienda() {
  return (
    <LandingLayout>
      {/* Sección del carrusel de productos destacados - sin límite de ancho */}
      <section className="relative w-fullscreen pt-16" style={{ height: "300px" }}>
        {/* Título sobre el carrusel */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold mt-10">Productos Destacados</h1>
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
                src={product.image}
                alt={product.name}
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
            <h1 className="text-3xl font-bold text-center mb-8">Nuestra Tienda</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map(product => (
                <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="text-lg text-gray-700">{product.price}</p>
                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                      Comprar
                    </button>
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
