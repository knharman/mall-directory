import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import "./App.css";
import DeveloperHome from './pages/DeveloperHome';
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});


function App() {
  return (
    <>
      <ApolloProvider client={client}>
      <DeveloperHome />
      </ApolloProvider>
    </>
  );
}

export default App;
