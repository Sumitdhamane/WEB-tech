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
    if (!this.state.isCon) {
      //   return <h2>admin login</h2>;
      msg = "Admin login";
    } else {
      //   return <h2>User login</h2>;
      msg = "User login";
    }

    return <h2>{msg}</h2>;
  }
}

export default Condition;
