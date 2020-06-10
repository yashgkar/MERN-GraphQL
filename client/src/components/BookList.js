import React, { Component } from "react";
import { graphql } from "react-apollo";
import "./BookList.css";

import {getBooksQuery} from "../queries/queries";

class BookList extends Component {
  
  displayBooks() {
    var data = this.props.data;
    if (data.loading) {
      return <div className="loader"></div>;
    } else {
      return data.books.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  }
  render() {
    return (
      <div className="booklist">
        <div className="content">
          <div className="book-list">
            <ul>{this.displayBooks()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
