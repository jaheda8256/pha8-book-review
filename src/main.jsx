import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ListedBooks from './pages/ListedBooks';
import PagesToRead from './pages/PagesToRead';
import ReadTheBooks from './pages/ReadTheBooks';
import DatingPlayBook from './pages/DatingPlayBook';
import BookCard from './pages/BookCard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/bookCard/:id',
        element: <BookCard></BookCard>,
        loader: () => fetch('../FakeData.json')

      },
      {
        path: '/pagesToRead',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/readTheBooks',
        element: <ReadTheBooks></ReadTheBooks>
      },
      {
        path: '/datingPlayBook',
        element: <DatingPlayBook></DatingPlayBook>
      },
      
  ],

  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
   
  </React.StrictMode>,
)
