import React, { Component } from "react";
import Hoccomp from "./Hoccomp";

class ClickCount extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       count: 0,
  //     };
  //   }
  //   incrementdata = () => {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   };

  render() {
    return (
      <div>
        <h1>Click counter</h1>
        <p>
          Counter: <strong>{this.props.count}</strong>
        </p>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            this.props.incrementdata();
          }}
        >
          Increment++
        </button>
      </div>
    );
  }
}

export default Hoccomp(ClickCount);
