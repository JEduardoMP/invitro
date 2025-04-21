import { DoctorDetails, TimeSlot } from "../components/Dashboard/Dashboard.types";

export interface Appointment {
  doctor: DoctorDetails;
  slot: TimeSlot;
}