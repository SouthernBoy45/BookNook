import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReviewForm = ( props, newReview ) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState();
  const [user, setUser] = useState("");
  const { bookId } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault(event);
    const addReview = async () => {
      try {
        let response = await axios.post(
          `https://localhost:5001/api/Reveiws/${bookId}`
        );
        let newReview = {
          text: text,
          rating: rating,
          user: user,
        };
        props.newReview(newReview).then(
          setText(""),
          setRating("")
        );
      } catch (error) {
        console.log(error);
      }
    };
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Leave a Review</label>
        <textarea
          value={text}
          name="textValue"
          type="text"
          onChange={(event) => setText(event.target.value)}
        />
        <label>Rate the Book (1-5)</label>
        <input type="number" step="any" min="0" max="5" />
      </form>
    </div>
  );
};

export default ReviewForm;
