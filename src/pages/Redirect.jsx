import React from "react";
import redirectImage from "../assets/redirect.svg";
import "./Redirect.css";
import EastIcon from "@mui/icons-material/East";
// import {useNavigate} from 'react-router-dom';

const Redirect = () => {
  // const navigate = useNavigate();
  // const loginHandler =()=> navigate("/login");
  return (
    <div className="redirect">
      <div className="wrapper">
        <h1>you have successfully registered</h1>
        <div className="control">
           <div><img src={redirectImage} alt="redirect" className="image"/> </div> 
           <div className="flex"><span>Continue To Login</span> <span><EastIcon /></span> </div>   
        </div>
      </div>
    </div>
  );
};

export default Redirect;
