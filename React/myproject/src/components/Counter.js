import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementData = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementData = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  resetData = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <h1>Counter Component</h1>
        <h2>{this.state.count}</h2>
        <button className="btn btn-primary" onClick={this.incrementData}>
          Increment
        </button>
        <button onClick={this.decrementData}>Decrement</button>
        <button onClick={this.resetData}>Reset</button>
      </div>
    );
  }
}

export default Counter;
