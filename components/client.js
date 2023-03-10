import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
console.log(`URL: ${API_URL}`)
const link = new HttpLink({ uri: `${API_URL}/graphql` });
const cache = new InMemoryCache();
const client = new ApolloClient({ link, cache });

export default client
