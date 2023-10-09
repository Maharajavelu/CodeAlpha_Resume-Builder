import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contact from './pages/contact';
import Blogpage from './pages/blogpage';
import Edit from './components/resumebuilder/Header/edit';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "blog",
    element: <Blogpage />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "edit",
    element: <Edit />,
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

