import React, { Component } from "react";
import { graphql } from "react-apollo";
import "./BookList.css";

//Components
import BookDetails from "./BookDetails";

//Queries
import { getBooksQuery } from "../queries/queries";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  displayBooks() {
    var data = this.props.data;
    if (data.loading) {
      return <div className="loader"></div>;
    } else {
      return data.books.map((book) => {
        return (
          <li
            key={book.id}
            onClick={(e) => {
              this.setState({ selected: book.id });
            }}
          >
            {book.name}
          </li>
        );
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
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
