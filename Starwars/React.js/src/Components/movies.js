import React, { Component } from "react";
class Movies extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    movieName: ""
  };
  requestOpeningCrawl() {
    fetch("http://localhost:57810/api/default/getcrawl")
      .then(res => res.json())
      .then(data => {
        this.setState({ movieName: data });
      });
  }
  render() {
    if (this.props.pressed) {
      this.requestOpeningCrawl();
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
    } else {
      return <div className="subPage"></div>;
    }
  }
}

export default Movies;
