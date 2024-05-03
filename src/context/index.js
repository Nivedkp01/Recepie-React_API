import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalStateProvider({ children }) {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipes, setRecipes] = useState([]); 
    const [fav, setFav] = useState([]);

    function handleAddFav(recipe) {
        console.log(recipe);
        const updatedFavList = [...fav];
        console.log(updatedFavList)
        const index = updatedFavList.findIndex(item => item.id === recipe.id);
    
        if (index === -1) {
            updatedFavList.push(recipe);
            console.log(updatedFavList)
        } else {
            updatedFavList.splice(index, 1); // Remove the recipe if already in favorites
        }
    
        setFav(updatedFavList);
        console.log(fav)
    }
    
   
    return (
        <GlobalContext.Provider value={{ search, setSearch, loading, setLoading, recipes, setRecipes ,fav,setFav,handleAddFav}}>
            {children}
        </GlobalContext.Provider>
    );
}
