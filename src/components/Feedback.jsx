import React, { useState } from "react";
import "./Feedback.css";

const Feedback = ({ onClose }) => { // Pass a prop for closing the modal
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can send the rating and comment to your server or perform any other actions.

    // For demonstration purposes, let's just mark it as submitted.
    setSubmitted(true);
  };

  return (
    <div className="feedback-container">
      <h2>Feedback</h2>
      <p className="closeModal" onClick={onClose}>X</p>
      {submitted ? (
        <div>
          <p>Thank you for your feedback!</p>
          <button onClick={onClose}>Close</button> {/* Close button */}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="rating">
            <p>Enjoying the website?</p>
            <p>Rate us:</p>
            <div>
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    value={value}
                    checked={rating === value}
                    onChange={handleRatingChange}
                    className="radio-input"
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>
          <div className="comment">
            <label htmlFor="comment">Comments:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={handleCommentChange}
            />
          </div>
          <button type="submit">Submit Feedback</button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
