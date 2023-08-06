import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import ResultsPage from './pages/resultsPages';

// Importing a Browser Router to link multiple pages
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Creating Browser Router to link multiple pages into application
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "results",
    element: <ResultsPage></ResultsPage>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
