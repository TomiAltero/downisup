import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Página no encontrada
      </h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Lo sentimos, pero la página que estás buscando no existe.
      </p>
      <Link href="/" legacyBehavior>
        <a className="text-blue-600 hover:underline">Volver al inicio</a>
      </Link>
    </div>
  );
};

export default NotFound;
