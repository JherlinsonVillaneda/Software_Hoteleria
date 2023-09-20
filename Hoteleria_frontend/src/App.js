import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from "./components/Home_page";
import Login from "./components/Login";
import Navbar_Home from "./components/Navbar_Home";
import Main from "./components/Main_Page";
import AdminLogin from "./components/AdminLogin";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar_Home /> {/* Se muestra solo en la página de inicio */}
                <Home />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main/>} />
          <Route path="/adminLogin" element={<AdminLogin/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
