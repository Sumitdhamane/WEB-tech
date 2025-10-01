import { render } from "@testing-library/react";
import React, { Component } from "react";

const Hoccomp = (WrappeComp) => {
  class Hoc extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementdata = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    render() {
      return (
        <WrappeComp
          count={this.state.count}
          incrementdata={this.incrementdata}
        ></WrappeComp>
      );
    }
  }
  return Hoc;
};

export default Hoccomp;
