import React from 'react';

const FormMedical = () => {
  return (
    <div className="bg-gray-100 p-10 rounded-lg shadow-lg w-full lg:w-3/4 xl:w-2/3 mx-auto">
      <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Formulario Sesion Psicologica</h2>
      <div className="flex flex-col justify-center w-full lg:w-full xl:w-full pt-4 lg:pt-8 mx-auto px-4 bg-white rounded-lg">
        <section className="flex flex-col lg:flex-row gap-4 mb-4">
          <article className="flex-1">
            <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">Fecha de la Sesión</label>
            <input
              className="w-full rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 bg-gray-50 outline-none focus:ring-0 focus:border-blue-600 text-gray-500 text-base p-2"
              type="date"
            />
          </article>
        </section>

        <section className="flex flex-col lg:flex-row gap-4 mb-4">
          <article className="flex-1">
            <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">Horario de Inicio</label>
            <input
              className="w-full rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 bg-gray-50 outline-none focus:ring-0 focus:border-blue-600 text-gray-500 text-base p-2"
              type="time"
            />
          </article>
          <article className="flex-1">
            <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">Horario de Finalización</label>
            <input
              className="w-full rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 bg-gray-50 outline-none focus:ring-0 focus:border-blue-600 text-gray-500 text-base p-2"
              type="time"
            />
          </article>
        </section>

        <section className="flex flex-col lg:flex-row gap-4 mb-4">
          <article className="flex-1">
            <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">Descripción</label>
            <textarea
              className="w-full rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 bg-gray-50 outline-none focus:ring-0 focus:border-blue-600 text-gray-500 text-base resize-none"
              rows="3"
            ></textarea>
          </article>
        </section>

        <section className="flex flex-col lg:flex-row gap-4 mb-4">
          <article className="flex-1">
            <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">Objetivos</label>
            <textarea
              className="w-full rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 bg-gray-50 outline-none focus:ring-0 focus:border-blue-600 text-gray-500 text-base resize-none"
              rows="3"
            ></textarea>
          </article>
        </section>

        <section className="flex flex-col lg:flex-row gap-4 mb-4">
          <article className="flex-1">
            <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">Observaciones</label>
            <textarea
              className="w-full rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 bg-gray-50 outline-none focus:ring-0 focus:border-blue-600 text-gray-500 text-base resize-none"
              rows="3"
            ></textarea>
          </article>
        </section>

        <div className="flex justify-start">
          <button className="bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-800 text-xs mb-7">
            Enviar Datos
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormMedical;

