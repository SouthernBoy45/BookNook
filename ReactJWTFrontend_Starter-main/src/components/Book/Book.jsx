import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import BookDetails from "../../pages/BookDetails/BookDetails";

const Book = ({ book }) => {
  const [bookCard, setBookCard] = useState("");

  return (
    <div>
      <ul>
        <li>
          <Link to="/bookDetails">
          {book.volumeInfo.title} by {book.volumeInfo.authors}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Book;
