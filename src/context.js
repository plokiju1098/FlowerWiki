import React, { useState, useContext, useEffect } from 'react';
import { data } from './data';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState();
  const [category, setCategory] = useState('');
  const [flowers, setFlowers] = useState([]);
  const [active, setActive] = useState(0);

  const getFlowers = () => {
    setLoading(true);

    // pusta kategoria, pusty input
    if (!category && !searchTerm) {
      setFlowers(data);
    }
    // kategoria wybrana, input pusty
    else if (!searchTerm) {
      const newFlowers = data.filter((flower) => flower.category === category);
      setFlowers(newFlowers);
    }
    // pusta kategoria, pelny input
    else if (!category && searchTerm) {
      const newFlowers = data.filter((flower) =>
        flower.name.includes(searchTerm)
      );
      setFlowers(newFlowers);
      // oba pełne
    } else {
      const newFlowers = data.filter(
        (flower) =>
          flower.name.includes(searchTerm) && flower.category === category
      );
      setFlowers(newFlowers);
    }

    setLoading(false);
  };

  useEffect(() => {
    getFlowers();
  }, [searchTerm, category]);

  return (
    <AppContext.Provider
      value={{
        loading,
        flowers,
        setSearchTerm,
        setCategory,
        active,
        setActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
