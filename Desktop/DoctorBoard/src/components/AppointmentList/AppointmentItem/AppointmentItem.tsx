import React from "react";
import styles from "./AppointmentItem.styles.module.scss";

interface Props {
  appointment: any;
}

const AppointmentItem: React.FC<Props> = ({ appointment }) => {
  const { doctor, slot } = appointment;

  return (
    <li className={styles.item}>
      <h3>{doctor.drName}</h3>
      <p>
        <strong>Especialidad:</strong> {doctor.speciality}
      </p>
      <p>
        <strong>Dirección:</strong> {doctor.address}
      </p>
      <p>
        <strong>Horario:</strong> {slot.day} – {slot.start} a {slot.end}
      </p>
    </li>
  );
};

export default AppointmentItem;