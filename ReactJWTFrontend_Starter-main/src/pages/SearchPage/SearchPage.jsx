import React from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Book from "../../components/Book/Book";

const SearchPage = ({ props, book }) => {
  const [userInput, setUserInput] = useState("");
  const [books, setBooks] = useState([]);

  const searchForBooks = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${userInput}`
      );
      console.log(response.data);
      setBooks(response.data.items).map();
    } catch (error) {
      console.log(error.response);
    }
  };
  console.log(books);
  function handleSubmit(event) {
    event.preventDefault();
    searchForBooks(userInput);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Search for a book </label>
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button onClick={searchForBooks} type="submit">
          Search
        </button>
      </form>
      <div>{books.map((book, index) => (
            <Book book = {book} index = {index} key = {book.id}/>))}</div>
    </div>
  );
};

export default SearchPage;
