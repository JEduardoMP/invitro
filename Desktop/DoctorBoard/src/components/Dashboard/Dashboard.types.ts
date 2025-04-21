export interface DashboardProps extends DoctorDetails {
  onBook: (name: string, availability: string[]) => void;
}

export interface DoctorDetails {
  drName: string;
  email: string;
  address: string;
  speciality: string;
  availability: TimeSlot[];
  location: string;
  image: string;
}

export interface TimeSlot {
  day: string;
  start: string;
  end: string;
}
