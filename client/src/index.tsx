import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "apollo-boost";
import { onError } from "apollo-link-error";
import { ApolloProvider } from "@apollo/react-hooks";

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    new HttpLink({
      uri: "http://localhost:8080/graphql",
    }),
    onError(({ graphQLErrors, networkError }) => {
      console.log(graphQLErrors);
      console.log(networkError);
    }),
  ]),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
