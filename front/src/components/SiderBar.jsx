import { Link } from "react-router-dom";

const SiderBar = () => {
  return (
    <div className="flex h-screen">
      {/* Navbar Vertical */}
      <div className=" bg-black p-4 shadow-md text-white">
        <h2 className="text-2xl font-semibold mb-4">Menú</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <button className="w-full bg-green-900 hover:bg-green-700 py-2 px-4 rounded focus:outline-none">
                Reservar Paseo
              </button>
            </li>
            <li>
              <button className="w-full bg-green-900 hover:bg-green-700 py-2 px-4 rounded focus:outline-none">
                Clientes
              </button>
            </li>
            <li>
              <button className="w-full bg-green-900 hover:bg-green-700 py-2 px-4 rounded focus:outline-none">
                Alojamiento
              </button>
            </li>
            <li>
              <button className="w-full bg-green-900 hover:bg-green-700 py-2 px-4 rounded focus:outline-none">
                Finanzas
              </button>
            </li>
            <li>
              <div className="w-full p-10">
                <Link
                  to="/"
                  className="block w-full bg-green-600 text-black hover:bg-green-800 py-2 px-4 rounded focus:outline-none"
                >
                  Salir
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SiderBar;
