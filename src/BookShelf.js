import React from "react";
import Book from "./Book";

class BookShelf extends React.Component {
  render() {
    const { books, shelf, booksId, onChangeShelf, shelves } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {shelf === "currentlyReading"
            ? "Currently Reading"
            : shelf === "wantToRead"
            ? "Want To Read"
            : "Read"}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksId.map((id) => (
              <li key={id}>
                <Book
                  book={books.filter((b) => b.id === id)[0]}
                  onChangeShelf={onChangeShelf}
                  shelves={shelves}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
