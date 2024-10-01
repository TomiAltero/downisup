"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Footer from "@/components/footer";
import RegisterForm from "@/components/formClubAmigos";

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
          <p className=" text-xl text-center mb-10">Completa algun formulario y un miembro de nuestro equipo se pondrán en contacto contigo para ser parte de DOWN IS UP CBA</p>

          <RegisterForm />
      </section>
      <section/>
      <Footer />

    </section>
  );
};

export default Clubdeamigos;
