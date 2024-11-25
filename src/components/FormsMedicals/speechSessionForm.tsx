"use client";
import React, { useState, useEffect } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { getUserProfile } from '@/lib/utils';

const SpeechSessionForm = ({ hijoId }: { hijoId: string }) => {
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
      const response = await fetch('http://localhost:5000/api/medicalData/speechTherapies', {
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
          text: "Sesión fonoaudiológica agregada exitosamente.",
          duration: 5000,
          position: "right",
          style: {
            background: "#009933",
            color: "#FFFFFF",
            fontSize: "14px",
            padding: "10px",
            borderRadius: "4px",
            fontWeight: "bold",
          },
        }).showToast();
        console.log('Sesión fonoaudiológica agregada:', result);
        resetForm();
      } else {
        Toastify({
          text: "Error al agregar la sesión fonoaudiológica.",
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
        console.error('Error al agregar la sesión fonoaudiológica:', result);
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
      <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Formulario Sesión Fonoaudiológica</h2>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center w-full lg:w-full xl:w-full pt-4 lg:pt-8 mx-auto px-4 bg-white rounded-lg">
        {/* Form fields go here */}
        <div className="flex justify-start">
          <button
            className="bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-950 text-xs mb-7"
            type="submit"
          >
            Enviar Datos
          </button>
        </div>
      </form>
    </div>
  );
};

export default SpeechSessionForm;
