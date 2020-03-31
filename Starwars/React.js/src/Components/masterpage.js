import React, { Component } from "react";
import Movies from "./movies";
import Person from "./person";
import Characters from "./species";
import Pilots from "./pilots";
import Species from "./species";
class MasterPage extends Component {
  state = {
    condition: false
  };
  styles = {
    padding: 40,
    width: 500,
  };
  clickEventHandler() {
    this.setState({ condition: !this.state.condition });
  }
  render() {
    return (
      <div>
        <div className="mainPage">
          <button
            style={this.styles}
            onClick={this.clickEventHandler.bind(this)}
            className="btn btn-warning btn-lg btn3d"
          >
            <span className="glyphicon glyphicon-star"></span>
            <h1 className="h1">
              {"  "}
              <b>Do. Or do not. There is no try.</b>
              {"  "}
            </h1>
            <span className="glyphicon glyphicon-star"></span>
          </button>
        </div>
        {this.state.condition && <Movies/>}
        {this.state.condition && <Person/>}
        {this.state.condition && <Species/>}
        {this.state.condition && <Pilots/>}
      </div>
    );
  }
}

export default MasterPage;
