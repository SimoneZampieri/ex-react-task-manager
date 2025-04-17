import { createContext } from "react";

//creo il context
export const GlobalContext = createContext();

//creo il provider
export const GlobalProvider = ({ children }) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
