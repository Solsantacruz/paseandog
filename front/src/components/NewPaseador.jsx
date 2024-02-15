import axios from "axios";
import { useState } from "react";
import validate from '../validation/validationUser';

const NewPaseador = ({ onPaseadorAdded, handleCloseModal}) => {
    const [errors, setErrors] = useState({required: true});
    const [input, setInput] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
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
            const response = await axios.post("http://localhost:3001/user", input);
            console.log(response.data); 
            // Reiniciar el formulario
            onPaseadorAdded(response.data);
            setInput({
                name: "",
                phone: "",
                email: "",
                address: "",
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

export default NewPaseador;