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

export default function RegisterForm() {
  const [formType, setFormType] = useState("volunteer");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    dni: "",
    howDidYouKnow: "",
    proposal: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    const errors = {};
    
    // Nombre completo
    if (!formData.fullName.trim()) {
      errors.fullName = "El nombre completo es obligatorio.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
      errors.fullName = "El nombre solo debe contener letras.";
    }

    // Email
    if (!formData.email.trim()) {
      errors.email = "El email es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "El formato del email no es válido.";
    }

    // Teléfono
    if (!formData.phone.trim()) {
      errors.phone = "El teléfono es obligatorio.";
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ""))) {
      errors.phone = "El teléfono debe contener entre 10 y 15 dígitos.";
    }

    // Fecha de nacimiento
    if (!formData.dob) {
      errors.dob = "La fecha de nacimiento es obligatoria.";
    }

    // DNI
    if (!formData.dni.trim()) {
      errors.dni = "El DNI es obligatorio.";
    } else if (!/^\d{7,8}$/.test(formData.dni)) {
      errors.dni = "El DNI debe tener entre 7 y 8 dígitos.";
    }

    // Propuesta
    if (!formData.proposal.trim()) {
      errors.proposal = "La propuesta es obligatoria.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateAge = () => {
    const birthdate = new Date(formData.birthdate);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();
  
    if (age < 16 || (age === 16 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        birthdate: 'Debes ser mayor de 16 años.',
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        birthdate: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Formulario enviado:", formData);
    } else {
      console.log("Errores en el formulario:", formErrors);
    }
  };

  const handleInputChange = (e) => {
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
        className="m-0 grid place-items-center bg-custom-blue px-4 py-8 text-center"
      >
        <Typography variant="h5" color="white">
          Registrate
        </Typography>
      </CardHeader>
      <CardBody>
        <Tabs value={formType} className="overflow-visible">
          <TabsHeader className="relative z-0">
            <Tab value="volunteer" onClick={() => setFormType("volunteer")}>
              Voluntario
            </Tab>
            <Tab value="company" onClick={() => setFormType("company")}>
              Empresa
            </Tab>
          </TabsHeader>
          <TabsBody
            className="!overflow-x-hidden !overflow-y-visible"
            animate={{
              initial: { x: formType === "volunteer" ? 400 : -400 },
              mount: { x: 0 },
              unmount: { x: formType === "volunteer" ? 400 : -400 },
            }}
          >
            {/* Formulario de Voluntario */}
            <TabPanel value="volunteer" className="p-0">
              <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 mt-2 text-center"
                >
                  INFORMACION PERSONAL
                </Typography>

                {/* Full Name Input */}
                <label className="text-sm font-medium mt-3 text-blue-gray-700">
                  Nombre completo
                </label>
                <Input
                  name="fullName"
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="text"
                  placeholder="John Doe"
                  aria-required="true"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  error={formErrors.fullName ? true : undefined}
                />
                {formErrors.fullName && (
                  <Typography className="text-red text-sm font-bold">{formErrors.fullName}</Typography>
                )}

                {/* Email Input */}
                <label className="text-sm font-medium text-blue-gray-700">
                  Email
                </label>
                <Input
                  name="email"
                  variant="outlined"
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="email"
                  placeholder="name@mail.com"
                  aria-required="true"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={formErrors.email ? true : undefined}
                />
                {formErrors.email && (
                  <Typography className="text-red text-sm font-bold">{formErrors.email}</Typography>
                )}

                {/* Phone Input */}
                <label className="text-sm font-medium text-blue-gray-700">
                  Teléfono
                </label>
                <Input
                  name="phone"
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="tel"
                  placeholder="123-456-7890"
                  aria-required="true"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={formErrors.phone ? true : undefined}
                />
                {formErrors.phone && (
                  <Typography className="text-red text-sm font-bold">{formErrors.phone}</Typography>
                )}

                {/* Date Input */}
                <label className="text-sm font-medium text-blue-gray-700">
                  Fecha de Nacimiento
                </label>
                <Input
                  name="dob"
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="date"
                  aria-required="true"
                  value={formData.dob}
                  onChange={handleInputChange}
                  onBlur={validateAge}
                  error={formErrors.dob ? true : undefined}
                />
                {formErrors.dob && (
                  <Typography className="text-red text-sm font-bold">{formErrors.dob}</Typography>
                )}

                {/* DNI Input */}
                <label className="text-sm font-medium text-blue-gray-700 ">
                  DNI
                </label>
                <Input
                  name="dni"
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="number"
                  placeholder="12345678"
                  aria-required="true"
                  value={formData.dni}
                  onChange={handleInputChange}
                  error={formErrors.dni ? true : undefined}
                />
                {formErrors.dni && (
                  <Typography className="text-red text-sm font-bold">{formErrors.dni}</Typography>
                )}

                {/* Propuesta */}
                <label className="text-sm font-medium mt-3 text-blue-gray-700">
                  Propuesta
                </label>
                <Input
                  name="proposal"
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="text"
                  placeholder="Propuesta"
                  aria-required="true"
                  value={formData.proposal}
                  onChange={handleInputChange}
                  error={formErrors.proposal ? true : undefined}
                />
                {formErrors.proposal && (
                  <Typography className="text-red text-sm font-bold">{formErrors.proposal}</Typography>
                )}

                {/* Submit */}
                <Button type="submit" className="w-full bg-blue-600 mt-6">
                  Enviar
                </Button>
                <Typography
                  variant="small"
                  color="black"
                  className="flex items-center justify-center gap-2 font-medium opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Informacion
                  segura y encriptada
                </Typography>
              </form>
            </TabPanel>
            <TabPanel value="company" className="p-0">
              <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 mt-2 text-center"
                >
                  INFORMACION DE EMPRESA
                </Typography>

                {/* Company Name Input */}
                <label className="text-sm font-medium mt-3 text-blue-gray-700">
                  Nombre de la empresa
                </label>
                <Input
                  name="companyName"
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="text"
                  placeholder="Mi Empresa S.A."
                  aria-required="true"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  error={formErrors.companyName ? true : undefined}
                />
                {formErrors.companyName && (
                  <Typography className="text-red text-sm font-bold">{formErrors.companyName}</Typography>
                )}

                {/* Email Input */}
                <label className="text-sm font-medium text-blue-gray-700">
                  Email de la empresa
                </label>
                <Input
                  name="email"
                  variant="outlined"
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="email"
                  placeholder="empresa@mail.com"
                  aria-required="true"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={formErrors.email ? true : undefined}
                />
                {formErrors.email && (
                  <Typography className="text-red text-sm font-bold">{formErrors.email}</Typography>
                )}

                {/* Contact Person Input */}
                <label className="text-sm font-medium text-blue-gray-700">
                  Persona de contacto
                </label>
                <Input
                  name="contactPerson"
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="text"
                  placeholder="Juan Pérez"
                  aria-required="true"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  error={formErrors.contactPerson ? true : undefined}
                />
                {formErrors.contactPerson && (
                  <Typography className="text-red text-sm font-bold">{formErrors.contactPerson}</Typography>
                )}

                {/* Phone Input */}
                <label className="text-sm font-medium text-blue-gray-700">
                  Teléfono de contacto
                </label>
                <Input
                  name="phone"
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="tel"
                  placeholder="123-456-7890"
                  aria-required="true"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={formErrors.phone ? true : undefined}
                />
                {formErrors.phone && (
                  <Typography className="text-red text-sm font-bold">{formErrors.phone}</Typography>
                )}

                {/* Company Address Input */}
                <label className="text-sm font-medium mt-3 text-blue-gray-700">
                  Dirección de la empresa
                </label>
                <Input
                  name="companyAddress"
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="text"
                  placeholder="Av. Principal 123"
                  aria-required="true"
                  value={formData.companyAddress}
                  onChange={handleInputChange}
                  error={formErrors.companyAddress ? true : undefined}
                />
                {formErrors.companyAddress && (
                  <Typography className="text-red text-sm font-bold">{formErrors.companyAddress}</Typography>
                )}

                {/* Company Proposal */}
                <label className="text-sm font-medium mt-3 text-blue-gray-700">
                  Propuesta de colaboración
                </label>
                <Input
                  name="proposal"
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="text"
                  placeholder="Descripción de la propuesta"
                  aria-required="true"
                  value={formData.proposal}
                  onChange={handleInputChange}
                  error={formErrors.proposal ? true : undefined}
                />
                {formErrors.proposal && (
                  <Typography className="text-red text-sm font-bold">{formErrors.proposal}</Typography>
                )}

                {/* Submit */}
                <Button type="submit" className="w-full bg-blue-600 mt-6">
                  Enviar
                </Button>
                <Typography
                  variant="small"
                  color="black"
                  className="flex items-center justify-center gap-2 font-medium opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Informacion
                  segura y encriptada
                </Typography>
              </form>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
}