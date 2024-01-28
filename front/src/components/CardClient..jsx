import { useState, useEffect } from "react";
import axios from "axios";

const CardClient = ({ clientId }) => {
  const [cliente, setCliente] = useState(null);

  useEffect(() => {
    // Hacer la solicitud GET al servidor para obtener la información del cliente específico
    axios
      .get(`http://localhost:3001/dogOwners/${clientId}`)
      .then((response) => {
        setCliente(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la información del cliente:", error);
      });
  }, [clientId]); // El segundo parámetro [clientId] asegura que useEffect se ejecute cuando cambia el ID

  if (!cliente) {
    return <p>Cargando...</p>; // Puedes mostrar un mensaje de carga mientras se obtiene la información del cliente
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md m-4">
      <img src={cliente.avatar} alt={cliente.name} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{cliente.name}</h2>
        <p className="text-gray-700 mb-2">Teléfono: {cliente.phone}</p>
        <p className="text-gray-700 mb-2">Correo Electrónico: {cliente.email}</p>
        <p className="text-gray-700 mb-2">Dirección: {cliente.address}</p>
        <p className="text-gray-700 mb-2">Código Postal: {cliente.postalCode}</p>
        <p className="text-gray-700 mb-2">Distrito: {cliente.district}</p>
        <p className="text-gray-700 mb-2">Contacto de Emergencia: {cliente.emergencyContact}</p>
        <p className="text-gray-700 mb-2">Estado: {cliente.status ? "Activo" : "Inactivo"}</p>
      </div>
    </div>
  );
};

export default CardClient;
