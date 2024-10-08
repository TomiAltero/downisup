
import React from "react";
import { useCountries } from "use-react-countries";
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
  Select,
  Option,
} from "@material-tailwind/react";
import { LockClosedIcon } from "@heroicons/react/24/solid";

export default function RegisterForm() {
  const { countries } = useCountries();
  const [formType, setFormType] = React.useState("volunteer");

  function formatNumber(value) {
    // Elimina cualquier cosa que no sea un número
    return value.replace(/[^0-9]/g, "");
  }

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
              Compañía
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
              <form className="mt-6 flex flex-col gap-4">
                <Typography variant="small" color="blue-gray" className="mb-2 mt-2 text-center">
                  INFORMACION PERSONAL
                </Typography>

                {/* Full Name Input */}
                <label className="text-sm font-medium mt-3 text-blue-gray-700">Nombre completo</label>
                <Input
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="text"
                  placeholder="John Doe"
                  aria-required="true"
                />

                {/* Email Input */}
                <label className="text-sm font-medium text-blue-gray-700">Email</label>
                <Input
                  variant="outlined"
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="email"
                  placeholder="name@mail.com"
                  aria-required="true"
                />

                {/* Phone Input */}
                <label className="text-sm font-medium text-blue-gray-700">Teléfono</label>
                <Input
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="tel"
                  placeholder="123-456-7890"
                  aria-required="true"
                  onChange={(e) => e.target.value = formatNumber(e.target.value)}
                />

                {/* Date Input */}
                <label className="text-sm font-medium text-blue-gray-700">Fecha de Nacimiento</label>
                <Input
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="date"
                  aria-required="true"
                />

                {/* DNI Input */}
                <label className="text-sm font-medium text-blue-gray-700 ">DNI</label>
                <Input
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="number"
                  placeholder="12345678"
                  aria-required="true"
                  onChange={(e) => e.target.value = formatNumber(e.target.value)}
                />

                {/* Country Input */}
                <label className="text-sm font-medium mt-3 text-blue-gray-700">País</label>
                <Input
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="text"
                  placeholder="Argentina"
                  aria-required="true"
                />

                {/* Como conociste Input */}
              <label className="text-sm font-medium mt-3 text-blue-gray-700">¿Cómo conociste a Down Is Up cba?</label>
                <Input
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="text"
                  placeholder="Google"
                  aria-required="true"
                />

                {/* Company Name Input */}
                <label className="text-sm font-medium mt-3 text-blue-gray-700">Propuesta</label>
                <Input
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="text"
                  placeholder="Propuesta"
                  aria-required="true"
                />

                <Button type="submit" variant="gradient" className="mt-6 bg-custom-blue">
                Registrate como Voluntario
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

            {/* Formulario de Empresa */}
            <TabPanel value="company" className="p-0">
              <form className="mt-6 flex flex-col gap-4">
                <Typography variant="small" color="blue-gray" className="mb-2 mt-2 text-center">
                  INFORMACION DE LA EMPRESA
                </Typography>

                {/* Company Name Input */}
                <label className="text-sm font-medium mt-3 text-blue-gray-700">Nombre</label>
                <Input
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="text"
                  placeholder="Company Inc."
                  aria-required="true"
                />

                {/* Company Email Input */}
                <label className="text-sm font-medium text-blue-gray-700">Email de referencia</label>
                <Input
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="email"
                  placeholder="contact@company.com"
                  aria-required="true"
                />

                {/* Company Phone Input */}
                <label className="text-sm font-medium text-blue-gray-700">Teléfono</label>
                <Input
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="tel"
                  placeholder="123-456-7890"
                  aria-required="true"
                  onChange={(e) => e.target.value = formatPhoneNumber(e.target.value)}
                />

                {/* Country Input */}
                <label className="text-sm font-medium mt-3 text-blue-gray-700">País</label>
                <Input
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="text"
                  placeholder="Argentina"
                  aria-required="true"
                />

                {/* Company Address Input */}
                <label className="text-sm font-medium text-blue-gray-700">Dirección</label>
                <Input
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="text"
                  placeholder="456 Industry Ave"
                  aria-required="true"
                />

                {/* Company Como conociste Input */}
                <label className="text-sm font-medium mt-3 text-blue-gray-700">¿Cómo conociste a Down Is Up cba?</label>
                <Input
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="text"
                  placeholder="Google"
                  aria-required="true"
                />

                {/* Company Description Input */}
                <label className="text-sm font-medium text-blue-gray-700">Descripción</label>
                <Input
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="text"
                  placeholder="Description"
                  aria-required="true"
                />

                {/* Company Name Input */}
                <label className="text-sm font-medium mt-3 text-blue-gray-700">Propuesta</label>
                <Input
                  className="rounded-md border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600 mb-6"
                  type="text"
                  placeholder="Propuesta"
                  aria-required="true"
                />

                <Button type="submit" variant="gradient" className="mt-6 bg-custom-blue">
                  Registrate como Compañía
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
