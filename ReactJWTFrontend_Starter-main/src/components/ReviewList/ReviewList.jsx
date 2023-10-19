import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router-dom";


const ReviewList = ({book,review}) => {
const { bookId } = useParams();
const [reviews, setReviews] = useState();

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
return (
    <div> 
        <div>
          {reviews.map((review) =>{
            return(<ul key={reviews.id}>
              <li>Average Rating{reviews.rating}</li>
              <li>Review{reviews.review.text} {reviews.review.rating} {reviews.review.user}</li>
          </ul>)
          })}
        </div>
    </div>
)
};

export default ReviewList;
