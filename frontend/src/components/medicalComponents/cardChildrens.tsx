import React from "react";
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import Link from "next/link";
import { Hijo } from "@/types";
import { getHijoProfile, getChildrenAndUser } from "@/lib/utils";

export async function CardChildren({ token }: { token: string }) {
  if (!token) {
    return null;
  }

  const allChildren = await getChildrenAndUser({ token });
  const isType1User = allChildren.usuario.tipoUsuarioId === 1;
  const isType2User = allChildren.usuario.tipoUsuarioId === 2;

  const hijosArray = isType2User
    ? allChildren.hijos
    : await getHijoProfile({ token });
  const hijosData = Array.isArray(hijosArray) ? hijosArray : hijosArray.hijos;

  const numberOfRows = hijosData.length;
  const cardClass = numberOfRows <= 4 ? "h-auto" : "h-96"; // Fixed height for overflow

  return (
    <Card className={`w-150 ${cardClass}`}>
      <CardBody>
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            {isType1User ? "Mis hijos" : "Pacientes"}
          </Typography>
          {!isType1User && (
            <Link href="/application/all-children" passHref>
              <Typography
                as="a"
                variant="small"
                className="font-bold text-blue-900"
              >
                Ver mas
              </Typography>
            </Link>
          )}
        </div>
        {/* Ocultar la barra de scroll */}
        <div className="divide-y divide-gray-200 overflow-y-auto max-h-72 pr-3 scrollbar-hide">
          {hijosData.length === 0 ? (
            <Typography
              variant="body1"
              color="text.secondary"
              className="text-center"
            >
              No hay pacientes registrados
            </Typography>
          ) : (
            <>
              {hijosData.map((hijo: Hijo) => (
                <div
                  key={hijo.id}
                  className="flex items-center justify-between pb-3 pt-3 last:pb-0"
                >
                  <div className="flex items-center gap-x-3">
                    <Avatar
                      size="sm"
                      src={hijo.imagen ? hijo.imagen : "/no-photo.webp"}
                      alt={`${hijo.nombre} ${hijo.apellido}`}
                    />
                    <div>
                      <Typography color="blue-gray" variant="h6">
                        {hijo.nombre} {hijo.apellido}
                      </Typography>
                      <Typography variant="small" color="gray">
                        Edad: {hijo.edad} años
                      </Typography>
                      <Typography variant="small" color="gray">
                        DNI: {hijo.dni}
                      </Typography>
                    </div>
                  </div>
                  <div className="flex gap-x-4">
                    <Link
                      href={
                        isType2User
                          ? `/application/formulario-medico/${hijo.id}`
                          : `/application/panel-medico/${hijo.id}`
                      }
                      passHref
                    >
                      <Typography
                        as="a"
                        variant="small"
                        className="font-bold text-blue-900 hover:underline"
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
                  className="italic"
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
    </Card>
  );
}
