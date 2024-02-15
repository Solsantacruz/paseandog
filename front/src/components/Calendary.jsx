import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import  { useState, useEffect } from "react";


const Calendary = () => {


  return (
    <div className="flex-1  p-4 h-full overflow-y-auto">
      <div className="h-56">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: "Pancho", date: "2024-01-15" },
            { title: "Pancho", date: "2024-01-15" },
            { title: "Pancho", date: "2024-01-15" },
            { title: "Pancho", date: "2024-01-15" },
            { title: "Pancho", date: "2024-01-15" },
            { title: "Pancho", date: "2024-01-15" },
            { title: "Reserva 2", date: "2024-01-20" },
            // Agrega eventos según tus necesidades
          ]}
          themeSystem="standard"
        />
      </div>
      
    </div>
  );
};

export default Calendary;
