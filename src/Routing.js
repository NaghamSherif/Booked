import React from "react";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import Search from "./Search";
import BooksList from "./BooksList";

const NoMatchPage = () => {
  return (
    <div className="not-found">
      <div className="list-books-title">
        <h1>404 - Not found</h1>
      </div>
      <div className="return-to-home">
        <Link to="/" style={{ textDecoration: "none" }}>
          Return to home
        </Link>
      </div>
    </div>
  );
};

function Routing(props) {
  const { onChangeShelf, books, shelves } = props;
  let navigate = useNavigate();
  return (
    <Routes>
      <Route
        exact
        path="/Search"
        element={
          <Search
            onChangeShelf={(book, shelf) => {
              onChangeShelf(book, shelf);
              navigate("/");
            }}
            shelves={shelves}
          />
        }
      />
      <Route
        exact
        path="/"
        element={
          <div className="list-books">
            <div className="list-books-title">
              <h1>Booked</h1>
            </div>
            <BooksList
              books={books}
              shelves={shelves}
              onChangeShelf={onChangeShelf}
            />
            <Link to="/Search" className="open-search">
              add book
            </Link>
          </div>
        }
      />

      <Route path="*" element={<NoMatchPage />} />
    </Routes>
  );
}

export default Routing;
