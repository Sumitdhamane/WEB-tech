import React, { Component } from "react";

export class MypureComp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>This is my..</h2>
        <p>Employee Name: this.state.name</p>
      </div>
    );
  }
}

export default MypureComp;
