import React from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./BookList";
import About from "./About";
import Home from "./Home";

function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Body;
