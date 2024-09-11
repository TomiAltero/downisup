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
  const isType2User = allChildren.usuario.tipoUsuarioId === 2;

  const hijosArray = isType2User ? allChildren.hijos : await getHijoProfile({ token });
  const hijosData = Array.isArray(hijosArray) ? hijosArray : hijosArray.hijos;

  return (
    <Card className="w-125">
      <CardBody>
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="">
          Pacientes 
          </Typography>
          <Link href="/application/all-children" passHref>
            <Typography as="a" variant="small" className="font-bold text-blue-900">
              Ver todos
            </Typography>
          </Link>
        </div>
        <div className="divide-y divide-gray-200">
          {hijosData.length === 0 ? (
            <Typography variant="body1" color="text.secondary" className="text-center">
              No hay pacientes Registrados
            </Typography>
          ) : (
            hijosData.map((hijo: Hijo) => (
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
                <Link href={isType2User ? `/application/formulario-medico/${hijo.id}` : `/application/panel-medico/${hijo.id}`} passHref>
                  <Typography as="a" variant="small" className="font-bold text-blue-900">
                    Ver más
                  </Typography>
                </Link>
              </div>
            ))
          )}
        </div>
      </CardBody>
    </Card>
  );
}

