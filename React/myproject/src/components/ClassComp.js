import React, { Component } from "react";

class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      empName: "sumit",
      empSal: 150000,
    };
  }
  changeStateData = () => {
    this.setState({
      empName: "sumit dhamane",
      empSal: this.state.empSal + 10000,
    });
  };

  render() {
    const { fname, post } = this.props;
    const { empName, empSal } = this.state;
    return (
      <div>
        <h1>Class Component</h1>
        <p>
          Name:{fname} and Post:{post}
        </p>
        <h3>state and setstate</h3>
        <p>
          Name:{empName} and salary:{empSal}
        </p>
        <button
          type="button"
          onClick={() => {
            this.changeStateData();
          }}
        >
          Change state data
        </button>
      </div>
    );
  }
}

export default ClassComp;
