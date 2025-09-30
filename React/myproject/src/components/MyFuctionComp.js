import React, { Component } from "react";

class MyFunctionComp extends Component {
  greeting = (s1, s2, s3) => {
    alert(`good morning ${s1}, ${s2}, ${s3}`);
  };
  render() {
    return (
      <div>
        <h1>Greeting</h1>
        <button
          type="button"
          onClick={() => this.greeting("shreyas", "om", "amaan")}
        >
          Greeting
        </button>
      </div>
    );
  }
}

export default MyFunctionComp;
