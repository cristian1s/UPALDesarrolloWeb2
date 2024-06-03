import { ApolloClient, InMemoryCache, gql , useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export {client , gql , useQuery};