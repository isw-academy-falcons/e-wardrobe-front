import React, { useState } from "react";
import "./styles/Login.css";
import axios from "axios";
import MySvg2 from "./assets/images/illustration2.svg";
import loginVideo from "./assets/images/loginVideo.mp4";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Perform signup logic here using the retrieved form data

      const user = {
        firstName,
        lastName,
        email,
        gender,
        password,
        confirmPassword,
      };
    
      try {
        const response = await fetch("http://localhost:8080/api/v1/user/sign-up", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
    
        if (response.ok) {
          // Handle successful signup
          const responseData = await response.json();
          console.log("Signup successful:", responseData);
          // Redirect the user to the login page or show a success message
          navigate("/redirect");
        } else {
          // Handle signup errors, such as validation errors or duplicate email
          const errorData = await response.json();
          console.error("Signup error:", errorData);
          // Display error messages to the user
        }
      } catch (error) {
        console.error("Error:", error);
      }

    setFirstName("");
    setLastName("");
    setEmail("");
    setLastName("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="SignUp">
      <video
        src={loginVideo}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
      />

      <div className="overlay">
        <div className="Signup-container">
          <div className="signUp-container">
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <h2 className="input-container-header">SIGN UP</h2>
                <div className="name-inputs">
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="input-container">
                <div className="email-gender">
                  <input
                    className="signUp-email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <select
                    className="SignUp-gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div className="input-container">
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <p className="login-paragraph">
                Already have an account? <Link to="/login">Log In</Link>
              </p>

              <button className="login-button" type="submit">
                Sign Up
              </button>
            </form>
          </div>

          <div className="Signup-illustration">
          <p className="signup-header2">SKYFITZZ</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
