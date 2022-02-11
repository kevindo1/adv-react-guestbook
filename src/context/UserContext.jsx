// import
import { useState, useContext, createContext } from 'react';

// Create Context
const UserContext = createContext();

// Create Provider
const UserProvider = ({ children }) => {
  const [users, setUsers] = useState('');

  return <UserContext.Provider value={{ users, setUsers }}>{children}</UserContext.Provider>;
};

// Custom Hook
const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUsers must be defined in UserContent Provider');
  }

  return context;
};

export { UserProvider, useUser };
