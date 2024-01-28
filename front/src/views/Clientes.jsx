import { useState, useEffect } from "react";
import axios from "axios";
import SiderBar from "../components/SiderBar";
import CardClient from "../components/CardClient."; // Asegúrate de importar el componente CardClient

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [selectedClientId, setSelectedClientId] = useState(null);

  useEffect(() => {
    // Hacer la solicitud GET al servidor para obtener la lista de clientes
    axios
      .get("http://localhost:3001/dogOwners")
      .then((response) => {
        setClientes(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de clientes:", error);
      });
  }, []); // El segundo parámetro [] asegura que useEffect se ejecute solo una vez, similar a componentDidMount

  const handleClientClick = (clientId) => {
    setSelectedClientId(clientId);
  };

  return (
    <div className="flex h-screen">
      <SiderBar />

      <div className="flex-col w-full overflow-auto">
        <div className="flex flex-row justify-between items-center mb-4 bg-black text-white p-4">
          <h1 className=" text-2xl font-semibold w-full text-center">
            Clientes
          </h1>
          <button className=" bg-green-900 hover:bg-green-700 rounded focus:outline-none">
            Nuevo Cliente
          </button>
        </div>

        <div className="flex flex-wrap">
          {clientes.map((cliente) => (
            <div
              key={cliente.id}
              className="w-full lg:w-1/5 p-4 cursor-pointer"
              onClick={() => handleClientClick(cliente.id)}
            >
              <div className="h-48 bg-white rounded-lg shadow-md mb-4">
                <img
                  src={cliente.avatar}
                  alt={cliente.name}
                  className="w-full h-32 object-cover rounded-t-md"
                />
                <p className="text-center font-semibold p-2">{cliente.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mostrar la tarjeta del cliente seleccionado */}
        {selectedClientId && <CardClient clientId={selectedClientId} />}
      </div>
    </div>
  );
};

export default Clientes;
