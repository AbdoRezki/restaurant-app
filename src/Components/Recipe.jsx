import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
var id="";
const Recipe = () => {
    const [item, setItem] = useState(); 
    const { recipeId } = useParams();
    if (recipeId !==" ") {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`).then(res => res.json()).then(data => {
            setItem(data.meals[0]);  
        })
    }
    if(item){
      const strYoutube= item.strYoutube;
      const str=strYoutube.split("=");
      id=str[str.length-1];
    }
  

    return (
        <>
            {
                (!item) ? "" : <div className="content">
                    <div className="inner-content">
                        <h1>{item.strMeal}</h1>
                        <h2>Country: <span>{item.strArea}</span></h2>
                        <h3>Category: <span>{item.strCategory}</span></h3>
                        <img src={item.strMealThumb} alt="" />
                    </div>
                
                    <div className="recipe-details">
                        <div className="ingredients">
                            <h2>Ingredients</h2><br />
                            <ul>
                                <li>{item.strIngredient1}:{item.strMeasure1}</li>
                                <li>{item.strIngredient2}:{item.strMeasure2}</li>
                                <li>{item.strIngredient3}:{item.strMeasure3}</li>
                                <li>{item.strIngredient4}:{item.strMeasure4}</li>
                                <li>{item.strIngredient5}:{item.strMeasure5}</li>
                                <li>{item.strIngredient6}:{item.strMeasure6}</li>
                                <li>{item.strIngredient7}:{item.strMeasure7}</li>
                                <li>{item.strIngredient8}:{item.strMeasure8}</li>
                            </ul>
                        </div>
                        <div className="instructions">
                            <h2>Instructions</h2><br />
                            <p>{item.strInstructions}</p>
                        </div>
                    </div>

                </div>
            }

        </>
    )
}
export default Recipe