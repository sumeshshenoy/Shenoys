import React, { Component } from "react";
class Person extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    character: ""
  };
  requestCharacter() {
    fetch("http://localhost:57810/api/default/getchars")
      .then(res => res.json())
      .then(data => {
        this.setState({ character: data });
      });
  }
  render() {
    if (this.props.pressed) {
      this.requestCharacter();
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
    } else {
      return <div className="subPage"></div>;
    }
  }
}

export default Person;
