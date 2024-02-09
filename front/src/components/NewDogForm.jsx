import { useState, useEffect } from "react";
import axios from "axios";

const NewDogForm = ({ clientId, onClose, onUpdateClient }) => {
    const [formData, setFormData] = useState({
      name: "",
      years: 0,
      race: "",
      size: "",
      gender: "",
      weight: 0,
      energyLevel: "",
      avatar: "", 
      medicalDescription: "",
      behavior: "",
      status: true,
    });
  
    useEffect(() => {
      setFormData({
        name: "",
        years: 0,
        race: "",
        size: "",
        gender: "",
        weight: 0,
        energyLevel: "",
        avatar: "", 
        medicalDescription: "",
        behavior: "",
        status: true,
      });
    }, [clientId]); // Resetear el formulario cuando cambia el cliente
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3001/dog", {
            ...formData,
            DogOwnerId: clientId,
          });
          // Si la solicitud se completó con éxito
          alert("Mascota creada exitosamente"); // Mostrar alerta de éxito
          onUpdateClient(); // Actualizar el cliente
          setFormData({ // Limpiar el formulario después de enviarlo con éxito
            name: "",
            years: 0,
            race: "",
            size: "",
            gender: "",
            weight: 0,
            energyLevel: "",
            avatar: "", 
            medicalDescription: "",
            behavior: "",
            status: true,
          });
        } finally {
          // Independientemente del resultado de la solicitud, cerrar el formulario
          onClose(); // Cerrar el formulario después de enviarlo con éxito o error
        }
      };
    const handleClose = () => {
        onClose(); // Cerrar el formulario
      };


  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md m-4">
      <div className="p-4 grid grid-cols-2 gap-2">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="years">
            Edad
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="years"
            type="text"
            name="years"
            value={formData.years}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="race">
            Raza
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="race"
            type="text"
            name="race"
            value={formData.race}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="size">
            Tamaño
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="size"
            type="text"
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
            Género
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="gender"
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
            Peso
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="weight"
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="energyLevel">
            Nivel de Energía
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="energyLevel"
            type="text"
            name="energyLevel"
            value={formData.energyLevel}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="avatar">
            Avatar
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="avatar"
            type="text"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicalDescription">
            Descripción Médica
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="medicalDescription"
            name="medicalDescription"
            value={formData.medicalDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="behavior">
            Comportamiento
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="behavior"
            name="behavior"
            value={formData.behavior}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
            Estado
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value={true}>Activo</option>
            <option value={false}>Inactivo</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto block"
      >
        Guardar
      </button>
      {/* Botón de cancelar */}
      <button
                type="button"
                onClick={handleClose}
                className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto block mt-4"
            >
                Cancelar
            </button>
    </form>
  );
};

export default NewDogForm;
