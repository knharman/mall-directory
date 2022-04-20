import './App.css';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CustomerHome from './pages/CustomerHome'
import ContactUs from './pages/ContactUs';
import DeveloperLogin from './pages/DeveloperLogin';

import DeveloperHome from './pages/DeveloperHome'
import DeveloperMallList from './components/DeveloperMallList';
import CustomerMallList from './components/CustomerMallList';
import NoMatch from './pages/NoMatch';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),


});


function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route exact path="/" component={CustomerHome} />
            <Route exact path="/login" component={DeveloperLogin} />
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/dashboard" component={DeveloperHome} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </ApolloProvider>
    </>

  );
}

export default App;
