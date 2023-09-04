import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Pricing from "./Pricing"; 
import PageNotFound from './PageNotFound';
import Home from './Home';
import Redirect from './Redirect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path='/*' element={<PageNotFound/>}/>
        <Route path="/pricing" element={<Pricing />} />
        <Route path='/redirect' element={<Redirect/>}/>
        <Route path="/signup" element={<Signup />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>

  );
}

export default App;
