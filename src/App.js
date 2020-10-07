import React, { Component } from "react";

// components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

import { ApolloProvider } from "react-apollo";

// apollo client set-up
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:2020/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Ninja's Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
