import React from "react";
import Layout from "./Components/Layout/Layout";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "@mui/icons-material/Dashboard";
import Login from "@mui/icons-material/Login";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dasboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
