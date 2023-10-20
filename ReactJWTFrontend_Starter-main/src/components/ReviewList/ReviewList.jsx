import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReviewList = ({ book, review, index }) => {
  const { bookId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRaing] = useState(null);

  useEffect(() => {
    displayReviews();
  }, [bookId]);

  const displayReviews = async () => {
    try {
      let response = await axios.get(
        `https://localhost:5001/api/BookDetails/${bookId}`
      );
      setReviews(response.data.reviews);
      setAverageRaing(response.data.averageRating);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(reviews);

  return (
    <div>
      <h2>Average Rating {averageRating}</h2>
      <div>
        <h3>Reviews</h3>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              {review.text} User Rating: {review.rating} Username: {review.user.userName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReviewList;
