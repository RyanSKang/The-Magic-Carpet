import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
// import ResultsPage from './pages/resultsPages';
// import Signup from './pages/signup';
// import Login from './pages/login';

// Importing a Browser Router to link multiple pages
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// Creating Browser Router to link multiple pages into application
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "results",
//     element: <ResultsPage></ResultsPage>
//   },
//   {
//     path: "signup",
//     element: <Signup />
//   },
//   {
//     path: "login",
//     element: <Login />
//   }
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={router} />
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
