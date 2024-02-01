import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import LogIn from './Loginpage/LogIn';
import SignUp from './Loginpage/SignUp';
import Home from './home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children: [

   {
    path:"/",
    element: <Home></Home>
   },



      {
        path:"/log",
        element: <LogIn></LogIn>,
      },

      {
        path:"/signin",
        element: <SignUp></SignUp>,
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
