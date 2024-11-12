
import LandingLayout from "@/layouts/LandingLayout";
import { CalendarIcon } from "@/components/ui/icons"
import { poppins } from "@/components/ui/fonts";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { FooterWithLinks } from "@/components/footerLinks";

const diaSemana = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
const diaMes = 31;

const eventCards = [
  {
    title: "Día internacional del Síndrome de Down",
    shortDescription: "La propuesta consistió en entregar a los colegios de Córdoba, pañuelos blancos para ser intervenidos ",
    longDescription: "Long description for Event 1",
    image: "/DiaInternacional.jpg",
    date : "09/3/2024"
  },
  {
    title: "2das Jornadas sobre el Síndrome de Down",
    shortDescription: "con mucha libertad, amor propio, y autonomia, educar hijos en el camino a la autonomia.",
    longDescription: "Long description for Event 2",
    image: "/Jornadas.jpg",
    date : "09/3/2024"

  },
  {
    title: "Calendario Down is up 2022",
    shortDescription: "En nuestra primera edición del calendario Down is up córdoba",
    longDescription: "Long description for Event 3",
    image: "/chicasPlaza.jpg",
    date : "09/7/2024"

  },
];

export default function AccionesPage() {
  // Extraer los días de los eventos
  const eventDays = eventCards.map(event => {
    const eventDate = new Date(event.date);
    return eventDate.getDate();
  });

  return (
    <LandingLayout>
      <main
        className={`h-screen flex flex-col items-center ${poppins.className}`}
      >
        <h1 className="text-4xl mt-22 mb-5 text-custom-blue font-semibold">
          ACCIONES QUE REALIZAMOS
        </h1>

        <h2 className="text-xl mt-3 mb-5 text-custom-blue text-center mx-10 font-semibold">En esta sección encontrarás los eventos y actividades que hemos realizado a lo largo de los años y un calendario con los proximos eventos pendientes, con el objetivo de compartir, informar y disfrutar junto a todos los miembros de nuestra fundación.</h2>

        <section className="flex w-full px-10">
          <section className="grid grid-cols-2 w-full items-center">
            {eventCards.map((event, index) => (
              <article
                key={index}
                className="flex flex-col items-center justify-center w-120 h-auto bg-gray-300 rounded-3xl shadow-md p-5 m-5 gap-1"
              >
                <h2 className="text-xl mt-5 mb-5 text-custom-blue font-semibold">
                  {event.title}
                </h2>
                  
                <article className="flex gap-x-4">
                  <Image
                    src={event.image}
                    alt="Event"
                    className="object-cover rounded-3xl"
                    width={300}
                    height={250}
                    style={{ width: '300px', height: '250px' }}
                  />
                  <article className="flex flex-col justify-between py-10">
                    <p className="text-sm text-center text-gray-700">
                      {event.shortDescription}
                    </p>
                    <Button
                      className="mt-5 bg-custom-blue text-white px-5 py-2 rounded-lg"
                    >
                      Ver más
                    </Button>
                  </article>
                </article>
                <article className="flex items-center gap-x-2 mt-4">
                  <CalendarIcon className="size-8 text-black" />
                  <h3 className="text-sm text-black">
                    {event.date}
                  </h3>
                </article>
              </article>
            ))}
          </section>

          <section className="px-10">
            <h2 className="text-xl mt-12 mb-5 text-center text-custom-blue font-semibold">
              Próximos Eventos
            </h2>
            <h3 className="text-lg mb-5 text-center text-custom-blue font-semibold">
              Septiembre
            </h3>
            <div className="calendar-container">
              <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-black">
                {diaSemana.map((dia) => (
                  <div key={dia}>{dia}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2 text-center text-black text-sm">
                {Array.from({ length: diaMes }, (_, i) => i + 1).map((dia) => (
                <div
                  key={dia}
                  className={`h-10 flex items-center justify-center border rounded-lg ${
                    eventDays.includes(dia) ? 'bg-green-600 text-white opacity-80' : 'bg-gray-100'
                  }`}
                >
                  {dia}
                </div>
                ))}
              </div>
            </div>
          </section>
        </section>

        <FooterWithLinks />

      </main>
    </LandingLayout>
  );
}

