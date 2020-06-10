import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import "./BookList.css";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

class BookList extends Component {
    state = {
        loading: false
    }
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
    console.log(this.props);
    return (
      <div className="main">
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
