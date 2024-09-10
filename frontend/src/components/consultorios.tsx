"use client"
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import consultorio from '../../public/consultorio.jpg'; // Ajusta la ruta según sea necesario
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import dynamic from 'next/dynamic';
import { Footer } from "../components/footer";


const MapComponent = dynamic(() => import('../components/MapComponent'), {
  ssr: false,
});

const Consultorios = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

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
  
  return (
    <section className="bg-white">

      <section className="relative w-full h-screen mb-10" style={{ height: "300px" }}>

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold mt-10">CONSULTORIOS</h1>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000, // Cambia cada 3 segundos
            disableOnInteraction: false,
          }}
          loop={true} // Vuelve a la primera imagen después de la última
          navigation={false} // Habilita las flechas de navegación
          allowTouchMove={false} // Deshabilita el arrastre manual
          className="h-full w-full"
        >
          <SwiperSlide  className="relative h-screen">
            <Image
              src="/background.png" // Cambia estas rutas por las imágenes que desees usar
              alt="Background 1"
              layout="fill"
              objectFit="cover"
              className="z-[-1] "
            />      <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-700 opacity-50"></div>

          </SwiperSlide>
          <SwiperSlide  className="relative h-screen">
            <Image
              src="/chicasPlaza.jpg"
              alt="Background 2"
              layout="fill"
              objectFit="cover"
              className="z-[-1] "
            />      <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-700 opacity-50"></div>

          </SwiperSlide>
          <SwiperSlide  className="relative h-screen">
            <Image
              src="/chicos.jpeg"
              alt="Background 3"
              layout="fill"
              objectFit="cover"
              className="z-[-1] "
            />      <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-700 opacity-50"></div>

          </SwiperSlide>
        </Swiper>
      </section>

      <div className="container mx-auto px-4 mb-10">
        <div className="mb-8">

          <h1 className="text-center text-xl md:text-md font-semibold text-blue-900 mb-10 lg:mx-70 md:10">
          &quot;Arrancamos con este proyecto que nos llena de felicidad ya que es la base para comenzar a diagramar la vivienda de apoyo de la Fundación Down is up Cba.&quot;</h1>

          <div className="flex justify-center">          
            <Image
            src={consultorio}
            alt="Ubicación"
            className="items-center justify-center rounded-3xl"
            layout=""
          />
          </div>

          <h1 className="text-sm mt-2 mb-5 text-center">Pérez de herrera 2053 B° Cerro de las Rosas</h1>

          <MapComponent />

        </div>
        <motion.div
          className="flex flex-col lg:flex-row lg:space-x-8"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          
          <div className="lg:w-1/2 py-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Programas de tratamiento</h3>
            <p className="text-gray-700 text-base md:px-4 leading-relaxed">
              Los programas de tratamiento están diseñados para mejorar la calidad de vida de las personas con discapacidad y su participación activa en los ámbitos familiares, escolares, laborales y comunitarios. Nuestra meta y diferencial en los consultorios, es nuestro motor: a través de un trabajo grupal e integral de nuestros profesionales y la familia de cada paciente, lograr su autonomía; planteándonos objetivos específicos para cada uno, siendo la comunicación y la experiencia fundamentales para el correcto funcionamiento del tratamiento.
            </p>
          </div>
          <div className="lg:w-1/2 py-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Profesionales que nos acompañan</h3>
            <ul className="list-disc list-inside text-base md:px-4 text-gray-700 space-y-1">
              <li>Cecilia Cedrola: Lic. en Psicopedagogía / Magister en atención a personas con síndrome de Down.</li>
              <li>Laura Legeren: Lic. en Psicología / Posgrado en Psicoterapia cognitivo conductual.</li>
              <li>Belén Ruiz: Lic. en Psicopedagogía - Especialización en estimulación temprana / Profesora en educación especial.</li>
              <li>Ivana Diaz: Lic. fonoaudiología / Especialización en desarrollo temprano.</li>
              <li>Natalia Viallejos: Lic. en terapia ocupacional con formación en neurorehabilitación e integración sensorial.</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <Footer/>
    </section>
  );
};

export default Consultorios;
