import React, { Component } from "react";

class Condition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCon: true,
    };
  }
  render() {
    let msg = "";
    // if (!this.state.isCon) {

    //   msg = "Admin login";
    // } else {

    //   msg = "User login";
    // }
    // return <h2>{msg}</h2>;

    return this.state.isCon ? <h1>Admin login</h1> : <h1>User login</h1>;
  }
}

export default Condition;
