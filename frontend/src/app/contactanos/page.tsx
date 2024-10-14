'use client'
import LandingLayout from "@/layouts/LandingLayout";
import { poppins } from "@/components/ui/fonts";
import './contact.css';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PhoneIconSvg, MessageIconSvg, PinIconSvg} from "@/components/ui/icons"
import { FooterWithLinks } from "@/components/footerLinks";

export default function ContactUsPage() {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
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
        alert('Message sent successfully');
        form.reset();
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <LandingLayout>
      <main className={`h-screen flex flex-col justify-start items-center ${poppins.className}`}>
        <h1 className={`text-4xl mt-22 mb-5 text-custom-blue font-semibold`}>Contáctanos</h1>
        
        {/* Container responsive */}
        <div className="flex flex-col lg:flex-row w-full justify-between px-4 lg:px-40">
          
          {/* Información de contacto responsive */}
          <div className="bg-blue-900 mt-10 lg:mt-20 text-white p-5 pb-15 rounded-3xl w-[400px] lg:w- font-sans">
            <h2 className={`text-lg mb-10 text-white mt-5 text-center font-semibold`}>Información de Contacto</h2>
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
            <form onSubmit={handleSubmit} >
            <section className="flex flex-col lg:flex-row gap-6">
              <article>
                <Label className={`block text-xs leading-6 text-blue-900 ${poppins.className}`}>Nombre</Label>
                <Input className="rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6" type="text" name="name" placeholder="Ingresa tu nombre"/>
              </article>
              <article>
                <Label className={`block text-xs leading-6 text-blue-900 ${poppins.className}`}>Apellido</Label>
                <Input className="rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6" type="text" name="surname" placeholder="Ingresa tu apellido"/>
              </article>
            </section>
            <section className="flex flex-col lg:flex-row gap-6">
              <article>
                <Label className={`block text-xs leading-6 text-blue-900 ${poppins.className}`}>Email</Label>
                <Input className="rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6" type="email" name="email" placeholder="Ingresa tu email"/>
              </article>
              <article>
                <Label className={`block text-xs leading-6 text-blue-900 ${poppins.className}`}>Teléfono</Label>
                <Input className="rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6" type="number" name="phone" placeholder="Ingresa tu teléfono"/>
              </article>
            </section>
            <article className="mt-5">
              <input type="text" className="w-full rounded-3xl bg-gray-400 border-2 placeholder:text-sm text-sm p-6 placeholder:text-white focus:ring-0 " name="message" placeholder="Ingrese un mensaje" />
            </article>
            <div>
              <button type="submit"  className="bg-blue-500 shadow-lg shadow-blue-500/50 text-base text-white mt-4 py-2 px-4 rounded-xl">
                      Enviar
              </button>
            </div>
            </form>
          </div>
        </div>
        
        {/* Pie de página con redes sociales */}
        <div className="absolute inset-x-0 bottom-0">
          
        </div>
      </main>
    </LandingLayout>
  );
}
