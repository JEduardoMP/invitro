import { useNavigate } from "react-router-dom";
import styles from "./TopBar.styles.module.scss";

export default function TopBar() {

  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      <div style={{cursor: "pointer"}}onClick={() => navigate("/")}>
        <h1>DoctorBoard</h1>
      </div>
      <div className={styles.actions}>
        <button onClick={() => navigate("/appointments")}>Citas agendadas</button>
      </div>
    </div>
  );
}
