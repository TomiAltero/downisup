import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

export default function PopUpTableChildren({
  hijosData,
  onClose,
}: {
  hijosData: any[];
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg max-w-7xl w-full">
        <Typography variant="h4" className="mb-4 text-center" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {hijosData.length === 0
            ? "No hay pacientes registrados"
            : "Pacientes"}
        </Typography>
        <Card
          className="w-full max-h-96 overflow-y-auto dark:bg-gray-800"
          variant="filled"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <CardBody
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            {hijosData.length === 0 ? (
              <Typography
                color="gray"
                className="text-center dark:text-gray-300"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                No hay pacientes para mostrar
              </Typography>
            ) : (
              hijosData.map((hijo) => (
                <div
                  key={hijo.id}
                  className="flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-3">
                    <Avatar
                      size="md"
                      src={hijo.imagen ? hijo.imagen : "/no-photo.webp"}
                      alt={`${hijo.nombre} ${hijo.apellido}`}
                      className="rounded-full"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    />
                    <div>
                      <Typography
                        color="blue-gray"
                        variant="h6"
                        className="dark:text-white"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        {hijo.nombre} {hijo.apellido}
                      </Typography>
                      <Typography
                        color="gray"
                        className="dark:text-gray-300"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        Edad: {hijo.edad} años
                      </Typography>
                      <Typography
                        color="gray"
                        className="dark:text-gray-300"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        DNI: {hijo.dni}
                      </Typography>
                    </div>
                  </div>
                  {/* Enlaces Ver datos y Agregar datos movidos a la derecha */}
                  <div className="flex gap-4">
                    <Link href={`#`}>
                      <Typography
                        as="a"
                        variant="small"
                        className="font-bold text-custom-blue dark:text-blue-500 hover:underline"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        Ver datos
                      </Typography>
                    </Link>
                    <Link href={`/application/medical-form/${hijo.id}`}>
                      <Typography
                        as="a"
                        variant="small"
                        className="font-bold text-custom-blue dark:text-blue-500 hover:underline"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        Agregar datos
                      </Typography>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </CardBody>
        </Card>
        <div className="flex justify-end mt-4">
          <Button
            className="text-white bg-blue-900"
            onClick={onClose}
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
}
