import React, { useState } from 'react';
import { DayPilot, DayPilotCalendar, DayPilotNavigator } from "@daypilot/daypilot-lite-react";
import "./Calendar.css";

interface Event {
  id: number;
  text: string;
  start: string;
  end: string;
  backColor?: string;
  participants: number;
}

const Calendar = () => {
  const [startDate, setStartDate] = useState(DayPilot.Date.today());  // Fecha seleccionada

  // Configuración para el DayPilotCalendar (horarios entre 8:00 y 16:00)
  const calendarConfig = {
    viewType: "Days",
    days: 5,
    businessBeginsHour: 8,  // Empieza el horario a las 08:00
    businessEndsHour: 16,   // Termina el horario a las 16:00
    cellDuration: 60,       // Cada celda es de 1 hora
    timeRangeSelectedHandling: "Enabled",
    onTimeRangeSelected: async (args) => {
      const modal = await DayPilot.Modal.prompt("Selecciona el evento", "Evento 1");
      if (modal.result) {
        calendar.events.add({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          text: modal.result
        });
      }
      calendar.clearSelection();
    },
    eventDeleteHandling: "Update",
    onEventDelete: (args) => {
      calendar.events.remove(args.e);
    }
  };

  const [calendar, setCalendar] = useState(null);

  return (
    <div style={{ display: "flex" }}>
      {/* Calendario para seleccionar el día */}
      <div style={{ marginRight: "10px" }}>
        <DayPilotNavigator
          selectMode={"Day"}  // Selecciona por día
          showMonths={1}  // Muestra solo un mes
          skipMonths={1}
          selectionDay={startDate}
          onTimeRangeSelected={(args) => setStartDate(args.day)}  // Actualiza la fecha seleccionada
        />
      </div>

      {/* Calendario horario para seleccionar horas entre 08:00 y 16:00 */}
      <div style={{ flexGrow: 1 }}>
        <DayPilotCalendar
          startDate={startDate}  // Muestra el día seleccionado en el calendario
          {...calendarConfig}
          controlRef={(component) => setCalendar(component)}
        />
      </div>
    </div>
  );
}

export default Calendar;
