import React, { Component } from "react";
class Pilots extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    if (this.props.pressed) {
      return (
        <div className="subPage">
          <h2>
            <b>
              What planet in Star Wars universe provided largest number of
              vehicle pilots?
            </b>
          </h2>
        </div>
      );
    } else {
      return <div className="subPage"></div>;
    }
  }
}

export default Pilots;
