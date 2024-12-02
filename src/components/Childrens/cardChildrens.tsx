import React, { useEffect, useState } from "react";
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import Link from "next/link";
import { Hijo } from "@/types";
import { getHijoProfile, getChildrenAndUser } from "@/lib/utils";
import PopUpTableChildren from "../PopupsTable/popUpTable";

export function CardChildren({ token }: { token: string }) {
  const [hijosData, setHijosData] = useState<Hijo[]>([]);
  const [isType1User, setIsType1User] = useState(false);
  const [isType2User, setIsType2User] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        return;
      }
      const allChildren = await getChildrenAndUser({ token });
      setIsType1User(allChildren.usuario.tipoUsuarioId === 1);
      setIsType2User(allChildren.usuario.tipoUsuarioId === 2);

      const hijosArray =
        allChildren.usuario.tipoUsuarioId === 2
          ? allChildren.hijos
          : await getHijoProfile({ token });

      setHijosData(Array.isArray(hijosArray) ? hijosArray : hijosArray.hijos);
    };

    fetchData();
  }, [token]);

  const numberOfRows = hijosData.length;
  const cardClass = numberOfRows <= 4 ? "h-auto" : "h-96"; // Fixed height for overflow

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Card
      className={`w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl ${cardClass} dark:bg-gray-800 mt-4`}
      variant="filled" // Specify the variant if required
      shadow={true} // Specify shadow value, can be true, false, or a value like "md"
      placeholder="" // Example of adding missing props, not strictly necessary
      onPointerEnterCapture={() => {}} // Dummy function to satisfy type requirements
      onPointerLeaveCapture={() => {}} // Same as above
    >
      <CardBody
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <div className="mb-4 flex flex-col sm:flex-row items-center justify-between">
          <Typography
            variant="h5"
            color="gray"
            className="dark:bg-gray-800 dark:text-gray-300"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            {isType1User ? "Mis hijos" : "Pacientes"}
          </Typography>
          {!isType1User && (
            <Typography
              variant="small"
              color="gray"
              className=" text-blue-900 font-bold hover:underline hover:cursor-pointer"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              onClick={handleShowModal}
            >
              Ver más
            </Typography>
          )}
        </div>
        <div className="divide-y divide-gray-200 overflow-y-auto max-h-72 pr-3 scrollbar-hide dark:bg-gray-800 dark:text-white">
          {hijosData.length === 0 ? (
            <Typography
              variant="small"
              color="gray"
              className="dark:bg-gray-800 dark:text-gray-300"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              No hay pacientes registrados
            </Typography>
          ) : (
            <>
              {hijosData.map((hijo: Hijo) => (
                <div
                  key={hijo.id}
                  className="flex flex-wrap sm:flex-nowrap items-center justify-between pb-3 pt-3 last:pb-0"
                >
                  <div className="flex items-center gap-x-3 w-full sm:w-auto">
                    <Avatar
                      size="md"
                      src={hijo.imagen ? hijo.imagen : "/no-photo.webp"}
                      alt={`${hijo.nombre} ${hijo.apellido}`}
                      className="rounded-full"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    />
                    <div className="w-full sm:w-auto">
                      <Typography
                        color="blue-gray"
                        variant="h6"
                        className="dark:bg-gray-800 dark:text-white"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        {hijo.nombre} {hijo.apellido}
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="dark:bg-gray-800 dark:text-gray-300"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        Edad: {hijo.edad} años
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="dark:bg-gray-800 dark:text-gray-300"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        DNI: {hijo.dni}
                      </Typography>
                    </div>
                  </div>
                  <div className="mt-2 flex gap-x-4">
                    <Link
                      href={
                        isType2User
                          ? `/application/medical-form/${hijo.id}`
                          : `/application/medical-panel/${hijo.id}`
                      }
                      passHref
                    >
                      <Typography
                        as="a"
                        variant="small"
                        className="font-bold text-custom-blue dark:text-blue-500 hover:underline ml-15"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        {isType2User ? "Agregar Datos" : "Ver Datos"}
                      </Typography>
                    </Link>
                  </div>
                </div>
              ))}
              <div className="pt-4 text-center">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="italic dark:text-gray-300"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {isType2User
                    ? "No hay más pacientes registrados"
                    : "No hay más hijos registrados"}
                </Typography>
              </div>
            </>
          )}
        </div>
      </CardBody>

      {showModal && (
        <PopUpTableChildren hijosData={hijosData} onClose={handleCloseModal} />
      )}
    </Card>
  );
}
