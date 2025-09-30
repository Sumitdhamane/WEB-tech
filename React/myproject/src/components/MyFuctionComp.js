import React, { Component } from "react";

class MyFunctionComp extends Component {
  render() {
    return (
      <div>
        <h1>Class 2 Component</h1>
        <p>
          Name:{this.props.fname} and Post:{this.props.post}
        </p>
      </div>
    );
  }
}

export default MyFunctionComp;
