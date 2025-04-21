import React, { useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import BookingModal from "../components/BookingModal/BookingModal";
import { mockDoctors } from "../utils/DoctorsData";
import { DoctorDetails } from "../components/Dashboard/Dashboard.types";

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorDetails>({
    drName: "",
    email: "",
    address: "",
    speciality: "",
    availability: [],
    location: "",
    image: "",
  });

  const [selectedSpeciality, setSelectedSpeciality] = useState("Todas");

  const handleBook = (doctor: DoctorDetails) => {
    setSelectedDoctor(doctor);
    setModalOpen(true);
  };

  const uniqueSpecialities = [
    "Todas",
    ...Array.from(new Set(mockDoctors.map((doc) => doc.speciality))),
  ];

  const filteredDoctors =
    selectedSpeciality === "Todas"
      ? mockDoctors
      : mockDoctors.filter(
          (doc) => doc.speciality === selectedSpeciality
        );

  return (
    <div style={{ padding: "20px", maxWidth: 1000, margin: "0 auto" }}>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="specialityFilter" style={{ marginRight: "10px", color: "#666"}}>
          Filtrar por especialidad:
        </label>
        <select
          id="specialityFilter"
          value={selectedSpeciality}
          onChange={(e) => setSelectedSpeciality(e.target.value)}
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            background: "#3475b7"
          }}
        >
          {uniqueSpecialities.map((spec, idx) => (
            <option key={idx} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>

      {filteredDoctors.map((doctor, index) => (
        <Dashboard
          key={index}
          {...doctor}
          onBook={() => handleBook(doctor)}
        />
      ))}

      <BookingModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        doctor={selectedDoctor}
      />
    </div>
  );
};

export default Home;
