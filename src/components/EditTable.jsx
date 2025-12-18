import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../Style/EditTable.css";

const BASE_URL = "https://student-api-mdjv.onrender.com";
const EditTable = () => {
  const { id } = useParams();
  const [studentid, setStudentid] = useState("");
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [city, setcity] = useState("");
  const [number, setnumber] = useState("");

  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();
  // const [studentdata, setStudentData] = useState({});
  useEffect(() => {
    fetch(`${BASE_URL}/students/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStudentid(data.studentid);
        setname(data.name);
        setage(data.age);
        setcity(data.city);
        setnumber(data.number);
      })
      .catch((err) => console.log(err));
  }, []);
  const formHandler = (e) => {
    e.preventDefault();
    const studentData = { id, name, age, city, number };
    fetch(`${BASE_URL}/students/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    })
      .then(() => {
        alert("Student Data Updated Successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="edit-container">
      <h1>Update Student Record</h1>
      <form className="form" onSubmit={formHandler}>
        <label htmlFor="id">ID: </label>
        <input
          type="text"
          id="id"
          name="id"
          value={id}
          onChange={(e) => setid(e.target.value)}
          onMouseDown={() => setValidation(true)}
        ></input>
        {id.length === 0 && validation && (
          <span className="error" style={{ color: "red" }}>
            Please Enter Your ID
          </span>
        )}

        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          onMouseDown={() => setValidation(true)}
        ></input>
        {name.length === 0 && validation && (
          <span className="error" style={{ color: "red" }}>
            Please Enter Your Name
          </span>
        )}

        <label htmlFor="age">Age: </label>
        <input
          type="Number"
          id="age"
          name="age"
          value={age}
          onChange={(e) => setage(e.target.value)}
          onMouseDown={() => setValidation(true)}
        ></input>
        {age.length === 0 && validation && (
          <span className="error" style={{ color: "red" }}>
            Please Enter Your Age
          </span>
        )}

        <label htmlFor="city">City: </label>
        <input
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={(e) => setcity(e.target.value)}
          onMouseDown={() => setValidation(true)}
        ></input>
        {city.length === 0 && validation && (
          <span className="error" style={{ color: "red" }}>
            Please Enter Your City
          </span>
        )}

        <label htmlFor="number">Number: </label>
        <input
          type="Number"
          id="number"
          name="number"
          value={number}
          onChange={(e) => setnumber(e.target.value)}
          onMouseDown={() => setValidation(true)}
        ></input>
        {number.length === 0 && validation && (
          <span className="error" style={{ color: "red" }}>
            Please Enter Your Number
          </span>
        )}
        <div className="button">
          <button className="b1">Update</button>
          <Link to="/">
            <button className="b1">Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditTable;
