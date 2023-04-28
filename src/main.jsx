import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import Profile from './components/Profile' 
import RestaurantMenu from './components/RestaurantMenu'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",           // parentPath/{path} -> localhost:5137/about
        element: <About />,
        children: [
          {
            path: "profile",          // parentPath/{path} -> localhost:5137/about/profile (gives relative path)
            element: <Profile />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={mainRouter} />
  </React.StrictMode>,
)
