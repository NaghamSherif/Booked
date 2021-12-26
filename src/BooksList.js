import React from "react";
import BookShelf from "./BookShelf";

class BooksList extends React.Component {
  render() {
    const { books, onChangeShelf, shelves } = this.props;

    return (
      <div className="list-books-content">
        {Object.keys(shelves).map((shelf) => (
          <BookShelf
            key={shelf}
            books={books}
            booksId={shelves[shelf]}
            shelf={shelf}
            onChangeShelf={onChangeShelf}
            shelves={shelves}
          />
        ))}
      </div>
    );
  }
}

export default BooksList;
