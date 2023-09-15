import React from "react";
import './PersonalDetails.css'

export const PersonalDetails = (props) => {
  return (
    <form className="my-4 user-details">
      <div className="firstName grid">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          placeholder="Damilola"
          value={props.firstName}
          disabled
        />
      </div>
      <div className="lastName grid">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          placeholder="Joseph"
          value={props.lastName}
          disabled
        />
      </div>
      <div className="gender grid">
        <label htmlFor="gender">Gender</label>
        <input
          type="text"
          placeholder="Male"
          value={props.gender}
          disabled
        />
      </div>
      <div className="email grid">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="joseph.Damilola@gmail.com"
          value={props.email}
          disabled
        />
      </div>
      <div className="phoneNumber grid">
        <label htmlFor="phoneNumber ">Phone Number</label>
        <input
          type="text"
          placeholder="08012345678"
          value={props.phoneNumber}
          disabled
        />
      </div>
    </form>
  );
};
