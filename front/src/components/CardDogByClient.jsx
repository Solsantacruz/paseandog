import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CardDog = ({ perro }) => {
  const [dog, setDog] = useState(null);

  useEffect(() => {
    const fetchDog = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/dog/${perro.id}`);
        setDog(response.data);
      } catch (error) {
        console.error("Error fetching dog data:", error);
      }
    };

    fetchDog();

    return () => {
      setDog(null);
    };
  }, [perro.id]);

  if (!dog) {
    return <p>Cargando...</p>;
  }

  return (
    <Link to={`/dog/${perro.id}`} className="max-w-md max-h-44 bg-white rounded-md overflow-hidden shadow-md m-4">
      <div className="bg-gray-200 h-24 flex justify-center items-center">
        <img
          src={dog.avatar}
          alt={dog.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 "> 
        <h2 className="text-lg font-semibold mb-1">{dog.name}</h2>
        <p className="text-gray-700 mb-1">Estado: {dog.status ? "Activo" : "Inactivo"}</p>
      </div>
    </Link>
  );
};

export default CardDog;
