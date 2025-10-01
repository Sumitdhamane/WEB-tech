import React, { Component } from "react";

class Hovercount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  Onhover = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Hover counter</h1>
        <p>
          Counter: <strong>{this.state.count}</strong>
        </p>
        <h4
          style={{ backgroundColor: "sandybrown" }}
          onMouseOver={() => {
            this.Onhover();
          }}
        >
          Hover on me
        </h4>
      </div>
    );
  }
}

export default Hovercount;
