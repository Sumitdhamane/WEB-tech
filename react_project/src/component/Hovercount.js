import React, { Component } from "react";
import Hoccomp from "./Hoccomp";

class Hovercount extends Component {
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
        <h1>Hover counter</h1>
        {/* <p>
          Counter: <strong>{this.state.count}</strong>
        </p>
        <h4
          style={{ backgroundColor: "sandybrown" }}
          className="text-sucess bg-warning"
          onMouseOver={() => {
            this.incrementdata();
          }}
        >
          Hover on me
        </h4> */}
        <p>
          Counter: <strong>{this.props.count}</strong>
        </p>
        <h4
          style={{ backgroundColor: "sandybrown" }}
          className="text-sucess bg-warning"
          onMouseOver={() => {
            this.props.incrementdata();
          }}
        >
          Hover on me
        </h4>
      </div>
    );
  }
}

export default Hoccomp(Hovercount);
