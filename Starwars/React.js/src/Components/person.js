import React, { Component } from "react";
class Person extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    character: ""
  };
componentDidMount=async ()=> {
  const response = await fetch("http://localhost:57810/api/default/getchars")
  const data = await response.json();
  this.setState({character:data.charName})
  }
  render() {
      return (
        <div className="subPage">
          <h2>
            <b>
              What character (person) appeared in most of the Star Wars films?
            </b>
            <br />
            <br />
            <b className="ans">{this.state.character}</b>
          </h2>
        </div>
      );
  }
}

export default Person;
