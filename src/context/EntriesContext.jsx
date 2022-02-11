// import
import { useState, useContext, createContext } from 'react';

// Create Context
const EntriesContext = createContext();

// Create Provider
const EntriesProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  return (
    <EntriesContext.Provider value={{ entries, setEntries }}>{children}</EntriesContext.Provider>
  );
};

// Create Custom Hook
const useEntries = () => {
  const context = useContext(EntriesContext);

  if (context === undefined) {
    throw new Error('useEntries must be defined within EntriesContext Provider');
  }

  return context;
};

export { EntriesProvider, useEntries };
