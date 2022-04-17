import './App.css';
import ContactUs from './pages/ContactUs';
import DeveloperLogin from './pages/DeveloperLogin';
import CustomerHome from './pages/CustomerHome';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});


function App() {
  return (
    <>
    <ApolloProvider client = {client}>
    <DeveloperLogin />
    <ContactUs />
    <CustomerHome />
    </ApolloProvider>
    </>

  );
}

export default App;
