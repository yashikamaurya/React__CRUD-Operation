import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/StudentTable.css";

// base url
const BASE_URL = "https://student-api-mdjv.onrender.com";
const StudentTable = () => {
  const navigate = useNavigate();
  const ViewDetails = (id) => {
    console.log(id);
    navigate(`/view/${id}`);
  };
  const EditDetails = (id) => {
    console.log(id);
    navigate(`/edit/${id}`);
  };
  const RemoveDetails = (id) => {
    if (window.confirm("Are you sure to delete this record?")) {
      fetch(`${BASE_URL}/students/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          alert("Data Delete Successfully");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  const [students, setStudents] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/students`)
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="stud-container">
      <h1>Student Records</h1>
      <Link to="/create">
        <button className="b1">Add New Student</button>
      </Link>

      <table className="stud-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Number</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students &&
            students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.city}</td>
                <td>{student.number}</td>
                <td>
                  <button
                    className="view-btn"
                    onClick={() => {
                      ViewDetails(student.id);
                    }}
                  >
                    View
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() => {
                      EditDetails(student.id);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => {
                      RemoveDetails(student.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
