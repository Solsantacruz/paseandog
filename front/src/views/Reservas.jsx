import axios from "axios";
import { useState } from "react";
import validate from '../validation/validation';

const Reservas = ({handleCloseModal}) => {
    const [errors, setErrors] = useState({required: true});
    const [input, setInput] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        postalCode: "",
        district: "",
        emergencyContact: "",
        avatar: "#ff1f1f",
        AdminId: 1
    });

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        let objError = validate({
            ...input, [e.target.name] : e.target.value
        })
        setErrors(objError)
    };

    const handleSubmit = async (e) => {
        if(errors.required){
            e.preventDefault();
            alert("Complete todos los campos para continuar")
        } else {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/calendar", input);
            console.log(response.data); 
            // Reiniciar el formulario
            setInput({
                fecha: "",
                hora: "",
                detalle: "",
                tipoPago: "",
                postalCode: "",
                district: "",
                emergencyContact: "",
                avatar: "",
                AdminId: 1
            });
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    }
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
            value={input.name}
            onChange={handleChange}
            style={
                errors.name ? { border: '0.5px solid #ff1f1f'} : null
              }
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Telefono
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="years"
            type="tel"
            name="phone"
            value={input.phone}
            onChange={handleChange}
            style={
                errors.phone ? { border: '0.5px solid #ff1f1f'} : null
              }
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Correo
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="email"
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            style={
                errors.email ? { border: '0.5px solid #ff1f1f'} : null
              }
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Dirección
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="address"
            type="text"
            name="address"
            value={input.address}
            onChange={handleChange}
            style={
                errors.address ? { border: '0.5px solid #ff1f1f'} : null
              }
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postalCode">
            Código Postal
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="postalCode"
            type="number"
            name="postalCode"
            value={input.postalCode}
            onChange={handleChange}
            style={
                errors.postalCode ? { border: '0.5px solid #ff1f1f'} : null
              }
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="district">
            Distrito
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="district"
            type="text"
            name="district"
            value={input.district}
            onChange={handleChange}
            style={
                errors.district ? { border: '0.5px solid #ff1f1f'} : null
              }
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emergencyContact">
            Contacto de emergencia
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="emergencyContact"
            type="text"
            name="emergencyContact"
            value={input.emergencyContact}
            onChange={handleChange}
            style={
                errors.emergencyContact ? { border: '0.5px solid #ff1f1f'} : null
              }
          />
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
                onClick={handleCloseModal}
                className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto block mt-4 mb-5"
            >
                Cancelar
            </button>
           
        </form>
    );
};

export default Reservas;