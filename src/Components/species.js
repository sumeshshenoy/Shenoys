import React, { Component } from "react";
class Species extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    species: []
  };
  requestSpecies() {
    fetch("http://localhost:57810/api/default/getspecies")
      .then(res => res.json())
      .then(data => {
        this.setState({ species: data });
      });
  }
  render() {
    if (this.props.pressed) {
      this.requestSpecies();
      return (
        <div className="subPage">
          <h2>
            <b>What species appeared in the most number of Star Wars films?</b>
          </h2>
          {this.state.species.map(species => (
            <div>
              <ul>
                <li className="ans">
                  <b>{species}</b>
                </li>
              </ul>
            </div>
          ))}
        </div>
      );
    } else {
      return <div className="subPage"></div>;
    }
  }
}

export default Species;
