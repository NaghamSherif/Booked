import React from "react";

function Book(props) {
  const { book, onChangeShelf, shelves } = props;
  const bookImg = "./images/photo.png";
  let currentShelf = "none";
  Object.keys(shelves).forEach((key) => {
    if (shelves[key].includes(book.id)) currentShelf = key;
  });

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            value: "book",
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks ? book.imageLinks.thumbnail : bookImg
            })`,
          }}
        />

        <div className="book-shelf-changer">
          <select
            defaultValue={currentShelf}
            id="list"
            onChange={(e) => {
              onChangeShelf({ ...book, shelf: e.target.value }, e.target.value);
            }}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="read">Read</option>
            <option value="wantToRead">Want to Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors
          ? book.authors.map((a, i) =>
              i < book.authors.length - 1 ? `${a}, ` : a
            )
          : ""}
      </div>
    </div>
  );
}
export default Book;
