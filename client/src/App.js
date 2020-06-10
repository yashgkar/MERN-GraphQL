import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";

//Components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <div className="header">
            <h1>Lucifer's Reading List</h1>
          </div>
          <div className="row">
            <BookList />
            <AddBook />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
