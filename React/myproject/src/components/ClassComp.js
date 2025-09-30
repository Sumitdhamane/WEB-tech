import React, { Component } from "react";
import MypureComp from "./MypureComp";

class ClassComp extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     empName: "sumit",
  //     empSal: 150000,
  //   };
  // }
  // changeStateData = () => {
  //   this.setState({
  //     empName: "sumit dhamane",
  //     empSal: this.state.empSal + 10000,
  //   });
  // };

  render() {
    const { fname, lname, contact, gender, address } = this.props;
    // const { empName, empSal } = this.state;
    return (
      <div>
        <h1>Class Component</h1>
        <p>
          Name:{fname}
          Last-Name:{lname} Contact:{contact} gender:{gender}
          address:{address}
        </p>
        <MypureComp />
        {/* <h3>state and setstate</h3>
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
        </button> */}
      </div>
    );
  }
}

export default ClassComp;
