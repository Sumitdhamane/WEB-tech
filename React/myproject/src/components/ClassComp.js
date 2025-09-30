import React, { Component } from "react";
import MypureComp from "./MypureComp";

class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      empName: "sumit",
      empSal: 50000,
    };
  }

  changeStateData = () => {
    this.setState((prevState) => ({
      empName: "sumit dhamane",
      empSal: prevState.empSal + 10000,
    }));
  };

  render() {
    const { fname, lname, contact, gender, address } = this.props;
    const { empName, empSal } = this.state;

    return (
      <div>
        <h1>Class Component</h1>
        <p>
          Name: {fname}, Last-Name: {lname}, Contact: {contact}, Gender:{" "}
          {gender}, Address: {address}
        </p>
        <MypureComp EmployeeName={fname} />
        <h3>State and setState Example</h3>
        <p>
          Name: {empName} and Salary: {empSal}
        </p>
        <button type="button" onClick={this.changeStateData}>
          Change state data
        </button>
      </div>
    );
  }
}

export default ClassComp;
