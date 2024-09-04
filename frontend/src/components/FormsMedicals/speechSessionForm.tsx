"use client";
import React, { useState } from 'react';

const PsychologySessionForm = () => {
  const [idHijo, setIdHijo] = useState('');
  const [idUsuario, setIdUsuario] = useState('');
  const [fecha, setFecha] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [objetivos, setObjetivos] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [duracion, setDuracion] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/medicalData/psychologyTherapies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idHijo,
          idUsuario,
          fecha,
          horaInicio,
          horaFin,
          descripcion,
          objetivos,
          observaciones,
          duracion,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Terapia psicológica agregada:', result);
      } else {
        console.error('Error al agregar terapia psicológica:', result);
      }
    } catch (error) {
      console.error('Error al enviar datos:', error);
    }
  };

  return (
    <div className="bg-gray-100 p-10 rounded-lg shadow-lg w-full lg:w-3/4 xl:w-2/3 mx-auto">
      <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Formulario Sesión Fonoaudiológica</h2>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center w-full lg:w-full xl:w-full pt-4 lg:pt-8 mx-auto px-4 bg-white rounded-lg">
        <section className="flex flex-col lg:flex-row gap-4 mb-4">
          <article className="flex-1">
            <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">Fecha de la Sesión</label>
            <input
              className="w-full rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 bg-gray-50 outline-none focus:ring-0 focus:border-blue-600 text-gray-500 text-base p-2"
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
          </article>
        </section>

        <section className="flex flex-col lg:flex-row gap-4 mb-4">
          <article className="flex-1">
            <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">Hora de Inicio</label>
            <input
              className="w-full rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 bg-gray-50 outline-none focus:ring-0 focus:border-blue-600 text-gray-500 text-base p-2"
              type="time"
              value={horaInicio}
              onChange={(e) => setHoraInicio(e.target.value)}
              required
            />
          </article>
          <article className="flex-1">
            <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">Hora de Fin</label>
            <input
              className="w-full rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 bg-gray-50 outline-none focus:ring-0 focus:border-blue-600 text-gray-500 text-base p-2"
              type="time"
              value={horaFin}
              onChange={(e) => setHoraFin(e.target.value)}
              required
            />
          </article>
        </section>

        <section className="flex flex-col lg:flex-row gap-4 mb-4">
          <article className="flex-1">
            <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">Descripción</label>
            <textarea
              className="w-full rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 bg-gray-50 outline-none focus:ring-0 focus:border-blue-600 text-gray-500 text-base resize-none"
              rows="4"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            ></textarea>
          </article>
        </section>

        <section className="flex flex-col lg:flex-row gap-4 mb-4">
          <article className="flex-1">
            <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">Objetivos</label>
            <textarea
              className="w-full rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 bg-gray-50 outline-none focus:ring-0 focus:border-blue-600 text-gray-500 text-base resize-none"
              rows="4"
              value={objetivos}
              onChange={(e) => setObjetivos(e.target.value)}
              required
            ></textarea>
          </article>
        </section>

        <section className="flex flex-col lg:flex-row gap-4 mb-4">
          <article className="flex-1">
            <label className="block text-xs leading-6 text-blue-900 mb-2 font-semibold">Observaciones</label>
            <textarea
              className="w-full rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 bg-gray-50 outline-none focus:ring-0 focus:border-blue-600 text-gray-500 text-base resize-none"
              rows="4"
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}
              required
            ></textarea>
          </article>
        </section>

        <div className="flex justify-start">
          <button className="bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-950 text-xs mb-7" type="submit">
            Enviar Datos
          </button>
        </div>
      </form>
    </div>
  );
};

export default PsychologySessionForm;

