import { faV } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import FavItem from "./FavItem";
import MealItem from "./MealItem";
import ReacipeIndex from "./RecipeIndex";
const Meal = () => {
    const [search,setSearch]=useState();
    const [show,setShow]=useState(false);
    const [items,setItem]=useState([]);
    const [favourites, setFavourites] = useState([]);
    const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=> {
            setItem(data.meals);
            setShow(true);
        })
     },[url])
     
     useEffect(() => {
		const Favourites = JSON.parse(
			localStorage.getItem('item')
		);
        if (Favourites){
            setFavourites(Favourites);
        }
	}, []);
    console.log(favourites);
    const saveToLocalStorage = (item) => {
		localStorage.setItem('item', JSON.stringify(item));
	};

	const handleFavorites = (item) => {
        const newFavouriteList=[...favourites,item];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};
    const removeFavourite = (item) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.idMeal !== item.idMeal
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};
     const searchRecipe=(evt)=>{
         setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
    const setIndex=(alpha)=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    }
return (
    <>
        <div className="main">
            <div className="heading">
                <h1>Welcome to our restaurant</h1>
            </div>
            <div className="searchBox">
                <input type="search" placeholder="Search a recipe" className="search-bar" onChange={e=> setSearch(e.target.value)} onKeyPress={searchRecipe}/>
            </div>
            <div className="container">
                
                    {
                    show ? <MealItem data={items} handleFavoritesClick={handleFavorites}/>:"Not found"
                    }
                
                
            </div>
            <div className="heading">
                <h1>Fav</h1>
            </div>
            <div className="container">
                {
                   show ? <FavItem data={favourites} handleFavoritesClick={removeFavourite}/>:"Not found"
                
                }
            </div>
            {/* <div className="indexContainer">
                 <ReacipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div> */}
            
        </div>
    </>
)
}
export default Meal;