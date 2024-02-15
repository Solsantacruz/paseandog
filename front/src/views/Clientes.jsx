import  { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Importa el componente Link
import SiderBar from "../components/SiderBar";
import NewClientForm from "../components/NewClient";


const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [selectedClientId, setSelectedClientId] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
  }, []);

  const handleClientClick = (clientId) => {
    setSelectedClientId(clientId);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleClientAdded = (newClient) => {
    setClientes([...clientes, newClient]);
    setShowModal(false);
  };

  return (
    <div className="flex h-screen">
      <SiderBar />

      <div className="flex-col w-full overflow-auto">
        <div className="flex flex-row justify-between items-center mb-4 bg-black text-white p-4">
          <h1 className="text-2xl font-semibold w-full text-center">
            Clientes
          </h1>
          <Link to="/clientes">
            <button className=" bg-green-900 hover:bg-green-700 rounded focus:outline-none font-sans"
            onClick={handleShowModal}>
              Nuevo Cliente
            </button>
          </Link>
        </div>

        <div className="flex flex-wrap">
          {clientes.map((cliente) => (
            <Link key={cliente.id} to={`/clientes/${cliente.id}`} className="w-full lg:w-1/5 p-4 cursor-pointer">
              <div
                className="h-48 bg-white rounded-lg shadow-md mb-4"
                onClick={() => handleClientClick(cliente.id)}
              >
                <img
                  src={cliente.avatar}
                  alt={cliente.name}
                  className="w-full h-32 object-cover rounded-t-md"
                />
                <p className="text-center font-semibold p-2">{cliente.name}</p>
              </div>
            </Link>
          ))}
        </div>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
            <div className="bg-white p-8 rounded-[10px] flex items-center justify-center">
            {/* vista modal */}
              <NewClientForm onClientAdded={handleClientAdded} handleCloseModal={handleCloseModal} />
              
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Clientes;
