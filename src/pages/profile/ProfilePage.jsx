import React, { useState } from "react";
import AppNavBar from "../../components/AppNavBar";
import profileImage from "../../assets/images/profile/profile.svg";
import { PersonalDetails } from "./PersonalDetails";
import "./ProfilePage.css";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Security from "./Security";
import Billing from "./Billing";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [showDropDown, setShowDropDown] = useState({
    personalDetails: false,
    security: false,
    billing: false,
  });
  const navigate = useNavigate();

  const dropDownHandle = (section) => {
    setShowDropDown((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="profile ">
       <AppNavBar />
      <div className="profile-container ">
        <nav className="py-2 flex bg-[#FCDE7C] custom-shadow" id="nav">
          <div className="m-auto">
            <ul className="list-none text-white font-[Poppins] text-left font-medium m-auto space-y-10">
              <li>
                <a
                  href="#personal-details"
                  onClick={() => dropDownHandle("personalDetails")}
                >
                  Personal Details
                </a>
              </li>
              <li>
                <a href="#security" onClick={() => dropDownHandle("security")}>
                  Security
                </a>
              </li>
              <li>
                <a href="#billing" onClick={() => dropDownHandle("billing")}>
                  Billing
                </a>
              </li>
              <li onClick={() => navigate("/e-wardrobe")}>Saved collections</li>
              <li onClick={() => navigate("/login")}>Logout</li>
            </ul>
          </div>
        </nav>
        <main className="user-profile ">
          <div className="text-center relative mt-4 camera-icon-parent ">
            <img
              src={profileImage}
              alt="profile of the user"
              className="w-[126px] h-[126px] camera-image "
            />
            <div><CameraAltIcon className="camera-icon " /></div>
            
          </div>

          <p className="font-medium text-center font-[Poppins] mt-2">
            JOSEPH DAMILOLA
          </p>
          <section id="personal-details" className="mt-4 px-4">
            <div className="section">
              <span className="">Personal Details</span>
              <span
                className="material-icons"
                onClick={() => dropDownHandle("personalDetails")}
              >
                {showDropDown.personalDetails ? (
                  <KeyboardArrowDown />
                ) : (
                  <KeyboardArrowRight />
                )}
              </span>
            </div>
            <div className="personal-details">
              {showDropDown.personalDetails && <PersonalDetails />}
            </div>
          </section>
          {/* .security section.. */}
          <section id="security" className="mt-4 px-4">
            <div className="section">
              <span className="">Security</span>
              <span onClick={() => dropDownHandle("security")}>
                {showDropDown.security ? (
                  <KeyboardArrowDown />
                ) : (
                  <KeyboardArrowRight />
                )}
              </span>
            </div>
            <div className="security-section">
              {showDropDown.security && <Security />}
            </div>
          </section>
          {/* ..billing section. */}
          <section id="billing" className="mt-4 px-4">
            <div className="section">
              <span className="">Billing<span className="text-xs ml-2 font-thin">(current plan -premium)</span></span>
              <span onClick={() => dropDownHandle("billing")}>
                {showDropDown.billing ? (
                  <KeyboardArrowDown />
                ) : (
                  <KeyboardArrowRight />
                )}
              </span>
            </div>
            <div className="billing-section">
              {showDropDown.billing && <Billing />}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
