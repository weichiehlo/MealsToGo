import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };
  const remove = (restaurant) => {
    setFavourites(favourites.filter((x) => x.placeId !== restaurant.placeId));
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      console.log("error saving", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@favourites");
      if (jsonValue !== null) {
        setFavourites(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
