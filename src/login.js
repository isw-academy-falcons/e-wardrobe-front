import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./styles/Login.css";
import { BASE_URL } from "./assets/baseUrl";
import { Toast } from "./components/ApiResponse";
import MySvg from "./assets/images/illustration1.svg";
import loginVideo from "./assets/images/loginVideo.mp4";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

   try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("name", data.fullName);
      localStorage.setItem("plan",data.plan)
      localStorage.setItem("gender",data.gender)
      localStorage.setItem("email",data.email)
      // Save the token in local storage
      localStorage.setItem("token", data.accessToken);
      if (response.ok) {
        // Login successful, you can redirect the user to the dashboard or a protected route
        Toast.fire({
          icon: "success",
          title: "Login Successful"
        })
        setTimeout(() => {
          navigate("/landing-page");
        }, 2000);
      } else {
        // Check the specific error message from the server
        if (data.message === "User not found!!!") {
          Toast.fire({
            icon: "error",
            title: data.message
          })
        } else if (data.message === "Bad credentials") {
          Toast.fire({
            icon: "error",
            title: data.message
          })
        } else {
          // Handle other error cases if needed
          Toast.fire({
            icon: "error",
            title: data.message
          })
        }}
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: error
      })
    }
  };

  return (
    <div className="Login">
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
        <div className="login-Modal">
          <h2 className="login-header">SKYFITZZ</h2>
          <img className="illustration" src={MySvg} alt="SVG" />

          <div className="login-container">
            <form onSubmit={handleSubmit}>
              <div>
                <h2 className="input-container-header">LOGIN</h2>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <p className="login-paragraph">
                Do not have an account? <Link to="/signup">Sign Up</Link>
              </p>
              <a href="/login">Forgot Password?</a>

              <button className="login-button" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
