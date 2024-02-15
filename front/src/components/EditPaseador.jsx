import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SiderBar from './SiderBar';


const EditarPaseador = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [paseador, setPaseador] = useState(null);
    const [input, setInput] = useState({
        name: '',
        phone:'',
        address: '',
        status: true
        
    });
    

    useEffect(() => {
        const obtenerPaseador = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/user/${id}`);
                setPaseador(response.data);
                setInput(response.data);
            } catch (error) {
                console.error("Error al obtener la información del paseador:", error);
            }
        };

        obtenerPaseador();
    }, [id]);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3001/user/update/${id}`, input);
            console.log('Información del paseador actualizada');
            navigate(-1);
        } catch (error) {
            console.error("Error al actualizar la información del paseador:", error);
        }
    };

    if (!paseador) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="flex h-screen">
    <SiderBar />

    <div className="flex-col w-full overflow-auto">
        <div className="flex flex-row justify-between items-center mb-4 bg-black text-white p-4">
          <h1 className="text-2xl font-semibold w-full text-center">
            Editar Paseador
          </h1>
        </div>
        <div className='pt-[120px]'>
        <h1 className="block text-gray-700 text-lg font-bold mb-2">Editar a {paseador.name}</h1>
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
            
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Telefono
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="tel"
            type="tel"
            name="phone"
            value={input.phone}
            onChange={handleChange}
            
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
            
          />
        </div> 
        <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Estado</label>
                    <select name="status" value={input.status} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500">
                        <option value={true}>Activo</option>
                        <option value={false}>Desactivado</option>
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
                onClick={()=> navigate("/paseadores")}
                className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto block mt-4 mb-5"
            >
                Cancelar
            </button>
           
        </form>
        </div>
        </div>
        </div>
    );
};

export default EditarPaseador;