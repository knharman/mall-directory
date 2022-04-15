import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import "./App.css";
import CustomerHome from "./pages/CustomerHome";
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
      <CustomerHome />
      </ApolloProvider>
    </>
  );
}

export default App;
