import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Routing from "./Routing";

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: {},
  };
  ChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((shelves) => {
      this.setState((currentState) => ({
        shelves,
        books: currentState.books
          .filter((b) => b.id !== book.id)
          .concat([book]),
      }));
    });
  };
  getShelves = (books) => {
    const shelves = { currentlyReading: [], read: [], wantToRead: [] };
    books.map((b) => {
      if (b.shelf === "currentlyReading") {
        shelves["currentlyReading"].push(b.id);
      } else if (b.shelf === "wantToRead") {
        shelves["wantToRead"].push(b.id);
      } else if (b.shelf === "read") {
        shelves["read"].push(b.id);
      }
    });
    return shelves;
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState(() => ({
        books,
        shelves: this.getShelves(books),
      }));
    });
  }
  render() {
    return (
      <div className="app">
        <Routing
          books={this.state.books}
          shelves={this.state.shelves}
          onChangeShelf={this.ChangeShelf}
        />
      </div>
    );
  }
}

export default BooksApp;
