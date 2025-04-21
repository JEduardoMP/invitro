import React, { createContext, useState, useContext } from "react";
import { Appointment } from "../utils/Booking.types";

interface BookingContextType {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const addAppointment = (appointment: Appointment) => {
    setAppointments(prev => [...prev, appointment]);
  };

  return (
    <BookingContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};