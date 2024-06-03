import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import App2 from './App2.jsx'
import { ApolloProvider } from '@apollo/client'
import { client } from './config/graphql.config.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ApolloProvider client={client}>
      <App2/>
    </ApolloProvider>
  // </React.StrictMode>,
)
