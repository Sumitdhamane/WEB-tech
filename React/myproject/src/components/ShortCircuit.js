import React, { Component } from "react";

class ShortCircuit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCon: true,
    };
  }
  render() {
    let msg = "";
    return this.state.isCon && <h1>Admin login</h1>;
  }
}

export default ShortCircuit;
