import { useParams } from "react-router-dom";

export default function PatientDetails() {

  const { id } = useParams();

  return (
    <div>
      <h3 data-testid="patient-details">
        Patient Details - ID {id}
      </h3>
    </div>
  );
}