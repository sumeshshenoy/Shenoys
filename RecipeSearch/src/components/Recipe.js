import React, { Component } from "react";
import {Link} from "react-router-dom";
const API_KEY = "9fb57470492340ef9328a90f9f9c9d1b";
class Recipe extends Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    const ingrediantID = this.props.location.state.recipeId;
    const req = await fetch(
      `https://api.spoonacular.com/recipes/${ingrediantID}/ingredientWidget.json?apiKey=${API_KEY}`
    );
    const resp = await req.json();
    this.setState({
      activeRecipe: resp.ingredients
    });
  };
  render() {
    const imageURL = this.props.location.state.imgUrl;
    const recipeTitle = this.props.location.state.recipeTitle;
    return (
      <div className="container" style={{marginTop:"2rem"}}>
      {
          this.state.activeRecipe.length !==0 &&
          <div className="active-recipe">
          <img className="active-recipe__img" src={imageURL} />
          <h3 className="active-recipe__title">{recipeTitle}</h3>
        <h4 style={{fontWeight:"bold"}}>Ingrediants</h4>
          {this.state.activeRecipe.map(ingrediant => (
              <h6 key={ingrediant.name}>{ingrediant.name}</h6>
          ))}
          <button style= {{marginBottom:"2rem",marginTop:"2rem"}} className="active-recipe__button"><Link to={"/"}>Go Home</Link> </button>
        </div>
      }
      </div>
    );
  }
}

export default Recipe;
