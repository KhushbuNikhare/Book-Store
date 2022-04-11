import { Button, FormLabel, TextField } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const BuyBooks = () => {
  return (
    <>
      <h2>Buy Books</h2>
      <form>
        <FormLabel>Contact Detail</FormLabel>
        <TextField margin="normal" fullWidth variant="outlined" />
        <FormLabel>Address</FormLabel>
        <TextField margin="normal" fullWidth variant="outlined" />

        <Button variant="contained">
          <NavLink to={"/"} className="buyBtn">
            Pay Now
          </NavLink>
        </Button>
      </form>
    </>
  );
};

export default BuyBooks;
