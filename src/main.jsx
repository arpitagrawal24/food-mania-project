import './index.css'
import App from './App'
import Body from './components/Body'
import About from './components/About'
import ReactDOM from 'react-dom/client'
import Shimmer from './components/Shimmer'
import Contact from './components/Contact'
import Profile from './components/Profile'
import React, { lazy, Suspense } from 'react'
import RestaurantMenu from './components/RestaurantMenu'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Instamart = lazy(() => import("./components/Instamart"));
const Cart = lazy(() => import("./components/Cart"));
// upon On Demand loading > upon render -> Suspense loading 

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
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
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
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={mainRouter} />
  </React.StrictMode>,
)
