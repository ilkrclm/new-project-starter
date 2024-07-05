import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
  },
})

export default client
