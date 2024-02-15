import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailPaseador = () => {
    const { id } = useParams();
    const [paseador, setPaseador] = useState(null);

    useEffect(() => {
        const idUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/user/${id}`);
                setPaseador(response.data);
            } catch (error) {
                console.error("Error fetching paseador data:", error);
            }
        };

        idUser();
    }, [id]);

    if (!paseador) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>Detalle del Paseador: {paseador.name}</h1>
            <p>ID: {paseador.id}</p>
            <p>Estado: {paseador.status === true ? 'Activo' : 'Desactivado'}</p>
            
        </div>
    );
};

export default DetailPaseador;