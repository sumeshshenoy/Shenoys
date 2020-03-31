import React, { Component } from "react";
class Species extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    species: []
  };
componentDidMount = async()=>{
   const response = await  fetch("http://localhost:57810/api/default/getspecies")
   const data=await response.json();
   this.setState({species:data.speciesName})
  }
  render() {
      return (
        <div className="subPage">
          <h2>
            <b>What species appeared in the most number of Star Wars films?</b>
          </h2>
          {this.state.species.map(spc => (
            <div key={spc}>
              <ul>
                <li  className="ans">
                  <b> {spc}</b>
                </li>
              </ul>
            </div>
          ))}
        </div>
      );
  }
}

export default Species;
