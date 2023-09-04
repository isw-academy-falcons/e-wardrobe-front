import "./styles.css";
import MySvg from "./assets/images/illustration1.svg";
import loginVideo from "./assets/images/loginVideo.mp4";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle the form submission
    // For this example, we'll just log the values to the console

    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPassword("");
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
                <h2>LOGIN</h2>
                <input
                  type="email"
                  placeholder="Enter Name"
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

              <button className="login-btn" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
