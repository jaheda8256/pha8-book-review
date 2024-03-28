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
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('../FakeData.json')
      },
      {
        path: '/bookCard/:id',
        element: <BookCard></BookCard>,
        loader: () => fetch('../FakeData.json')

      },
      {
        path: '/pagesToRead',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('../FakeData.json')
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
