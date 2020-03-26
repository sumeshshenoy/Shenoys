import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY ="9fb57470492340ef9328a90f9f9c9d1b";
class App extends Component {
  state={
    recipes:[],
    baseURL:'',
    query:'',
    offset:0,

  }
  getRecipe= async(e)=> {
    e.preventDefault();
    const recipeName = e.target.elements[0].value;
    const api_call= await fetch(`https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${recipeName}&number=10`);
    const data = await api_call.json();
    this.setState({recipes:data.results,
      baseURL:data.baseUri,
      query:recipeName,
      offset:0
    });
  }

    getRecipebyNavigation=async(nav)=>{
      var offset=this.state.offset;
      if(nav==='up')
      {
        offset=offset+10
      }
      else{
        offset>10? offset=offset-10:offset=0
      }
      const api_call= await fetch(`https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${this.state.query}&number=10&offset=${offset}`);
      const data = await api_call.json();
      this.setState({recipes:data.results,
        baseURL:data.baseUri,
        offset:offset,
      });
    }
    
  

  componentDidUpdate=()=>{
    const recipes =JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes",recipes);
    localStorage.setItem("baseUrl",this.state.baseURL);
  }

  componentDidMount=()=>{
    const json = localStorage.getItem("recipes");
    const baseUri = localStorage.getItem("baseUrl")
    const recipes = JSON.parse(json);
    this.setState({
      recipes:recipes,
      baseURL:baseUri,
    })


  }


  render() { 
    return ( 

      <div className="App">
      <header className="App-header">
        <h1 className="App-title">Recipe Search</h1>
      </header>
      <Form getRecipe = {this.getRecipe}/>
      <Recipes recipes={this.state.recipes} baseURL={this.state.baseURL}/>
      <button className="recipe__navbuttons" onClick={()=>this.getRecipebyNavigation('down')}>Prev</button>
      <button className="recipe__navbuttons" onClick={()=>this.getRecipebyNavigation('up')}>Next</button>
    </div>
     );
  }
}

export default App;
