const express = require("express");
const Book = require("../model/Book");
const router = express.Router();
const Product = require("../model/Book");
const booksController = require("../controllers/book-controller");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
