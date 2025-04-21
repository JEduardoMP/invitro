import React from "react";
import AppointmentItem from "./AppointmentItem/AppointmentItem";
import styles from "./AppointmentList.styles.module.scss";

interface Props {
  appointments: any[]; // puedes reemplazar con tu tipo exacto si tienes uno
}

const AppointmentsList: React.FC<Props> = ({ appointments }) => {
  return (
    <ul className={styles.list}>
      {appointments.map((appt, index) => (
        <AppointmentItem key={index} appointment={appt} />
      ))}
    </ul>
  );
};

export default AppointmentsList;