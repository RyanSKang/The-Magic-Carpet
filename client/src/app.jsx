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
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// Importing Components
import Home from './pages/home'
import NavbarMain from './Components/Navbar/Navbar'
import Search from './Components/Search/search'
import Signup from './pages/signup';
import Login from './pages/login';
import ResultsPage from './pages/resultsPages'

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

const App= () => {
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
                            element={<Signup />}
                        />
                        <Route
                            path="/login"
                            element={<Login />}
                        />
                        <Route
                            path="/results"
                            element={<ResultsPage />}
                        />
                    </Routes>
                </div>
            </Router>

        </ApolloProvider>
    )
}

export default App