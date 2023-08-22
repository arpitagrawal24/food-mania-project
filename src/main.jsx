import './index.css'
import App from './App'
import { Shimmer } from './components'
import ReactDOM from 'react-dom/client'
import React, { lazy, Suspense } from 'react'
import { About, Contact, Error, Home, RestaurantMenu } from './page'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './page/Login'
import SignUp from './page/SignUp'

const Cart = lazy(() => import("./page/Cart"));
const Instamart = lazy(() => import("./page/Instamart"));
// upon On Demand loading > upon render -> Suspense loading 

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",           // parentPath/{path} -> localhost:5137/about
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
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
        path: "instamart",
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
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={mainRouter} />
  </React.StrictMode>,
)
