// components/tienda.tsx
'use client'
import React, { useState } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FooterWithLinks } from "@/components/footerLinks";
import { ProductCard } from "./ProductCard";  
import { FaTrash } from 'react-icons/fa';

const products = [
  { 
    id: 1, 
    name: "CALENDARIO 2024", 
    price: "4000.00", 
    image: "/calendario2024.png",          
    hoverImage: "/chicosPlaza.jpg", 
  },
  { 
    id: 2, 
    name: "MEDIAS DE LA FUNDACION", 
    price: "6999.99", 
    image: "/medias.png", 
    hoverImage: "/mision.png",  
  },
  // Agrega más productos aquí
];

export default function Tienda() {
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);
  const [cart, setCart] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  
  const handleMouseEnter = (productId: number) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setTotal((prevTotal) => prevTotal + parseFloat(product.price));
  };

  const removeFromCart = (productId: number, price: string) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === productId);
      if (existingProduct && existingProduct.quantity > 1) {
        return prevCart.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        );
      } else {
        return prevCart.filter((item) => item.id !== productId);
      }
    });
    setTotal((prevTotal) => prevTotal - parseFloat(price));
  };

  return (
    <section>
      {/* Carrusel de productos destacados */}
      <section className="relative w-fullscreen pt-16" style={{ height: "250px" }}>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold mt-10">NUESTRA TIENDA</h1>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={false}
          allowTouchMove={false}
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <main className="p-4 w-full max-w-screen-xl mx-auto">
        {/* Productos destacados */}
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
                hovered={hoveredProductId === product.id}
                onHover={handleMouseEnter}
                onLeave={handleMouseLeave}
                onAddToCart={() => addToCart(product)}
              />
            ))}
          </div>
        </section>

        {/* Carrito de compras */}
        <section className="py-10">
          <h2 className="text-2xl font-bold mb-4 text-custom-blue">Carrito de compras</h2>
          {cart.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            <>
              <ul>
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between text-lg items-center mb-4">
                    <span>{item.name} - ${item.price} x {item.quantity}</span>
                    <button 
                      className="bg-red text-white px-2 py-1 rounded-lg flex items-center" 
                      onClick={() => removeFromCart(item.id, item.price)}
                    >
                      <FaTrash className="mr-2" /> {/* Icono de basura */}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="text-right text-xl text-custom-blue font-bold">
                Total: ${total.toFixed(2)}
              </div>
              <button className="bg-black">
                <a 
                  className="bg-custom-blue text-white px-4 py-2 rounded-lg mt-4 w-full text-center hover:bg-blue-700 transition duration-300" 
                  href="/application/form-checkout"
                >
                  Finalizar Compra
                </a>
              </button>
            </>
          )}
        </section>
      </main>

      <FooterWithLinks />
    </section>
  );
}
