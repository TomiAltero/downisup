"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import LandingLayout from "@/layouts/LandingLayout";

const products = [
  { id: 1, name: "Producto 1", price: "$10", image: "/product1.jpg" },
  { id: 2, name: "Producto 2", price: "$20", image: "/product2.jpg" },
  { id: 3, name: "Producto 3", price: "$30", image: "/product3.jpg" },
  // Agrega más productos aquí
];

export default function Tienda() {
  return (
    <LandingLayout>
      <main className="flex flex-col justify-center">
        {/* Sección del carrusel de productos destacados */}
        <section className="relative w-full mb-22 h-[300px]">
          {/* Título sobre el carrusel */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">Productos Destacados</h1>
          </div>

          {/* Carrusel de productos */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000, // Cambia cada 3 segundos
              disableOnInteraction: false,
            }}
            loop={true} // Vuelve a la primera imagen después de la última
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
    </LandingLayout>
  );
}