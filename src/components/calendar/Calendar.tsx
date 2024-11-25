// import React, { useState } from 'react';
// import { DayPilot, DayPilotCalendar, DayPilotNavigator } from "@daypilot/daypilot-lite-react";
// import "./Calendar.css";

// interface Event {
//   id: string; // Cambiado a string porque DayPilot.guid() devuelve un string
//   text: string;
//   start: string;
//   end: string;
//   backColor?: string;
//   participants?: number;
// }

// interface TimeRangeSelectedArgs {
//   start: string;
//   end: string;
//   day: string;
// }

// const Calendar = () => {
//   const [startDate, setStartDate] = useState(DayPilot.Date.today());
//   const [calendar, setCalendar] = useState<DayPilot.Calendar | null>(null);

//   const calendarConfig = {
//     viewType: "Days",
//     days: 5,
//     businessBeginsHour: 8,
//     businessEndsHour: 16,
//     cellDuration: 60,
//     timeRangeSelectedHandling: "Enabled",
//     onTimeRangeSelected: async (args: TimeRangeSelectedArgs) => {
//       if (!calendar) return;
  
//       const modal = await DayPilot.Modal.prompt("Selecciona el evento", "Evento 1");
//       if (modal.result) {
//         calendar.events.add({
//           start: args.start,
//           end: args.end,
//           id: DayPilot.guid(),
//           text: modal.result,
//         });
//       }
//       calendar.clearSelection();
//     },
//     eventDeleteHandling: "Update" as "Update", // Aseguramos el tipo correcto
//     onEventDelete: (args: any) => {
//       if (!calendar) return;
//       calendar.events.remove(args.e);
//     },
//   };
  

//   return (
//     <div style={{ display: "flex" }}>
//       <div style={{ marginRight: "10px" }}>
//         <DayPilotNavigator
//           selectMode={"Day"}
//           showMonths={1}
//           skipMonths={1}
//           selectionDay={startDate}
//           onTimeRangeSelected={(args) => setStartDate(args.day)}
//         />
//       </div>
//       <div style={{ flexGrow: 1 }}>
//         <DayPilotCalendar
//           startDate={startDate}
//           {...calendarConfig}
//           controlRef={(component: DayPilot.Calendar | null) => setCalendar(component)}
//         />
//       </div>
//     </div>
//   );
// };

// export default Calendar;
