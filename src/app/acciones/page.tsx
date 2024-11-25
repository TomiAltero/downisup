import LandingLayout from "@/layouts/LandingLayout";
import { CalendarIcon } from "@/components/ui/icons";
import { poppins } from "@/components/ui/fonts";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "swiper/css";
import "swiper/css/navigation";
import { FooterWithLinks } from "@/components/footerLinks";

const diaSemana = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
const diaMes = 31;

const eventCards = [
  {
    title: "Día internacional del Síndrome de Down",
    shortDescription:
      "La propuesta consistió en entregar a los colegios de Córdoba, pañuelos blancos para ser intervenidos",
    longDescription: "Long description for Event 1",
    image: "/Jornadas.jpg",
    date: "09/3/2024",
  },
  {
    title: "2das Jornadas sobre el Síndrome de Down",
    shortDescription:
      "Con mucha libertad, amor propio y autonomía, educar hijos en el camino a la autonomía.",
    longDescription: "Long description for Event 2",
    image: "/Jornadas.jpg",
    date: "09/3/2024",
  },
  {
    title: "Calendario Down is up 2022",
    shortDescription:
      "En nuestra primera edición del calendario Down is up Córdoba",
    longDescription: "Long description for Event 3",
    image: "/chicasPlaza.jpg",
    date: "09/7/2024",
  },
];

export default function AccionesPage() {
  const eventDays = eventCards.map((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getDate();
  });

  return (
    <LandingLayout>
      <div
        className={`min-h-screen flex flex-col justify-between ${poppins.className}`}
      >
        <main className="flex-grow flex flex-col items-center px-5 mt-10">
          <h1 className="text-4xl mt-10 mb-5 text-custom-blue font-semibold text-center">
            ACCIONES QUE REALIZAMOS
          </h1>

          <h2 className="text-lg sm:text-xl mt-3 mb-5 text-custom-blue text-center max-w-3xl font-semibold">
            En esta sección encontrarás los eventos y actividades que hemos realizado a lo largo de los años y un calendario con los próximos eventos pendientes, con el objetivo de compartir, informar y disfrutar junto a todos los miembros de nuestra fundación.
          </h2>

          <section className="flex flex-col lg:flex-row w-full gap-10 px-5">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 w-full items-start">
              {eventCards.map((event, index) => (
                <article
                  key={index}
                  className="flex flex-col items-center bg-gray-300 rounded-3xl shadow-md p-5 gap-3"
                >
                  <h2 className="text-lg sm:text-xl text-custom-blue font-semibold text-center">
                    {event.title}
                  </h2>

                  <Image
                    src={event.image}
                    alt="Event"
                    className="object-cover rounded-3xl"
                    width={300}
                    height={250}
                  />
                  <p className="text-sm text-gray-700 text-center">
                    {event.shortDescription}
                  </p>
                  <Button className="mt-3 bg-custom-blue text-white px-4 py-2 rounded-lg">
                    Ver más
                  </Button>
                  <div className="flex items-center gap-2 mt-3">
                    <CalendarIcon className="size-8 text-black" />
                    <h3 className="text-sm text-black">{event.date}</h3>
                  </div>
                </article>
              ))}
            </section>

            <section className="lg:w-1/3 w-full px-5">
              <h2 className="text-xl text-center text-custom-blue font-semibold mb-5">
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

                <div className="grid grid-cols-7 gap-2 text-center text-black text-sm mt-2">
                  {Array.from({ length: diaMes }, (_, i) => i + 1).map((dia) => (
                    <div
                      key={dia}
                      className={`h-10 flex items-center justify-center border rounded-lg ${
                        eventDays.includes(dia)
                          ? "bg-green-600 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {dia}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </section>
        </main>

        <div className="mt-4">
        <FooterWithLinks />
        </div>


      </div>
    </LandingLayout>
  );
}
