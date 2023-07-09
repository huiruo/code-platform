import React, { createContext, useState } from 'react';

interface AppContextType {
  token: string;
  setToken: (token: string) => void;
}

export const AppContext = createContext<AppContextType>({
  token: '',
  setToken: () => {},
});

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState('');

  return (
    <AppContext.Provider value={{ token, setToken }}>
      {children}
    </AppContext.Provider>
  );
};