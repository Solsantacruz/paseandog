
import { Link } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Home = () => {
  return (
    <div className="flex h-screen">
      {/* Navbar Vertical */}
      <div className="w-1/6 bg-black p-4 shadow-md text-white">
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
                <Link to="/" className="block w-full bg-green-600 text-black hover:bg-green-800 py-2 px-4 rounded focus:outline-none">
                  Salir
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      {/* Calendario */}
      <div className="flex-1  p-4 h-full overflow-y-auto">
        <div className="h-56">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
              { title: 'Reserva 1', date: '2024-01-15' },
              { title: 'Reserva 2', date: '2024-01-20' },
              // Agrega eventos según tus necesidades
            ]}
            themeSystem="standard"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
