import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ReviewList.css";
import ReviewForm from "../ReviewForm/ReviewForm";

const ReviewList = ({ book, review }) => {
  const { bookId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(null);

  useEffect(() => {
    displayReviews();
  }, []);

  const displayReviews = async () => {
    try {
      let response = await axios.get(
        `https://localhost:5001/api/BookDetails/${bookId}`
      );
      setReviews(response.data.reviews);
      setAverageRating(response.data.averageRating);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(reviews);

  return (
    <div>
      <div>
        <ReviewForm
          bookId={bookId}
          displayReviews={displayReviews}
        />
      </div>
      <h2 className="single-container">Average Rating {averageRating.toFixed(2)}</h2>
      <div>
        <h3 className="single-container">Reviews</h3>
        <ol className="reviews-container">
          {reviews.map((review) => (
            <li className="single-container" key={review.id}>
              {review.text}{" "}
              <b>
                <u>User Rating:</u>
              </b>{" "}
              {review.rating}{" "}
              <b>
                <u>Username:</u>
              </b>{" "}
              {review.user.userName}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ReviewList;
