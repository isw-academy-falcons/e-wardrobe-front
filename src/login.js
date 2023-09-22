import MySvg from "./assets/images/illustration1.svg";
import loginVideo from "./assets/images/loginVideo.mp4";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "./assets/baseUrl";
import "./styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); 
  const [loginSuccess, setLoginSuccess] = useState(false);
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
      console.log(data)
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("name", data.fullName);
      localStorage.setItem("plan",data.plan)
      localStorage.setItem("gender",data.gender)
      localStorage.setItem("email",data.email)
      console.log(data);
      if (response.ok) {
        // Login successful, you can redirect the user to the dashboard or a protected route
        setLoginSuccess(true);
        setTimeout(() => {
          navigate("/landing-page");
        }, 2000);
      } else {
        // Login failed, display the error message to the user
        const errorData = await response.json();
        setError(errorData.message); // Set the error message from the response
        
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="Login">
      <video
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
              <a href="#">Forgot Password?</a>
              <div className="login-error-popup" style={{ display: error ? 'block' : 'none' }}>
                <p>{error}</p>
              </div>
              <div className="login-success-popup" style={{ display: loginSuccess ? 'block' : 'none' }}>
                <p>Successful Login.</p>
              </div>

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
