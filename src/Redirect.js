import React, { useState, useEffect } from "react";
import redirectImage from "./assets/images/redirect.svg";
import "./styles/Redirect.css";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();
  const loginHandler = () => navigate("/login");

  // Set the initial countdown time (in seconds)
  const initialCountdownTime = 10; // Adjust as needed
  const [countdown, setCountdown] = useState(initialCountdownTime);

  // Function to decrement the countdown
  const decrementCountdown = () => {
    if (countdown > 0) {
      setCountdown(countdown - 1);
    } else {
      // When countdown reaches 0, automatically navigate to the login page
      loginHandler();
    }
  };

  // Use useEffect to start the countdown timer
  useEffect(() => {
    const countdownTimer = setTimeout(decrementCountdown, 1000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(countdownTimer);
  }, [countdown]);

  return (
    <div className="redirect">
      <div className="redirect-wrapper">
        <h1 className="redirect-h1">you have successfully registered</h1>
        <div className="redirect-control">
          <div>
            <img src={redirectImage} alt="redirect" className="redirect-image" />
          </div>
          <div className="redirect-flex" onClick={loginHandler}>
            <span>Continue To Login ({countdown}s)</span>
            <span>
              <EastIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
