import React from 'react';

const FormMedical = () => {
  return (
    <div className="flex flex-col justify-center w-full lg:w-3/4 xl:w-2/3 pt-10 lg:pt-20 mx-auto px-4">
      <section className="flex flex-col lg:flex-row gap-6 mb-6">
        <article className="flex-1">
          <label className="block text-xs leading-6 text-blue-900 mb-2">Fecha de la Sesión</label>
          <input className="w-full rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600" type="date" />
        </article>
        <article className="flex-1">
          <label className="block text-xs leading-6 text-blue-900 mb-2">Duración (en minutos)</label>
          <input className="w-full rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600" type="number" />
        </article>
      </section>

      <section className="flex flex-col lg:flex-row gap-6 mb-6">
        <article className="flex-1">
          <label className="block text-xs leading-6 text-blue-900 mb-2">Descripción</label>
          <textarea className="w-full rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600" rows="4"></textarea>
        </article>
      </section>

      <section className="flex flex-col lg:flex-row gap-6 mb-6">
        <article className="flex-1">
          <label className="block text-xs leading-6 text-blue-900 mb-2">Objetivos</label>
          <textarea className="w-full rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600" rows="3"></textarea>
        </article>
      </section>

      <section className="flex flex-col lg:flex-row gap-6 mb-6">
        <article className="flex-1">
          <label className="block text-xs leading-6 text-blue-900 mb-2">Observaciones</label>
          <textarea className="w-full rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-600" rows="3"></textarea>
        </article>
      </section>

    </div>
  );
};

export default FormMedical;
