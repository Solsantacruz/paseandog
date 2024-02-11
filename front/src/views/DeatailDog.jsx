import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SiderDog from "../components/SiderDog";

const DetailDog = () => {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  const [observaciones, setObservaciones] = useState("");
  const [loading, setLoading] = useState(true);
  const [observacionesPerro, setObservacionesPerro] = useState([]);

  useEffect(() => {
    const fetchDog = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`http://localhost:3001/dog/${id}`);
        setDog(response.data);
        setLoading(false);
        fetchObservacionesPerro(id);
      } catch (error) {
        console.error("Error fetching dog data:", error);
      }
    };

    fetchDog();

    return () => {
      setDog(null);
    };
  }, [id]);

  const fetchObservacionesPerro = async (dogId) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/observacion?DogId=${dogId}`
      );
      setObservacionesPerro(
        response.data.filter((obs) => obs.DogId === parseInt(id))
      ); // Filtro de observaciones por ID de perro
    } catch (error) {
      console.error("Error fetching dog observations:", error);
    }
  };

  const handleObservacionesChange = (event) => {
    setObservaciones(event.target.value);
  };

  const handleSaveObservaciones = async () => {
    try {
      if (!observaciones) {
        console.error("No hay observaciones para guardar");
        return;
      }

      const data = {
        DogId: id,
        description: observaciones,
      };

      await axios.post(`http://localhost:3001/observacion`, data);

      fetchObservacionesPerro(id);

      setObservaciones("");
    } catch (error) {
      console.error("Error saving observaciones:", error);
    }
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="flex h-screen">
      <SiderDog />
      <div className="flex flex-col w-full">
        <div className="bg-black text-white p-4">
          <h1 className="text-2xl font-semibold text-center">
            Clientes y sus Mascotas
          </h1>
        </div>
        <div className="flex flex-wrap ">
          <div className="max-w-md bg-white rounded-md overflow-hidden shadow-md m-4">
            <div className="bg-gray-200 h-24 flex justify-center items-center">
              <img
                src={dog.avatar}
                alt={dog.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1">{dog.name}</h2>
              <p className="text-gray-700 mb-1">Edad: {dog.years}</p>
              <p className="text-gray-700 mb-1">Raza: {dog.race}</p>
              <p className="text-gray-700 mb-1">Tamaño: {dog.size}</p>
              <p className="text-gray-700 mb-1">Género: {dog.gender}</p>
              <p className="text-gray-700 mb-1">Peso: {dog.weight}</p>
              <p className="text-gray-700 mb-1">
                Nivel de Energía: {dog.energyLevel}
              </p>
              <p className="text-gray-700 mb-1">
                Descripción Médica: {dog.medicalDescription}
              </p>
              <p className="text-gray-700 mb-1">
                Comportamiento: {dog.behavior}
              </p>
              <p className="text-gray-700 mb-1">
                Estado: {dog.status ? "Activo" : "Inactivo"}
              </p>
            </div>
          </div>
          <div className="w-8/12 bg-white rounded-md overflow-hidden shadow-md m-4">
            <div className=" p-4">
              <label htmlFor="observaciones" className="block text-gray-700">
                Observaciones:
              </label>
              <input
                type="text"
                id="observaciones"
                value={observaciones}
                onChange={handleObservacionesChange}
                className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
              />
              <button
                onClick={handleSaveObservaciones}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600 focus:outline-none"
              >
                Guardar Observaciones
              </button>
              <div className="w-full bg-white rounded-md overflow-hidden shadow-md m-4">
                <div className="p-4 w-full">
                  <h2 className="text-lg font-semibold mb-1">Observaciones</h2>
                  <div className="w-full overflow-y-auto h-40">
                    {observacionesPerro.length > 0 ? (
                      <table className="w-full">
                        <thead>
                          <tr>
                            <th className="text-gray-700 border border-gray-300 px-4 py-2">
                              Fecha
                            </th>
                            <th className="text-gray-700 border border-gray-300 px-4 py-2">
                              Descripción
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {observacionesPerro.map((observacion) => (
                            <tr key={observacion.id}>
                              <td className="border border-gray-300 px-4 py-2">
                                {observacion.date}
                              </td>
                              <td className="border border-gray-300 px-4 py-2">
                                {observacion.description}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p className="text-gray-700">
                        No hay observaciones registradas para este perro.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDog;
