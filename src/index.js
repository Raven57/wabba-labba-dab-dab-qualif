import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});
// client
//   .query({
//     query: gql`
//     query hehe{
//       characters(page: 1, filter: { name: "rick" }) {
//         info {
//           count,pages
//         }
//         results {
//           name,episode{
//             name
//           },created,species,
//           origin{
//             name,dimension
//           }
//         }
//       }
//       location(id: 1) {
//         id
//       }
//       episodesByIds(ids: [1, 2]) {
//         id
//       }
//     }
//     `
//   })
//   .then(result => console.log(result));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
