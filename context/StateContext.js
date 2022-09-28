import React, { createContext, useContext, useState } from "react";

const Context = createContext();
export const StateContext = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const [loading, setLoading] = useState(false);
  return (
    <Context.Provider
      value={{ loading, setLoading, searchQuery, setSearchQuery }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
