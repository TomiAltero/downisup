import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Crear un ícono personalizado para el pin rojo
const redIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/252/252025.png',
  iconRetinaUrl: 'https://cdn-icons-png.flaticon.com/512/252/252025.png',
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

const position: [number, number] = [-31.3763161, -64.2270261]; // Latitud y longitud del lugar

const MapComponent: React.FC = () => {
  useEffect(() => {
    // Cualquier efecto adicional que necesites
  }, []);

  return (
    <MapContainer className='rounded-3xl outline-none h-[300px] w-full z-10' center={position} zoom={15}>
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmFjdWIiLCJhIjoiY20wZ3JqNGwxMDNycDJxcTJrczJ0ZzdhZyJ9.u9Cca9Ah-oFVlYlExqmbIQ`}
        attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />

      <Marker position={position} icon={redIcon}>
        <Popup>Este es nuestro consultorio, Pérez de herrera 2053 B° Cerro de las Rosas.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
