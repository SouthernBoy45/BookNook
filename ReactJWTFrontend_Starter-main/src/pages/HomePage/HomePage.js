import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains user information (id, userName, email) from the decoded token
  // The "token" value is the JWT token sent from the backend that you will send back in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, [token]);

  const fetchReviews = async () => {
    try {
      let response = await axios.get("https://localhost:5001/api/Reviews", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setReviews(response.data.review);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="container">
      {console.log(user)}
      <h1>Home Page for {user.userName}!</h1>
      {reviews &&
        reviews.map((review) => (
          <p key={review.id}>
            {review.book}
          </p>
        ))}
    </div>
  );
};

export default HomePage;
