import React, { Component } from 'react';
import {Link} from "react-router-dom";

const Recipes=props=>(
<div className="container">
    <div className="row">
    {props.recipes.map((recipe)=>{
    return(
      <div className="col-md-4" key={recipe.id} style={{marginBottom:"2rem"}}>
        <div className="recipes__box">
        <img 
        src={props.baseURL+recipe.image} 
        alt={recipe.title} 
        className="recipe__img"/>
        <div className="recipe__text">
        <h5 className="recipes__title">{recipe.title.length<20?recipe.title:`${recipe.title.substring(0,25)}...`}</h5>
        </div>
        <button className="recipe__buttons">
           <Link to={{
               pathname:`/recipe/${recipe.id}`,
               state:{
                recipeId:recipe.id,
               imgUrl:props.baseURL+recipe.image,
               recipeTitle:recipe.title
              }
        }}>ViewRecipe</Link> 
            </button>
      </div>
      </div>
    );
  })}

    </div>

</div>

);
export default Recipes;

