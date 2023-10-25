import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./ReviewForm.css";

const ReviewForm = ({ bookId, displayReviews }) => {
  const [user, token] = useAuth();
  const [reviewData, setReviewData] = useState({
    text: "",
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await axios.post(
        "https://localhost:5001/api/Reviews",
        {
          bookId,
          text: reviewData.text,
          rating: reviewData.rating,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 201) {
        alert("Review submitted successfully");
        setReviewData({ text: "", rating: 0 });
        await displayReviews();
      } else {
        alert("Failed to submit review");
      }
    } catch (error) {
      alert("Error submitting review");
      console.log(error.response);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="review-form">
        <label>Leave a Review</label>
        <textarea
          value={reviewData.text}
          name="text"
          rows="4"
          onChange={handleInputChange}
        />
        <label>Rate the Book (1-5)</label>
        <input
          type="number"
          name="rating"
          value={reviewData.rating}
          step="any"
          min="1"
          max="5"
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
