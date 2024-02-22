import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SiderBar from "../components/SiderBar";
import NewPaseador from "../components/NewPaseador";
import EditPaseador from "../components/EditPaseador";

const Paseadores = () => {
  const [paseadores, setPaseadores] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Hacer la solicitud GET al servidor para obtener la lista de clientes
    axios
      .get("http://localhost:3001/user")
      .then((response) => {
        setPaseadores(response.data);
        setSearchResults(response.data); // Inicialmente, los resultados de la búsqueda son todos los paseadores
      })
      .catch((error) => {
        console.error("Error al obtener la lista de user:", error);
      });
  }, []);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddPaseador = (newPaseador) => {
    setPaseadores([...paseadores, newPaseador]);
    setSearchResults([...searchResults, newPaseador]); // Agregar el nuevo paseador a los resultados de búsqueda
    setShowModal(false);
  };

  const handleSearchByName = () => {
    const filteredPaseadores = paseadores.filter((p) =>
      p.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setSearchResults(filteredPaseadores);
  };

  const handleChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleResetSearch = () => {
    setSearchName("");
    setSearchResults(paseadores);
  };
  return (
    <div className="flex h-screen">
      <SiderBar />

      <div className="flex-col w-full overflow-auto">
        <div className="flex flex-row justify-between items-center mb-4 bg-black text-white p-4">
          <h1 className="text-2xl font-semibold w-full text-center">
            Paseadores
          </h1>
          <Link to="/paseadores">
            <button
              className=" bg-green-900 hover:bg-green-700 rounded focus:outline-none font-sans"
              onClick={handleShowModal}
            >
              Nuevo Paseador
            </button>
          </Link>
        </div>

        <div className="flex flex-col">
          <div className="mb-4 mx-auto max-w-sm ">
            <input
              type="text"
              value={searchName}
              onChange={handleChange}
              placeholder="Buscar por nombre"
              className="w-full border-gray-300 border rounded-md p-2"
            />
            <button
              className="mt-2 bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSearchByName}
            >
              Buscar
            </button>
            <button onClick={handleResetSearch} className="mt-2 ml-2 bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Mostrar todos</button>
          </div>
          <div className="flex flex-wrap pt-10">
          {searchResults.map((paseador) => (
            <div
              key={paseador.id}
              className="flex items-center p-6 ml-10 border-gray-300 border bg-white divide-y rounded-lg w-full md:w-1/2 lg:w-1/3  "
            >
              <div className="flex flex-col space-y-2 divide-y">
                <div className="py-5">
                  <div className="">
                    <div className="flex flex-col space-y-2 text-center">
                      <span className="">Nombre: {paseador.name}</span>
                      <span className="">Teléfono: {paseador.phone}</span>
                      <span className="">Correo: {paseador.email}</span>
                      <span className="">{paseador.address}</span>
                      <span className="">
                        {paseador.status === true ? "Activo" : "Desactivado"}
                      </span>
                    </div>
                  </div>
                  <div className="pt-5">
                    <Link to={`/paseadores/${paseador.id}`}>
                      <button className="border rounded-md px-3 py-1 bg-green-900 hover:bg-green-700 text-white">
                        Editar
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
            <div className="bg-white p-8 rounded-[10px] flex items-center justify-center">
              {/* vista modal */}
              <NewPaseador
                onPaseadorAdded={handleAddPaseador}
                handleCloseModal={handleCloseModal}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Paseadores;








// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import SiderBar from "../components/SiderBar";
// import NewPaseador from "../components/NewPaseador";
// import EditaPaseador from "../components/EditPaseador";




// const Paseadores = () => {
//     const [paseador, setPaseador] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [searchName, setSearchName] = useState("");


//     useEffect(() => {
//         // Hacer la solicitud GET al servidor para obtener la lista de clientes
//         axios
//           .get("http://localhost:3001/user")
//           .then((response) => {
//             setPaseador(response.data);
//           })
//           .catch((error) => {
//             console.error("Error al obtener la lista de user:", error);
//           });
//       }, []);


//       const handleClientClick = (paseadorId) => {
//         setSelectedPaseadorId(paseadorId);
//       };

//       const handleShowModal = () => {
//         setShowModal(true);
//       };
    
//       const handleCloseModal = () => {
//         setShowModal(false);
//       };

//       const handleAddPaseador = (newPaseador) => {
//         setPaseador([...paseador, newPaseador]);
//         setShowModal(false);
//       };

//       const handleSearchByName = () => {
//         const paseador = paseadores.find((p) => p.name === searchName);
//         if (paseador) {
//           setSelectedPaseador(paseador);
//         } else {
//           setSelectedPaseador(null);
//         }
//       };

      



//     //   console.log('paseador', paseador);
//     return(
//     <div className="flex h-screen">
//     <SiderBar />

//     <div className="flex-col w-full overflow-auto">
//         <div className="flex flex-row justify-between items-center mb-4 bg-black text-white p-4">
//           <h1 className="text-2xl font-semibold w-full text-center">
//             Paseadores
//           </h1>
//           <Link to="/paseadores">
//             <button className=" bg-green-900 hover:bg-green-700 rounded focus:outline-none font-sans" onClick={handleShowModal}
//             >
//               Nuevo Paseador
//             </button>
//           </Link>
//         </div>

//         <div className=" ">
            
//           {paseador.map((paseador)  => (
            
           
//            <div class="flex items-center p-6">
//     <div class="flex flex-col border-gray-300 border bg-white divide-y rounded-lg flex-none w-full md:w-1/2 lg:w-1/3">
//         <div class="flex flex-col space-y-2 divide-y">
//             {/* <!-- Item --> */}
//             <div class="py-5">
//                 <div class="">
                    
//                     <div class="flex flex-col space-y-2">
//                         {/* <span>{paseador.id}</span> */}
//                         <span className="">Nombre: {paseador.name}</span>
//                         <span className="">Teléfono: {paseador.phone}</span>
//                         <span className="">Correo: {paseador.email}</span>
//                         <span className="">{paseador.address}</span>
//                         <span className="">{paseador.status === true ? 'Activo' : 'Desactivado'}</span>
//                     </div>
                    
//                 </div>
//                 <div className="pt-5">
//                     <Link key={paseador.id} to={`/paseadores/${paseador.id}`} >
//                     <button className="border rounded-md px-3 py-1 bg-green-900 hover:bg-green-700 text-white">
//                         Editar
//                     </button>
//                     </Link>
//                 </div>
//             </div>
//             {/* <!-- Item --> */}
//         </div>
        
//     </div>
// </div>
              
            
//           ))}
          
//         </div>
//         {showModal && (
//           <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
//             <div className="bg-white p-8 rounded-[10px] flex items-center justify-center">
//             {/* vista modal */}
//               <NewPaseador onPaseadorAdded={handleAddPaseador} handleCloseModal={handleCloseModal} />
              
//             </div>
//           </div>
//         )}

        
//       </div>
    
//     </div>
//     )
// }


// export default Paseadores;