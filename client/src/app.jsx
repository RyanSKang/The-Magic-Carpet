import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Importing CSS
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Importing Components
import Home from './pages/home';
import NavbarMain from './Components/Navbar/Navbar';
// import Signup from './pages/signup';
import SignupForm from './pages/SignUpForm';
import LoginForm from './pages/LoginForm';
import ResultsPage from './pages/resultsPages';
import PaymentPage from './pages/payment';
import CheckOutForm from './pages/CheckOutForm';
// import Login from './pages/login';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

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
    cache: new InMemoryCache()
});



// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const App= () => {
    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
      };

    return(
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <NavbarMain/>
                    <Routes>
                        <Route 
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/signup"
                            element={<SignupForm />}
                        />
                        <Route
                            path="/login"
                            element={<LoginForm />}
                        />
                        <Route
                            path="/results"
                            element={<ResultsPage />}
                        />
                        <Route
                            path="/payment"
                            element={<PaymentPage />}
                        />
                        <Route
                            path="/checkout"
                            element={<Elements stripe={stripePromise} options={options}>
                            <CheckOutForm />
                          </Elements>}
                        />
                    </Routes>
                </div>
            </Router>

        </ApolloProvider>
    )
}

export default App