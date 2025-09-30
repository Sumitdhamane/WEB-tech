import React, { Component } from "react";
import tiger from "../shared/images/tiger.jpg";
import fly from "../shared/images/fly.jpg";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTiger: true,
    };
  }

  changeImage = () => {
    this.setState({
      showTiger: !this.state.showTiger,
    });
  };

  render() {
    return (
      <div>
        <h1>Toggle Image</h1>
        <img
          src={this.state.showTiger ? tiger : fly}
          alt="Animal"
          width="300"
        />
        <br />
        <button type="button" onClick={this.changeImage}>
          Toggle image
        </button>
      </div>
    );
  }
}

export default Toggle;
