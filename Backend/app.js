const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

//middlewares

// app.get("/", (req, res) => {
//   res.send("hello world");
// });
app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://khushbu:CDoV3p11YwBDZy8y@cluster0.cdjis.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to database"))
  .then(() => {
    app.listen(5555);
  })
  .catch((err) => console.log(err));

// name:khushbu
// password:CDoV3p11YwBDZy8y
