import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router-dom";


const ReviewList = ({book,review,index}) => {
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
    setReviews(response.data.review);

    console.log(response);

  } catch (error) {
    console.log(error);
  }
};
return (
    <div> 
        <div>
        { reviews && reviews.map((review, index) => {
          return(  
        <ul>
            <li>{review.rating}</li>
            <li>{review.text} {review.user}</li>
        </ul>
        )})}
        </div>
    </div>
)
};

export default ReviewList;
