import React from "react";
import "../Style/ViewTable.css";
import { useEffect, useState } from "react";
import { useParams, Link, data } from "react-router-dom";

const BASE_URL = "https://student-api-mdjv.onrender.com";
const ViewTable = () => {
  const { id } = useParams();
  const [studentdata, setStudentData] = useState({});
  useEffect(() => {
    fetch(`${BASE_URL}/students/${id}`)
      .then((res) => res.json())
      .then((data) => setStudentData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="View-container">
      <h1>View Student Details</h1>
      {studentdata && (
        <div className="View-details">
          <p>
            <strong>ID:</strong>
            {studentdata.id}
          </p>
          <p>
            <strong>Name:</strong>
            {studentdata.name}
          </p>
          <p>
            <strong>Age:</strong>
            {studentdata.age}
          </p>
          <p>
            <strong>City:</strong>
            {studentdata.city}
          </p>
          <p>
            <strong>Number:</strong>
            {studentdata.number}
          </p>
        </div>
      )}
      <br></br>
      <br></br>
      <Link to="/">
        <button className="b2">Back</button>
      </Link>
    </div>
  );
};

export default ViewTable;
