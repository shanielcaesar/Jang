import React, { useState } from "react";
import Student from "./Student";
import { useNavigate } from "react-router-dom";

const Students = () => {
  const navigate = useNavigate();

  const goBackToMain = () => {
    navigate("/");
  };
  const students = [
    { name: "Alice", department: "Science", finalGrade: 85, status: "Pass" },
    { name: "Bob", department: "Arts", finalGrade: 90, status: "Pass" },
    { name: "Charlie", department: "Commerce", finalGrade: 75, status: "Pass" },
    { name: "David", department: "Science", finalGrade: 95, status: "Pass" },
    { name: "Eve", department: "Arts", finalGrade: 80, status: "Pass" },
    { name: "Frank", department: "Commerce", finalGrade: 88, status: "Pass" },
    { name: "Grace", department: "Science", finalGrade: 92, status: "Pass" },
    { name: "Heidi", department: "Arts", finalGrade: 78, status: "Pass" },
    { name: "Ivan", department: "Commerce", status: "Fail" },
    { name: "Judy", department: "Science", status: "Fail" },
  ];

  const [filter, setFilter] = useState("All");

  const handleFilterChange = (status) => {
    setFilter(status);
  };

  const filteredStudents = students.filter(
    (student) => filter === "All" || student.status === filter
  );

  return (
    <div>
      <div className="container">
        <button className="navigate-button" onClick={goBackToMain}>
          Home
        </button>
        <div className="filter-buttons">
          <button onClick={() => handleFilterChange("Pass")}>Pass</button>
          <button onClick={() => handleFilterChange("Fail")}>Fail</button>
          <button onClick={() => handleFilterChange("All")}>All</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Student Names</th>
              <th>Department</th>
              <th>Final Grade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <Student key={index} student={student} index={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
