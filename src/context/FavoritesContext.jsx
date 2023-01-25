import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorites = (info) => {
    setFavorites([...favorites, info]);
  };
  const removeFavorites = (id) => {
    setFavorites(favorites.filter((image) => image.id != id));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorites, removeFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

//Hook para reutilizar
export const useFavoritesContext = () => useContext(FavoritesContext);
