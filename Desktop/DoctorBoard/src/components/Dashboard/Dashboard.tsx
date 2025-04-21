import styles from "./Dashboard.styles.module.scss";
import React from "react";
import { DashboardProps } from "./Dashboard.types";

const Dashboard: React.FC<DashboardProps> = ({
  drName,
  email,
  address,
  speciality,
  availability,
  location,
  image,
  onBook,
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.header}>
          <p className={styles.name}>{drName}</p>
        </div>

        <div className={styles.content}>
          <img src={image} alt={`Dr. ${drName}`} className={styles.avatar} />

          <div className={styles.details}>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Dirección:</strong> {address}
            </p>
            <p>
              <strong>Especialidad:</strong> {speciality}
            </p>
            <p>
              <strong>Disponibilidad:</strong>
            </p>
            <ul>
              {availability.map((slot, i) => (
                <li key={i}>
                  {slot.day}: {slot.start} - {slot.end}
                </li>
              ))}
            </ul>
            <p>
              <strong>Ubicación:</strong> {location}
            </p>
          </div>
        </div>
        <div className={styles.actions}>
          <button className={styles.button}>Ver más</button>
          <button
            className={styles.button}
            onClick={() => onBook(drName, availability.map(slot => `${slot.day}: ${slot.start} - ${slot.end}`))}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
