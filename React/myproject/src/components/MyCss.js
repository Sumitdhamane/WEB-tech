import React from "react";
import "./external.css";
import mybox from "./box.module.css";
const MyCss = () => {
  let mycssprop = {
    color: "green",
    fontSize: "20px",
    textAlign: "center",
    backgroundColor: "dodgerblue",
  };
  return (
    <div>
      <h1 style={{ color: "red", backgroundColor: "aqua" }}>
        This is myCssComp
      </h1>
      <div style={mycssprop}>Use of internal</div>
      <p className="txt-danger">hello friends</p>
      <p className="txt-sucess">how are you</p>
      <p className="txt">hii from here</p>
      <div className={mybox.box}>
        <img src="./images.jpg"></img>
      </div>
    </div>
  );
};

export default MyCss;
