import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';

function App() {

  const APP_ID = "8bb8afae";
  const APP_KEY = "4f1252cb4249025db82a493ec8a5f688";
  
  const [recipes, setRecipes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const API = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const response = await fetch(API);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(recipes);
    console.log(data.hits);
  }

  const updateSearchText = e => {
    setSearchText(e.target.value);
  }

  const updateQuery = e => {
    e.preventDefault();   // Prevents page refresh on form submit
    setQuery(searchText);
    setSearchText('');
  }

  return (
    <div className="App">
      Welcome! Start by typing the recipe you want to search.

      <form className="search-form" onSubmit={updateQuery}>
        <input className="search-box" type="text" value={searchText} onChange={updateSearchText}/>
        <button className="search-btn" type="submit">Search</button>
      </form>

      {
        recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label} 
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))
      }
    </div>
  );
}

export default App;
