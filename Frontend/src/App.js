import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import BuyBooks from "./components/BuyBooks";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <React.Fragment>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/books" element={<Books />} />
            <Route path="/payment" element={<BuyBooks />} />
          </Routes>
        </main>
      </React.Fragment>
    </div>
  );
}

export default App;
