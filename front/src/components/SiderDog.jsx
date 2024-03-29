import { useNavigate } from "react-router";


const SiderDog = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navegar hacia atrás en el historial de navegación
  };

  return (
    <div className="flex h-screen">
      {/* Navbar Vertical */}
      <div className=" bg-black p-4 shadow-md text-white">
        <h2 className="text-2xl font-semibold mb-8">PaseanDog</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <button onClick={()=> navigate("/clientes")}  className="w-full bg-green-900 hover:bg-green-700 py-2 px-4 rounded focus:outline-none">
                Clientes
              </button>
            </li>
            <li>
              <button onClick={()=> navigate("/home")} className="w-full bg-green-900 hover:bg-green-700 py-2 px-4 rounded focus:outline-none">
                Home
              </button>
            </li>
            <li>
              <button onClick={handleGoBack} className="w-full bg-green-900 hover:bg-green-700 py-2 px-4 rounded focus:outline-none">
                Volver Atrás
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SiderDog;
