import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReviewList from "../../components/ReviewList/ReviewList";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import "./BookDetails.css";

const BookDetails = ({ book, review, newReview, displayReviews }) => {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState();

  useEffect(() => {
    displayBookDetails();
  }, []);

  const displayBookDetails = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );
      setBookDetails(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const sanitizeHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return bookDetails ? (
    <div>
      <div className="header-info">
        <h1>Book Details {bookDetails.volumeInfo.title}</h1>
        <div>
          <img src={bookDetails.volumeInfo.imageLinks.smallThumbnail} />
          <div>{bookDetails.id}</div>
          <div>{bookDetails.volumeInfo.authors}</div>
        </div>
        <div className="description-container">
        {sanitizeHTML(bookDetails.volumeInfo.description)}
        </div>
      </div>
      <div>
        <ReviewList review={review} displayReviews={displayReviews} />
      </div>
      
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default BookDetails;
