import { Component, PureComponent } from "react";

export class MypureComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>This is my..</h2>
        <p>Employee Name: {this.state.name}</p>
      </div>
    );
  }
}

export default MypureComp;
