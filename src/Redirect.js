import React, { useState, useEffect } from "react";
import redirectImage from "./assets/images/redirect.svg";
import "./styles/Redirect.css";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();
  const loginHandler = () => navigate("/login");

  

  return (
    <div className="redirect">
      <div className="redirect-wrapper">
        <h1 className="redirect-h1">you have successfully registered</h1>
        
        <div className="redirect-control">
        
          <div>
            <img src={redirectImage} alt="redirect" className="redirect-image" />
          </div>
          <div className="redirect-flex" onClick={loginHandler}>
          <h2>An email verification link has been sent to your inbox. <br></br>Please check your email and click the link to confirm and activate your account.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
