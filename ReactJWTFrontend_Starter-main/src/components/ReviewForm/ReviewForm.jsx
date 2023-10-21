import React from "react";

const ReviewForm = ({newReview}) => {
  const handleSubmit = (event) => {
    e.preventDefault(event);
    const addReview = async () => {
      try {
        let response = await axios.post(
          `https://localhost:5001/api/Reveiws/${bookId}`
        );
      } catch (error) {
        console.log(error);
      }
    };
  };

  return (
    <div>
      <label>Leave a Review</label>
      <textarea value='newReview' name="textValue" onChange={handleSubmit} />
    </div>
  );
};

export default ReviewForm;
