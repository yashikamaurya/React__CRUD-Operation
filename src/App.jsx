import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentTable from "./components/StudentTable";
import CreateTable from "./components/CreateTable";
import EditTable from "./components/EditTable";
import ViewTable from "./components/ViewTable";
const App = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "60px",
          color: "brown",
          textDecoration: "underline",
          boxShadow: "0px 0px 10px 0px grey",
          width: "50%",
          margin: "auto",
          borderRadius: "10px",
        }}
      >
        Student Table
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentTable />} />
          <Route path="/create" element={<CreateTable />} />
          <Route path="/edit/:id" element={<EditTable />} />
          <Route path="/view/:id" element={<ViewTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
