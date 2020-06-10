import React, { Component } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import "./AddBook.css";

//Queries
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: "",
    };
  }

  displayAuthors() {
    var data = this.props.getAuthorsQuery;
    if (data.loading) {
      return <option disabled>Loading Authors...</option>;
    } else {
      return data.authors.map((author) => {
        return <option key={author.id}>{author.name}</option>;
      });
    }
  }

  submitForm(e) {
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
  }

  render() {
    return (
      <div className="addbook">
        <div className="main-form">
          <form id="add-book" onSubmit={this.submitForm.bind(this)}>
            <div className="field">
              <input
                type="text"
                onChange={(e) => this.setState({ name: e.target.value })}
                placeholder="Book Name"
                required
              />
            </div>
            <div className="field">
              <input
                type="text"
                onChange={(e) => this.setState({ genre: e.target.value })}
                placeholder="Genre"
                required
              />
            </div>
            <div className="field">
              <select
                onChange={(e) => this.setState({ authorId: e.target.value })}
                required
              >
                <option>Author</option>
                {this.displayAuthors()}
              </select>
            </div>
            <button>+</button>
          </form>
        </div>
      </div>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
