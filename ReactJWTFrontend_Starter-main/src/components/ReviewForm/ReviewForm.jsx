import React from "react";
import React, { useState } from 'react';


const ReviewForm = ({newReview}) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState();
  const [user, setUser] = useState("");


  const handleSubmit = (event) => {
    e.preventDefault(event);
    const addReview = async () => {
      try {
        let response = await axios.post(
          `https://localhost:5001/api/Reveiws/${bookId}`
        );
        let newReview = {
          text: text,
          rating: rating,
          user: user
        };
      } catch (error) {
        console.log(error);
      }
    };
  };

  return (
    <div>
      <label>Leave a Review</label>
      <textarea value={text} name="textValue" onChange={(event)=>setText(event.target.value)} />
      <label>Rate the Book (1-5)</label>
      <input type="number" step="any" min="0" max="5"/>
    </div>
  );
};

export default ReviewForm;
