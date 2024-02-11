import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import DogCard from "../components/DogCard"; // Importa el componente de tarjeta de perro
import SiderDog from "../components/SiderDog";

const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await axios.get("http://localhost:3001/dog");
        setDogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dogs:", error);
      }
    };

    fetchDogs();
  }, []);

  if (loading) {
    return <p>Cargando perros...</p>;
  }

  return (
    <div className="flex h-screen">
      <SiderDog />
      <div className="flex flex-col w-full overflow-y-auto"> {/* Contenedor con scroll */}
        <div className="bg-black text-white p-4">
          <h1 className="text-2xl font-semibold text-center">Mascotas</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Mapea sobre la lista de perros y muestra una tarjeta para cada uno */}
          {dogs.map((dog) => (
            <Link key={dog.id} to={`/dog/${dog.id}`}>
              {/* Enlace que lleva a la ruta del perro */}
              <DogCard dog={dog} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dogs;
