import { DoctorDetails } from "../components/Dashboard/Dashboard.types";

export const mockDoctors: DoctorDetails[] = [
  {
    drName: "Dra. Carolina Méndez",
    email: "carolina.mendez@clinicasalud.com",
    address: "Av. Libertador 1234, Buenos Aires",
    speciality: "Cardiología",
    availability: [
      { day: "Lunes", start: "9:00", end: "12:00" },
      { day: "Miércoles", start: "14:00", end: "17:00" },
      { day: "Viernes", start: "10:00", end: "13:00" },
    ],
    location: "Buenos Aires, Argentina",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    drName: "Dr. Martín Rodríguez",
    email: "martin.rodriguez@centromedico.com",
    address: "Calle 45 #102-33, Medellín",
    speciality: "Dermatología",
    availability: [
      { day: "Martes", start: "10:00", end: "12:00" },
      { day: "Jueves", start: "13:00", end: "15:00" },
    ],
    location: "Medellín, Colombia",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    drName: "Dra. Ana Gómez",
    email: "ana.gomez@hospitalvida.org",
    address: "Rua das Flores 789, São Paulo",
    speciality: "Pediatría",
    availability: [
      { day: "Lunes", start: "8:00", end: "10:00" },
      { day: "Miércoles", start: "11:00", end: "13:00" },
      { day: "Viernes", start: "9:00", end: "12:00" },
    ],
    location: "São Paulo, Brasil",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    drName: "Dr. Luis Pérez",
    email: "luisperezdr@health.com",
    address: "Calle 10 #45-67, Ciudad de México",
    speciality: "Ginecología",
    availability: [
      { day: "Miércoles", start: "11:00", end: "14:00" },
      { day: "Viernes", start: "14:00", end: "16:00" },
      { day: "Sábado", start: "9:00", end: "11:00" },
    ],
    location: "Ciudad de México, México",
    image: "http://randomuser.me/api/portraits/men/11.jpg",
  },
];
