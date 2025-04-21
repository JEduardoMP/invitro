import React from "react";
import styles from "./AppointmentEmpty.styles.module.scss";

const AppointmentsEmpty: React.FC = () => {
  return <p className={styles.empty}>No hay citas registradas.</p>;
};

export default AppointmentsEmpty;