export interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  doctorName: string;
  availability: string[];
  onConfirm: (slot: string) => void;
}