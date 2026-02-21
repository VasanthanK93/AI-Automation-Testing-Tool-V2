import { Link } from "react-router-dom";

export default function Patients() {

  const patients = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" }
  ];

  return (
    <div>
      <h2 data-testid="patients-title">Patient List</h2>

      <ul>
        {patients.map(p => (
          <li key={p.id}>
            <Link
              to={`/patients/${p.id}`}
              data-testid={`patient-${p.id}`}
            >
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}