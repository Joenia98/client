import React from "react";
import { BrowserRouter as BWR, Routes, Route } from "react-router-dom";

import EmployeesList from "./components/EmployeeLists";
import Employeesmod from "./components/ModifieEmployees";
import Menu from "./components/Navbar";

import { Container } from "@mui/material";


function App() {
  return (
    <BWR>
      <Menu/>
      <Container component="div" sx={{whiteSpace: 'normal',my: 2,p: 1}}>
        <Routes>
          <Route exact path="/" element={<EmployeesList />} />
          <Route exact path="/modifie" element={<Employeesmod />} />
        </Routes>
      </Container>
    </BWR>
  );
}

export default App;
