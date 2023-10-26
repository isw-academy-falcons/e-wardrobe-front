import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./styles/Login.css";
import { Toast } from "./components/ApiResponse";
import loginVideo from "./assets/images/loginVideo.mp4";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null); // State for error message
  const navigate = useNavigate();

  // Validation function to check if the input contains only characters
  const isValidName = (name) => /^[A-Za-z]+$/.test(name);

  // Validation function to check if the first name and last name are valid
  const isNameValid = () => isValidName(firstName) && isValidName(lastName);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      gender,
      password,
      confirmPassword,
    };

    if (!isNameValid()) {
      setError("First name and last name should only contain characters.");
      return;
    }

    try {
      const response = await fetch("https://skyfitzz.up.railway.app/api/v1/user/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // Handle successful signup
        const responseData = await response.json();
        Toast.fire({
          icon: "success",
          title: responseData.message
        })
        // Redirect the user to the login page or show a success message
        navigate("/redirect");
      } else {
        // Handle signup errors, such as validation errors or duplicate email
        const errorData = await response.json();
        Toast.fire({
          icon: "error",
          title: errorData.message
        })
        // Set the error message in the state to display to the user
        setError(errorData.message);
      }
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: error
      })
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
        className="login-video"
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
            <div className="login-error-popup" style={{ display: error ? 'block' : 'none' }}>
              <p>{error}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
