
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import SiderBar from '../components/SiderBar';

const Home = () => {
  return (
    <div className="flex h-screen">
      {/* Navbar Vertical */}
      <SiderBar />

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
