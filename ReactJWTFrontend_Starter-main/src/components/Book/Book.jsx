import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookDetails from "../../pages/BookDetails/BookDetails";

const Book = ({ book, review }) => {
  const [bookCard, setBookCard] = useState("");

  return (
    <div>
      <ul key={book.id}>
        <li><Link to={`/bookDetails/${book.id}`}>
          {book.volumeInfo.title} by {book.volumeInfo.authors}
        </Link></li>
      </ul>
    </div>
  );
};

export default Book;
