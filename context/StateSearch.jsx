"use client";
import React, { useState } from "react";
import { SearchContext } from "./searchContext";

const StateSearch = ({ children }) => {
    const [search, setSearch] = useState([]);
    
  const Seached = (item) => {
    setSearch(item);

  };


  return (
    <SearchContext.Provider
      value={{
        search,
        Seached,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default StateSearch;
