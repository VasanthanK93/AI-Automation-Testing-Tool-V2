// src/data/mockData.js

export const users = [
  {
    username: "doctor1",
    password: "Doctor@123",
    role: "DOCTOR",
    name: "Dr. John Smith"
  },
  {
    username: "admin1",
    password: "Admin@123",
    role: "ADMIN",
    name: "Hospital Admin"
  }
];

export const patients = [
  {
    id: 1,
    name: "John Doe",
    age: 45,
    condition: "Hypertension",
    lastVisit: "2026-02-10"
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 37,
    condition: "Diabetes",
    lastVisit: "2026-02-14"
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: 52,
    condition: "Cardiac Monitoring",
    lastVisit: "2026-02-01"
  }
];

export const appointments = [
  {
    id: 101,
    patient: "John Doe",
    doctor: "Dr. John Smith",
    date: "2026-02-25",
    status: "Scheduled"
  },
  {
    id: 102,
    patient: "Jane Smith",
    doctor: "Dr. John Smith",
    date: "2026-02-27",
    status: "Completed"
  }
];