import React, { Component } from "react";
class Movies extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    movieName: ""
  };
componentDidMount=async ()=> {
     const response= await fetch("http://localhost:57810/api/default/getcrawl");
     const data = await response.json();
     this.setState({movieName:data.openingCrawl})

    }
  render() {
      return (
        <div className="subPage">
          <h2>
            <b>Which of all Star Wars movies has the longest opening crawl?</b>
            <br />
            <br />
            <b className="ans">{this.state.movieName}</b>
          </h2>
        </div>
      );
    }

    
  }

export default Movies;
