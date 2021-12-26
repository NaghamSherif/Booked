import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import Book from "./Book";

class Search extends React.Component {
  state = {
    query: "",
    showingBooks: [],
  };

  updateQuery = (query) => {
    this.setState(() => ({
      query,
    }));
    query.trim() === ""
      ? this.setState(() => ({
          showingBooks: [],
        }))
      : BooksAPI.search(query).then((res) => {
          if (!Array.isArray(res)) {
            this.setState(() => ({ showingBooks: [] }));
          } else {
            this.setState(() => ({ showingBooks: res }));
          }
        });
  };
  render() {
    const { onChangeShelf, shelves } = this.props;
    const { query, showingBooks } = this.state;
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">
              close search
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {showingBooks.map((book) => (
                <li key={book.id}>
                  <Book
                    book={book}
                    onChangeShelf={onChangeShelf}
                    shelves={shelves}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
