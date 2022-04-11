import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const history = useNavigate();
  const [input, setInput] = useState({
    name: "",
    author: "",
    price: "",
    image: "",
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendReq = async () => {
    await axios
      .post("http://localhost:5555/books", {
        name: String(input.name),
        author: String(input.author),
        price: Number(input.price),
        image: String(input.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    sendReq().then(() => history("/books"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        margin={"auto"}
        marginTop={"2%"}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          value={input.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Author</FormLabel>
        <TextField
          value={input.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        />
        <FormLabel>Price</FormLabel>
        <TextField
          value={input.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />

        <FormLabel>Image</FormLabel>
        <TextField
          value={input.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />
        <Button type="submit" variant="contained">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
