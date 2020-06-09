import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import './App.css';

//Components
import BookList from './components/BookList';

//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <div className="main">
        <header><h1>Lucifer's Reading List</h1></header>

        <BookList />
      </div>
    );
  }
}

export default App;