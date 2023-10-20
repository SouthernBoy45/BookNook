import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReviewList = ({ book, review, index }) => {
  const { bookId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    displayReviews();
  }, [bookId]);

  const displayReviews = async () => {
    try {
      let response = await axios.get(
        `https://localhost:5001/api/BookDetails/${bookId}`
      );
      setReviews(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(reviews);

  return (
    <div>
      <h3>Average Rating {reviews.averageRating}</h3>
      <div>
        <ul>
          <li key={reviews.id}>
            Reviews {reviews.text} {reviews.rating} {reviews.userName}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReviewList;
