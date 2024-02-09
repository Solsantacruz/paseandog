import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CardDog = ({ perro }) => { // Quita el parámetro id ya que no es necesario
    const [dog, setDog] = useState(null);
  
    useEffect(() => {
      const fetchDog = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/dog/${perro.id}`); // Usar perro.id en lugar de id
          setDog(response.data);
        } catch (error) {
          console.error("Error fetching dog data:", error);
        }
      };
  
      fetchDog();
  
      return () => {
        // Cleanup function
        setDog(null); // Clear dog data on unmount
      };
    }, [perro.id]); // Actualiza la dependencia a perro.id
  
    if (!dog) {
      return <p>Cargando...</p>;
    }

  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md m-4">
      <img src={dog.avatar} alt={dog.name} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{dog.name}</h2>
        <p className="text-gray-700 mb-2">Edad: {dog.years}</p>
        <p className="text-gray-700 mb-2">Raza: {dog.race}</p>
        <p className="text-gray-700 mb-2">Tamaño: {dog.size}</p>
        <p className="text-gray-700 mb-2">Género: {dog.gender}</p>
        <p className="text-gray-700 mb-2">Peso: {dog.weight}</p>
        <p className="text-gray-700 mb-2">Nivel de Energía: {dog.energyLevel}</p>
        <p className="text-gray-700 mb-2">Descripción Médica: {dog.medicalDescription}</p>
        <p className="text-gray-700 mb-2">Comportamiento: {dog.behavior}</p>
        <p className="text-gray-700 mb-2">Estado: {dog.status ? "Activo" : "Inactivo"}</p>
      </div>
    </div>
  );
};

export default CardDog;
