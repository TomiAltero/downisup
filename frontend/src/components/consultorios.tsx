"use client"
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import ubicacionImage from '../../public/ubicacion.png'; // Ajusta la ruta según sea necesario
import { useInView } from 'react-intersection-observer';

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
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">CONSULTORIOS</h2>
        <div className="mb-8">
          <Image
            src={ubicacionImage}
            alt="Ubicación"
            className="w-full h-auto rounded-3xl"
            layout="responsive"
            width={700}
            height={400}
          />
        </div>
        <motion.div
          className="flex flex-col lg:flex-row lg:space-x-8"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Nuestros profesionales</h3>
            <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
              <li>Cecilia Cedrola: Lic. en Psicopedagogía / Magister en atención a personas con síndrome de Down.</li>
              <li>Laura Legeren: Lic. en Psicología / Posgrado en Psicoterapia cognitivo conductual.</li>
              <li>Belén Ruiz: Lic. en Psicopedagogía - Especialización en estimulación temprana / Profesora en educación especial.</li>
              <li>Ivana Diaz: Lic. fonoaudiología / Especialización en desarrollo temprano.</li>
              <li>Natalia Viallejos: Lic. en terapia ocupacional con formación en neurorehabilitación e integración sensorial.</li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Programas de tratamiento</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Los programas de tratamiento están diseñados para mejorar la calidad de vida de las personas con discapacidad y su participación activa en los ámbitos familiares, escolares, laborales y comunitarios. Nuestra meta y diferencial en los consultorios, es nuestro motor: a través de un trabajo grupal e integral de nuestros profesionales y la familia de cada paciente, lograr su autonomía; planteándonos objetivos específicos para cada uno, siendo la comunicación y la experiencia fundamentales para el correcto funcionamiento del tratamiento.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Consultorios;
