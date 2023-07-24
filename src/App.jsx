import { useState } from 'react'
import store from "./utils/store"
import { Provider } from "react-redux"
import { Outlet } from 'react-router-dom'
import UserContext from './utils/UseContext'
import { Header, Footer } from './components'

function App() {
  const [user, setUser] = useState({
    name: "Arpit Ag",
    email: "arpitagrawal2402@gmail.com",
  })

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  )
}

export default App; 
