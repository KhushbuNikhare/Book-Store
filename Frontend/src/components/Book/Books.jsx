import axios from "axios";
import React, { useEffect, useState } from "react";
import Book from "./Book";
import "./Book.css";

const URL = "http://localhost:5555/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);

  return (
    <>
      <h1>All Books Are Here</h1>
      <input
        type="text"
        className="searchBook"
        placeholder="Search by Book Name...."
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {books &&
          books
            .filter((value) => {
              if (search === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return value;
              }
            })
            .map((book, i) => {
              return (
                <li key={i}>
                  <Book book={book} />
                </li>
              );
            })}
      </ul>
    </>
  );
};

export default Books;
