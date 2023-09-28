import React from "react";
import './PersonalDetails.css'

export const PersonalDetails = (props) => {
  return (
    <form className="my-4 user-details">
      <div className="firstName grid">
        <label htmlFor="firstName" className="label">First Name</label>
        <input
          type="text"
          placeholder="firstname"
          value={props.firstName}
          disabled
          className="input"
        />
      </div>
      <div className="lastName grid">
        <label htmlFor="lastName" className="label">Last Name</label>
        <input
          type="text"
          placeholder="lastname"
          value={props.lastName}
          disabled
          className="input"
        />
      </div>
      <div className="gender grid">
        <label htmlFor="gender" className="label">Gender</label>
        <input
          type="text"
          placeholder="gender"
          value={props.gender}
          disabled
          className="input"
        />
      </div>
      <div className="email grid">
        <label htmlFor="email" className="label">Email</label>
        <input
          type="email"
          placeholder="email"
          value={props.email}
          disabled
          className="input"
        />
      </div>
      <div className="phoneNumber grid">
        <label htmlFor="phoneNumber " className="label">Plan</label>
        <input
          type="text"
          placeholder="plan"
          value={props.plan}
          disabled
          className="input"
        />
      </div>
    </form>
  );
};
