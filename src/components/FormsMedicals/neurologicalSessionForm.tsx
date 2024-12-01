"use client";
import React, { useState, useEffect } from 'react';
import { getUserProfile } from '@/lib/utils';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const NeurologicalSessionForm = ({ hijoId }: { hijoId: string }) => {
  const [idUsuario, setIdUsuario] = useState('');
  const [fecha, setFecha] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [objetivos, setObjetivos] = useState('');
  const [observaciones, setObservaciones] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const userProfile = await getUserProfile({ token });
          setIdUsuario(userProfile.id);
        }
      } catch (error) {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const resetForm = () => {
    setFecha('');
    setHoraInicio('');
    setHoraFin('');
    setDescripcion('');
    setObjetivos('');
    setObservaciones('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!hijoId || !idUsuario || !fecha || !horaInicio || !horaFin || !descripcion || !objetivos || !observaciones) {
      Toastify({
        text: "Todos los campos son obligatorios.",
        duration: 5000,
        position: "right",
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          fontSize: "14px",
          padding: "10px",
          borderRadius: "4px",
          fontWeight: "bold",
        },
      }).showToast();
      return;
    }
    try {
      const response = await fetch('https://downisup-api-production.up.railway.app/api/medicalData/neurologicalTherapies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          hijoId,
          idUsuario,
          date: fecha,
          description: descripcion,
          objectives: objetivos,
          observations: observaciones,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        Toastify({
          text: "Terapia Neurologica agregada exitosamente.",
          duration: 5000,
          position: "right",
          style: {
            background: "#009933",
            color: "#FFFFFF",
            fontSize: "14px",
            padding: "10px",
            borderRadius: "4px",
            fontWeight: "bold",
            marginTop: "70px",
          },
        }).showToast();
        console.log('Terapia neurologica agregada:', result);
        resetForm(); 
      } else {
        Toastify({
          text: "Error al agregar terapia neurologica.",
          duration: 5000,
          position: "right",
          style: {
            background: "#FF0000",
            color: "#FFFFFF",
            fontSize: "14px",
            padding: "10px",
            borderRadius: "4px",
            fontWeight: "bold",
          },
        }).showToast();
        console.error('Error al agregar terapia neurologica:', result);
      }
    } catch (error) {
      Toastify({
        text: "Error al enviar datos.",
        duration: 5000,
        position: "right",
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          fontSize: "14px",
          padding: "10px",
          borderRadius: "4px",
          fontWeight: "bold",
        },
      }).showToast();
      console.error('Error al enviar datos:', error);
    }
  };

  return (
    <div className="bg-gray-100 p-10 rounded-lg shadow-lg w-full lg:w-3/4 xl:w-2/3 mx-auto">
      <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Formulario Sesión Neurológica</h2>
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
              rows={4}
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
              rows={4}
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
              rows={4}
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}
              required
            ></textarea>
          </article>
        </section>
        <div className="flex justify-start">
          <button className="bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-800 text-xs mb-7" type="submit">
            Enviar Datos
          </button>
        </div>
      </form>
    </div>
  );
};

export default NeurologicalSessionForm;

