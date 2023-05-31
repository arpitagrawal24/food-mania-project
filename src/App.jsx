import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UseContext';

function App() {
  const [user, setUser] = useState({
    name: "Arpit Ag",
    email: "arpitagrawal2402@gmail.com",
  })

  return (
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
  )
}

export default App; 
