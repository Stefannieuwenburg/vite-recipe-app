import { useEffect,useState} from "react";
import Recipe from "./Recipe"
import "./App.css";

const App = () => {
  const APP_ID = "bfcaea7e";
  const APP_KEY = "a80d42f94648788c87186d06649adab4";
  
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query,setQuery] = useState("chicken")
  
    
  useEffect(() => {
    getRecipes()
  }, [query])
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    try {
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    } catch (error) {
      console.log(error);
    }
  }
  const updateSearch = e => {
    setSearch(e.target.value);
  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')

  }

    return (
        <>
            <div className="app_container">
          <form onSubmit= {getSearch}className="search_form">
                    <input
                        type="text"
                        className="search_bar"
                        value={search}
                        onChange={updateSearch}
                    />
                    <button type="submit" className="search_btn">
                        Search
                    </button>
          </form>
          <div className="recipe">
                {recipes.map((recipe) => (
                    <Recipe
                        key={recipe.recipe.label}
                        recipe={recipe}
                        title={recipe.recipe.label}
                        source={recipe.recipe.source}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                    />
                ))}
          </div>
            </div>
        </>
    );
};
export default App;
