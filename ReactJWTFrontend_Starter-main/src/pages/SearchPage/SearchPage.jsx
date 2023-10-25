import React from "react";
import { useState } from "react";
import axios from "axios";
import Book from "../../components/Book/Book";
import "./SearchPage.css";

const SearchPage = ({ book, review }) => {
  const [userInput, setUserInput] = useState("");
  const [books, setBooks] = useState([]);

  const searchForBooks = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${userInput}`
      );

      console.log(response.data);
      setBooks(response.data.items);
    } catch (error) {
      console.log(error.response);
    }
  };
  console.log(books);
  function handleSubmit(event) {
    event.preventDefault();
    searchForBooks();
  }

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <label> Search for a book </label>
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <h1 className="form-container">Search Results</h1>
      <div className="form-container">
        {books &&
          books.map((book) => {
            return <Book book={book} key={book.id} />;
          })}
      </div>
    </div>
  );
};

export default SearchPage;
