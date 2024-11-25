"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import RegisterForm from "@/components/formClubAmigos";
import { FooterWithLinks } from './footerLinks';

const Clubdeamigos = () => {

  return (
    <section className="bg-white">
      <section
        className="relative w-full h-screen mb-10" style={{ height: "250px" }} >
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold mt-10">
            CLUB DE AMIGOS
          </h1>
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
          <SwiperSlide className="relative h-screen">
            <Image
              src="/background.png"
              alt="Background 1"
              layout="fill"
              objectFit="cover"
              className="z-[-1]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-700 opacity-50"></div>
          </SwiperSlide>

          <SwiperSlide className="relative h-screen">
            <Image
              src="/chicasPlaza.jpg"
              alt="Background 2"
              layout="fill"
              objectFit="cover"
              className="z-[-1]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-700 opacity-50"></div>
          </SwiperSlide>

          <SwiperSlide className="relative h-screen">
            <Image
              src="/chicos.jpeg"
              alt="Background 3"
              layout="fill"
              objectFit="cover"
              className="z-[-1]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-700 opacity-50"></div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4 text-center text-custom-blue">SUMATE A NUESTRO CLUB!!</h1>
          <p className=" text-xl text-center mb-5">Para llevar a cabo nuestro sueño, buscamos empresas o voluntarios que tengan el mismo compromiso 
                                                    por la inclusión y el cambio de mirada sobre la discapacidad. Que nos acompañen en este camino, nos ayudará 
                                                    a que nuestros programas se fortalezcan y sigan creciendo.
                                                    Los lazos creados harán que la vida independiente de las personas con Síndrome de Down deje de ser un sueño 
                                                    y sea una realidad.</p>
          <div className="flex justify-center mt-5">          
          <Image
              width={400}
              height={400}
              src="/voluntario.png"
              alt="voluntario"
            />
            
          </div>

          <p className="text-xl text-center mb-10">&quot;Completa el formulario...</p>

          <RegisterForm />
      </section>
      <section/>
      <FooterWithLinks/>

    </section>
  );
};

export default Clubdeamigos;
