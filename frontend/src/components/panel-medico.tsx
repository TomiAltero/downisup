"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardDataStats from "@/components/ui/cardMedical";

export default function PanelMedico() {
  const [presionArterial, setPresionArterial] = useState(null);
  const [temperatura, setTemperatura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatosMedicos = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5000/api/hijos/profiles",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const hijos = response.data.hijos;
        console.log(hijos);
        if (hijos.length > 0) {
          const hijo = hijos[0];

          const [presiones, temperaturas, pesos] = await Promise.all([
            axios.get(
              `http://localhost:5000/api/hijos/${hijo.id}/presionArterial`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            ),
            axios.get(
              `http://localhost:5000/api/hijos/${hijo.id}/temperatura`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            ),
            axios.get(`http://localhost:5000/api/hijos/${hijo.id}/peso`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }),
          ]);

          if (presiones.data.length > 0) {
            setPresionArterial(presiones.data[0]);
          }

          if (temperaturas.data.length > 0) {
            setTemperatura(temperaturas.data);
          }

          if (pesos.data.length > 0) {
            setPeso(pesos.data);
          }
        }
      } catch (error) {
        console.error("Error al obtener datos médicos:", error);
        setError("Error al obtener datos médicos");
      } finally {
        setLoading(false);
      }
    };

    obtenerDatosMedicos();
  }, []);

  if (loading) {
    return <p style={{ color: "black" }}>Cargando datos...</p>;
  }

  if (error) {
    return <p style={{ color: "black" }}>Error: {error}</p>;
  }

  return (
    <section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {presionArterial ? (
          <CardDataStats
            category="Presion Arterial"
            value={`${presionArterial.sistolica}/${presionArterial.diastolica}`}
            description={presionArterial.descripcion}
            improved={true}
            worsened={false}
          />
        ) : (
          <CardDataStats
            category="Presion Arterial"
            value="N/A"
            description="No hay datos de presión arterial disponibles."
            improved={false}
            worsened={false}
          />
        )}

        {temperatura ? (
          <CardDataStats
            category="Temperatura"
            value={temperatura[0].valor}
            description={temperatura[0].descripcion}
            improved={temperatura[0].valor <= 37.5}
            worsened={temperatura[0].valor > 37.5}
          />
        ) : (
          <CardDataStats
            category="Temperatura"
            value="N/A"
            description="No hay datos de temperatura disponibles."
            improved={false}
            worsened={false}
          />
        )}

        {peso ? (
          <CardDataStats
            category="Peso"
            value={peso[0].peso}
            description={peso[0].descripcion}
            improved={true}
            worsened={false}
          />
        ) : (
          <CardDataStats
            category="Peso"
            value="N/A"
            description="No hay datos de peso disponibles."
            improved={false}
            worsened={false}
          />
        )}
      </div>
    </section>
  );
}
