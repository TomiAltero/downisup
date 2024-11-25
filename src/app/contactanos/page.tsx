'use client'; // Ensure the page is running in the client

import { useState } from 'react';
import LandingLayout from "@/layouts/LandingLayout";
import { poppins } from "@/components/ui/fonts";
import './contact.css';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Navigation, Autoplay } from 'swiper/modules';
import { PhoneIconSvg, MessageIconSvg, PinIconSvg } from "@/components/ui/icons";
import { FooterWithLinks } from "@/components/footerLinks";
import { AlertCustomStyles, AlertCustomStylesRojo, LoadingSpinner } from "@/components/materialComponent"; // Import custom components

export default function ContactUsPage() {
  const [isLoading, setIsLoading] = useState(false); // State for spinner
  const [alertMessage, setAlertMessage] = useState(''); // State for alert message
  const [isError, setIsError] = useState(false); // State to track if the message is an error  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);  // Show spinner while sending
    setIsError(false);   // Reset error state

    const form = event.currentTarget; // Access the form element
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      surname: (form.elements.namedItem('surname') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLInputElement).value,
    };

    try {
      const response = await fetch('/api/mail/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setAlertMessage(' Mensaje enviado con exito!'); // Set the success alert message
        setIsError(false); // No error, success
        form.reset();
      } else {
        setAlertMessage('Error al enviar el mensaje. Por favor, intente nuevamente.');
        setIsError(true);  // Mark it as an error
      }
    } catch (error) {
      setAlertMessage('Error sending message. Please check the console for details.');
      console.error('Error:', error);  // Log the error for debugging
      setIsError(true);  // Mark it as an error
    } finally {
      setIsLoading(false);  // Hide spinner after response
    }
  };

  return (
    <LandingLayout>
      <main className={`h-screen flex flex-col justify-start items-center ${poppins.className}`}>
      <section className="relative w-full h-screen mb-10" style={{ height: "250px" }}>

<div className="absolute inset-0 z-10 flex items-center justify-center">
  <h1 className="text-white text-4xl font-bold mtB-10">CONSULTORIO </h1>
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

        {/* Display the alert if there's a message */}
        {alertMessage && (
          isError ? (
            <AlertCustomStylesRojo message={alertMessage} />  // Show error alert
          ) : (
            <AlertCustomStyles message={alertMessage} />  // Show success alert
          )
        )}

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center mb-4">
          {/* Container responsive */}
          <div className="flex flex-col lg:flex-row w-full justify-between px-4 lg:px-40">
            {/* Información de contacto responsive */}
            <div className="bg-blue-900 mt-10 lg:mt-20 text-white p-5 pb-15 rounded-3xl w-[400px] lg:w- font-sans">
              <h2 className={`text-lg mb-10 text-white mt-5 text-center font-semibold`}>
                Información de Contacto
              </h2>
              <div className="space-y-3">
                <p>
                  <PhoneIconSvg />
                  <a href="tel:+3517960194" className="text-white text-sm hover:underline">3517960194</a>
                </p>
                <p>
                  <MessageIconSvg />
                  <a href="mailto:fundaciondownisupcbacba@gmail.com" className="text-white text-sm hover:underline">fundaciondownisupcbacba@gmail.com</a>
                </p>
                <p>
                  <PinIconSvg />
                  <a href="https://maps.app.goo.gl/cpvhnUq2XH37BnCi8" className="text-white text-sm hover:underline">Pérez de Herrera 2053</a>
                </p>
              </div>
            </div>

            {/* Formulario de contacto responsive */}
            <div className="flex flex-col justify-center w-full lg:w-1/2 pt-10 lg:pt-20">
              <section className="flex flex-col lg:flex-row gap-6">
                <article>
                  <Label className={`block text-xs leading-6 text-blue-900 ${poppins.className}`}>Nombre</Label>
                  <Input name="name" className="rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6" type="text" placeholder="Ingresa tu nombre" required/>
                </article>
                <article>
                  <Label className={`block text-xs leading-6 text-blue-900 ${poppins.className}`}>Apellido</Label>
                  <Input name="surname" className="rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6" type="text" placeholder="Ingresa tu apellido" required/>
                </article>
              </section>
              <section className="flex flex-col lg:flex-row gap-6">
                <article>
                  <Label className={`block text-xs leading-6 text-blue-900 ${poppins.className}`}>Email</Label>
                  <Input name="email" className="rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6" type="email" placeholder="Ingresa tu email" required/>
                </article>
                <article>
                  <Label className={`block text-xs leading-6 text-blue-900 ${poppins.className}`}>Teléfono</Label>
                  <Input name="phone" className="rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6" type="number" placeholder="Ingresa tu teléfono" required/>
                </article>
              </section>
              <article className="mt-5">
                <input name="message" type="text" className="w-full rounded-3xl bg-gray-400 border-2 placeholder:text-sm text-sm p-6 placeholder:text-white focus:ring-0 " placeholder="Ingrese un mensaje" required/>
              </article>
              <div className="mt-4">
                {/* Button with spinner */}
                <button type="submit" className="bg-blue-500 shadow-lg shadow-blue-500/50 text-base text-white py-2 px-4 mb-4 rounded-xl flex items-center justify-center">
                  {isLoading ? <LoadingSpinner /> : "Enviar"}  {/* Show spinner while loading */}
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Pie de página con redes sociales */}
        <div className="hidden md:block w-full mt-auto">
          <FooterWithLinks />
        </div>
      </main>
    </LandingLayout>
  );
}