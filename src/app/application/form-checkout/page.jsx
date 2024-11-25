'use client';
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { LockClosedIcon } from "@heroicons/react/24/solid"; 

export default function FormularioRegistro() {
  const [formType, setFormType] = useState("Datos de compra"); // Cambiar a "Datos de compra"
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    email: "",
    telefono: "",
    fechaNacimiento: "",
    dni: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const validarFormulario = () => {
    const errores = {};
    // Validación del nombre completo
    if (!formData.nombreCompleto.trim()) {
      errores.nombreCompleto = "El nombre completo es obligatorio.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.nombreCompleto)) {
      errores.nombreCompleto = "El nombre solo debe contener letras.";
    }
    // Validación del email
    if (!formData.email.trim()) {
      errores.email = "El email es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errores.email = "El formato del email no es válido.";
    }
    // Validación del teléfono
    if (!formData.telefono.trim()) {
      errores.telefono = "El teléfono es obligatorio.";
    } else if (!/^\d{10,15}$/.test(formData.telefono.replace(/\D/g, ""))) {
      errores.telefono = "El teléfono debe contener entre 10 y 15 dígitos.";
    }
    // Validación de la fecha de nacimiento
    if (!formData.fechaNacimiento) {
      errores.fechaNacimiento = "La fecha de nacimiento es obligatoria.";
    }
    // Validación del DNI
    if (!formData.dni.trim()) {
      errores.dni = "El DNI es obligatorio.";
    } else if (!/^\d{7,8}$/.test(formData.dni)) {
      errores.dni = "El DNI debe tener entre 7 y 8 dígitos.";
    }
   
    setFormErrors(errores);
    return Object.keys(errores).length === 0;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      console.log("Formulario enviado:", formData);
    } else {
      console.log("Errores en el formulario:", formErrors);
    }
  };

  const manejarCambioInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Card className="w-full shadow-2xl max-w-[30rem] mx-auto mb-10">
      <CardHeader
        color="gray"
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center bg-blue-800 px-4 py-8 text-center"
      >
        <Typography variant="h5" color="white">
          Formulario de pago
        </Typography>
      </CardHeader>
      <CardBody>
        <Tabs value={formType}>
          <TabsHeader>
            <Tab value="Datos de compra" onClick={() => setFormType("Datos de compra")}>
              Datos de compra
            </Tab>
          </TabsHeader>
          <TabsBody>
            <TabPanel value="Datos de compra">
              <form className="mt-6 flex flex-col gap-4" onSubmit={manejarEnvio}>
                <label className="text-sm font-medium text-blue-gray-700">
                  Nombre completo
                </label>
                <Input
                  name="nombreCompleto"
                  type="text"
                  placeholder="Juan Pérez"
                  value={formData.nombreCompleto}
                  onChange={manejarCambioInput}
                  className="rounded-md border-b-2 border-blue-800"
                />
                {formErrors.nombreCompleto && (
                  <Typography className="text-red-500 text-sm">
                    {formErrors.nombreCompleto}
                  </Typography>
                )}
                
                <label className="text-sm font-medium text-blue-gray-700">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  placeholder="nombre@correo.com"
                  value={formData.email}
                  onChange={manejarCambioInput}
                  className="rounded-md border-b-2 border-blue-800"
                />
                {formErrors.email && (
                  <Typography className="text-red-500 text-sm">
                    {formErrors.email}
                  </Typography>
                )}
                
                <label className="text-sm font-medium text-blue-gray-700">
                  Teléfono
                </label>
                <Input
                  name="telefono"
                  type="tel"
                  placeholder="1234567890"
                  value={formData.telefono}
                  onChange={manejarCambioInput}
                  className="rounded-md border-b-2 border-blue-800"
                />
                {formErrors.telefono && (
                  <Typography className="text-red-500 text-sm">
                    {formErrors.telefono}
                  </Typography>
                )}
                
                <label className="text-sm font-medium text-blue-gray-700">
                  Fecha de Nacimiento
                </label>
                <Input
                  name="fechaNacimiento"
                  type="date"
                  value={formData.fechaNacimiento}
                  onChange={manejarCambioInput}
                  className="rounded-md border-b-2 border-blue-800"
                />
                {formErrors.fechaNacimiento && (
                  <Typography className="text-red-500 text-sm">
                    {formErrors.fechaNacimiento}
                  </Typography>
                )}
                
                <label className="text-sm font-medium text-blue-gray-700">
                  DNI
                </label>
                <Input
                  name="dni"
                  type="text"
                  placeholder="12345678"
                  value={formData.dni}
                  onChange={manejarCambioInput}
                  className="rounded-md border-b-2 border-blue-800"
                />
                {formErrors.dni && (
                  <Typography className="text-red-500 text-sm">
                    {formErrors.dni}
                  </Typography>
                )}
                <Button type="submit" className="w-full bg-blue-600 mt-6">
                  Enviar
                </Button>
                <Typography
                  variant="small"
                  className="flex items-center justify-center gap-2 font-medium opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Información segura y encriptada
                </Typography>
              </form>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
}
