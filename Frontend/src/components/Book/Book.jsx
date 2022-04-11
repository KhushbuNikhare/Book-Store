import React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "./Book.css";

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, price, image } = props.book;

  const deleteBook = async () => {
    await axios
      .delete(`http://localhost:5555/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>Rs {price}</p>
      <Button onClick={deleteBook}>Delete</Button>
      <Button variant="contained">
        <Link to={"/payment"} className="buyBtn">
          Buy Now
        </Link>
      </Button>
    </div>
  );
};

export default Book;
