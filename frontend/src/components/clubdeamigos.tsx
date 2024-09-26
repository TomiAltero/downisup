"use client";
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

const Clubdeamigos = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const [showFormVoluntario, setShowFormVoluntario] = useState(false);
  const [showFormEmpresa, setShowFormEmpresa] = useState(false);
  const [formDataVoluntario, setFormDataVoluntario] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
    telefono: "",
    estudios: "",
    trabajaste: "",
    empresa: "",
    fechaNacimiento: "",
    comoConociste: "",
    horarios: "",
    comentario: "",
  });
  const [formDataEmpresa, setFormDataEmpresa] = useState({
    nombreEmpresa: "",
    contacto: "",
    email: "",
    telefono: "",
    direccion: "",
    cuit: "",
    actividad: "",
    horarios: "",
    comentario: "",
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const toggleFormVoluntarioVisibility = () => {
    setShowFormVoluntario(!showFormVoluntario);
  };

  const toggleFormEmpresaVisibility = () => {
    setShowFormEmpresa(!showFormEmpresa);
  };

  const handleChangeVoluntario = (e) => {
    setFormDataVoluntario({
      ...formDataVoluntario,
      [e.target.name]: e.target.value
    });
  };

  const handleChangeEmpresa = (e) => {
    setFormDataEmpresa({
      ...formDataEmpresa,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitVoluntario = (e) => {
    e.preventDefault();
    console.log(formDataVoluntario);
  };

  const handleSubmitEmpresa = (e) => {
    e.preventDefault();
    console.log(formDataEmpresa);
  };

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

      <div className="container mx-auto px-4">
        <motion.div
          className="flex justify-center"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <div className="bg-gray-100 p-10 rounded-lg shadow-lg w-full lg:w-3/4 xl:w-2/3 mx-auto">
            <h2
              className="text-2xl font-bold text-blue-900 mb-4 text-center cursor-pointer"
              onClick={toggleFormVoluntarioVisibility}
            >
              Sumate como voluntario  
            </h2>

            {showFormVoluntario && (
              <form onSubmit={handleSubmitVoluntario} className="flex flex-col w-full pt-4 mx-auto px-4 bg-white rounded-lg">
                <section className="flex flex-col lg:flex-row gap-4 mb-4">
                  <article className="flex-1">
                    <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                      Nombre
                    </label>
                    <input
                      className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                      type="text"
                      name="nombre"
                      value={formDataVoluntario.nombre}
                      onChange={handleChangeVoluntario}
                      required
                    />
                  </article>
                  <article className="flex-1">
                    <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                      Apellido
                    </label>
                    <input
                      className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                      type="text"
                      name="apellido"
                      value={formDataVoluntario.apellido}
                      onChange={handleChangeVoluntario}
                      required
                    />
                  </article>
                </section>

                <section className="flex flex-col lg:flex-row gap-4 mb-4">
                  <article className="flex-1">
                    <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                      DNI
                    </label>
                    <input
                      className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                      type="text"
                      name="dni"
                      value={formDataVoluntario.dni}
                      onChange={handleChangeVoluntario}
                      required
                    />
                  </article>
                  <article className="flex-1">
                    <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                      Email
                    </label>
                    <input
                      className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                      type="email"
                      name="email"
                      value={formDataVoluntario.email}
                      onChange={handleChangeVoluntario}
                      required
                    />
                  </article>
                </section>

                <section className="flex flex-col lg:flex-row gap-4 mb-4">
                  <article className="flex-1">
                    <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                      Teléfono
                    </label>
                    <input
                      className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                      type="tel"
                      name="telefono"
                      value={formDataVoluntario.telefono}
                      onChange={handleChangeVoluntario}
                      required
                    />
                  </article>
                  <article className="flex-1">
                    <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                      Estudios
                    </label>
                    <input
                      className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                      type="text"
                      name="estudios"
                      value={formDataVoluntario.estudios}
                      onChange={handleChangeVoluntario}
                      required
                    />
                  </article>
                </section>

                <section className="flex flex-col lg:flex-row gap-4 mb-4">
                  <article className="flex-1">
                    <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                      Empresa
                    </label>
                    <input
                      className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                      type="text"
                      name="empresa"
                      value={formDataVoluntario.empresa}
                      onChange={handleChangeVoluntario}
                    />
                  </article>
                  <article className="flex-1">
                    <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                      Fecha de Nacimiento
                    </label>
                    <input
                      className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                      type="date"
                      name="fechaNacimiento"
                      value={formDataVoluntario.fechaNacimiento}
                      onChange={handleChangeVoluntario}
                    />
                  </article>
                </section>

                <section className="mb-4">
                  <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                    ¿Cómo conociste a la fundación?
                  </label>
                  <input
                    className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                    type="text"
                    name="comoConociste"
                    value={formDataVoluntario.comoConociste}
                    onChange={handleChangeVoluntario}
                  />
                </section>

                <section className="mb-4">
                  <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                    Horarios
                  </label>
                  <input
                    className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                    type="text"
                    name="horarios"
                    value={formDataVoluntario.horarios}
                    onChange={handleChangeVoluntario}
                  />
                </section>

                <section className="mb-4">
                  <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                    Comentario
                  </label>
                  <textarea
                    className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                    name="comentario"
                    value={formDataVoluntario.comentario}
                    onChange={handleChangeVoluntario}
                  ></textarea>
                </section>

                <Button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                  Enviar
                </Button>
              </form>
            )}

            <h2
              className="text-2xl font-bold text-blue-900 mb-4 text-center cursor-pointer mt-10"
              onClick={toggleFormEmpresaVisibility}
            >
              Sumate como empresa
            </h2>

            {showFormEmpresa && (
              <form onSubmit={handleSubmitEmpresa} className="flex flex-col w-full pt-4 mx-auto px-4 bg-white rounded-lg mt-10">
                <section className="flex flex-col lg:flex-row gap-4 mb-4">
                  <article className="flex-1">
                    <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                      Nombre de la Empresa
                    </label>
                    <input
                      className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                      type="text"
                      name="nombreEmpresa"
                      value={formDataEmpresa.nombreEmpresa}
                      onChange={handleChangeEmpresa}
                      required
                    />
                  </article>
                  <article className="flex-1">
                    <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                      Contacto
                    </label>
                    <input
                      className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                      type="text"
                      name="contacto"
                      value={formDataEmpresa.contacto}
                      onChange={handleChangeEmpresa}
                      required
                    />
                  </article>
                </section>

                <section className="flex flex-col lg:flex-row gap-4 mb-4">
                  <article className="flex-1">
                    <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                      Email
                    </label>
                    <input
                      className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                      type="email"
                      name="email"
                      value={formDataEmpresa.email}
                      onChange={handleChangeEmpresa}
                      required
                    />
                  </article>
                  <article className="flex-1">
                    <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                      Teléfono
                    </label>
                    <input
                      className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                      type="tel"
                      name="telefono"
                      value={formDataEmpresa.telefono}
                      onChange={handleChangeEmpresa}
                      required
                    />
                  </article>
                </section>

                <section className="flex flex-col lg:flex-row gap-4 mb-4">
                  <article className="flex-1">
                    <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                      Dirección
                    </label>
                    <input
                      className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                      type="text"
                      name="direccion"
                      value={formDataEmpresa.direccion}
                      onChange={handleChangeEmpresa}
                    />
                  </article>
                  <article className="flex-1">
                    <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                      CUIT
                    </label>
                    <input
                      className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                      type="text"
                      name="cuit"
                      value={formDataEmpresa.cuit}
                      onChange={handleChangeEmpresa}
                    />
                  </article>
                </section>

                <section className="mb-4">
                  <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                    Actividad
                  </label>
                  <input
                    className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                    type="text"
                    name="actividad"
                    value={formDataEmpresa.actividad}
                    onChange={handleChangeEmpresa}
                  />
                </section>

                <section className="mb-4">
                  <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                    Horarios
                  </label>
                  <input
                    className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                    type="text"
                    name="horarios"
                    value={formDataEmpresa.horarios}
                    onChange={handleChangeEmpresa}
                  />
                </section>

                <section className="mb-4">
                  <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">
                    Comentario
                  </label>
                  <textarea
                    className="w-full rounded-none border-b-2 border-blue-800 bg-gray-50 outline-none focus:border-blue-600 p-2 text-base text-black"
                    name="comentario"
                    value={formDataEmpresa.comentario}
                    onChange={handleChangeEmpresa}
                  ></textarea>
                </section>

                <Button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                  Enviar
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
      
      {showFormVoluntario || showFormEmpresa ? (
        <Footer />
      ) : (
        <div className="absolute inset-x-0 bottom-0">
          <Footer />
        </div>
      )}

    </section>
  );
};

export default Clubdeamigos;
