import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles/Redirect.css";
import redirectImage from "./assets/images/redirect.svg";

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
          <p>An email verification link has been sent to your inbox. <br></br>Please check your email and click the link to confirm and activate your account.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
