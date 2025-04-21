import React from "react";
import { useBooking } from "../context/BookingContext";
import AppointmentsList from "../components/AppointmentList/AppointmentList";
import AppointmentsEmpty from "../components/AppointmentEmpty/AppointmentEmpty";

const Appointments: React.FC = () => {
  const { appointments } = useBooking();

  return (
    <div style={{ width: "100%", maxWidth: 600 }}>
      <h2 style={{color: "#666"}}>Citas Agendadas</h2>
      {appointments.length === 0 ? (
        <AppointmentsEmpty />
      ) : (
        <AppointmentsList appointments={appointments} />
      )}
    </div>
  );
};

export default Appointments;