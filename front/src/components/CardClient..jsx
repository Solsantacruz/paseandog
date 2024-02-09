import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SiderClient from "./SiderClient";
import NewDogForm from "./NewDogForm";
import CardDog from "./CardDog"; // Importar el nuevo componente

const CardClient = () => {
  const { id } = useParams();
  const [cliente, setCliente] = useState();
  const [perros, setPerros] = useState([]);
  const [showNewDogForm, setShowNewDogForm] = useState(false);

  useEffect(() => {
    // Obtener información del cliente
    axios
      .get(`http://localhost:3001/dogOwners/${id}`)
      .then((response) => {
        setCliente(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la información del cliente:", error);
      });

    // Obtener todos los perros
    axios
      .get(`http://localhost:3001/dog`)
      .then((response) => {
        setPerros(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de perros:", error);
      });
  }, [id]);

  const handleNewDog = () => {
    setShowNewDogForm(true);
  };

  const handleCloseModal = () => {
    setShowNewDogForm(false);
  };

  if (!cliente) {
    return <p>Cargando...</p>;
  }

  // Filtrar los perros por el ID del cliente
  // Filtrar los perros por el ID del cliente
const perrosDelCliente = perros.filter((perro) => perro.DogOwnerId.toString() === id);


console.log("Perros del cliente:", perrosDelCliente);



  return (
    <div className="flex h-screen">
      <SiderClient />
      <div className="flex-col w-full overflow-auto">
        <div className="flex flex-row justify-between items-center mb-4 bg-black text-white p-4">
          <h1 className="text-2xl font-semibold w-full text-center">
            Clientes
          </h1>
          <button
            onClick={handleNewDog}
            className="bg-green-900 hover:bg-green-700 rounded focus:outline-none"
          >
            Nueva Mascota
          </button>
        </div>
        {showNewDogForm && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-md overflow-hidden shadow-md max-w-md p-6">
              <button
                className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={handleCloseModal}
              >
                X
              </button>
              <NewDogForm clientId={id} onClose={handleCloseModal} />
            </div>
          </div>
        )}
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

        {/* Mostrar las tarjetas de los perros del cliente */}
        
        <div className="grid grid-cols-3 gap-4">
          {perrosDelCliente.map((perro) => (
            <CardDog key={perro.id} perro={perro} id={id} />

          ))}
        </div>
      </div>
    </div>
  );
};

export default CardClient;
