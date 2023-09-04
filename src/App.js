import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Pricing from "./Pricing"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
