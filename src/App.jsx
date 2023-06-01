import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UseContext';
import { Provider } from "react-redux";
import store from "./utils/store";

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
