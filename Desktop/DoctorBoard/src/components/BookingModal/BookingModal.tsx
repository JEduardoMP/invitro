import React from "react";
import styles from "./BookingModal.styles.module.scss";
import { DoctorDetails, TimeSlot } from "../Dashboard/Dashboard.types";
import { useBooking } from "../../context/BookingContext";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  doctor: DoctorDetails;
}

const BookingModal: React.FC<BookingModalProps> = ({
  open,
  onClose,
  doctor,
}) => {
  const { addAppointment } = useBooking();
  const [selectedSlot, setSelectedSlot] = React.useState<TimeSlot | "">("");

  if (!open) return null;

  const handleConfirm = () => {
    if (selectedSlot) {
      addAppointment({
        doctor,
        slot: selectedSlot,
      });
      onClose();
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Agendar cita con {doctor.drName}</h2>

        <div className={styles.slots}>
          {doctor.availability.map((slot, index) => (
            <button
              key={index}
              className={`${styles.slotButton} ${
                selectedSlot === slot ? styles.selected : ""
              }`}
              onClick={() => setSelectedSlot(slot)}
            >
              {`${slot.day} – ${slot.start} - ${slot.end}`}
            </button>
          ))}
        </div>

        <div className={styles.actions}>
          <button onClick={onClose}>Cancelar</button>
          <button onClick={handleConfirm} disabled={!selectedSlot}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
