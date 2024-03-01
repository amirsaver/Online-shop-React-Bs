import { createContext, useState } from 'react';

export const sharedCtx = createContext({
  isLoggedIn: true,
  cartItems: 0,
  login: () => {},
  logout: () => {}
});

export const SharedContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const contextValues = {
    isLoggedIn,
    cartItems, setCartItems,
    login: handleLogin,
    logout: handleLogout
  };

  return (
    <sharedCtx.Provider value={contextValues}>
      {children}
    </sharedCtx.Provider>
  );
};