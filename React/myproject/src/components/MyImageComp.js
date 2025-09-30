import React from "react";
import tiger from "../shared/images/tiger.jpg";
import nature from "../shared/images/nature.jpg";
import download from "../shared/images/download.jpg";
import fly from "../shared/images/fly.jpg";
// import elphant from "../shared/images/elephant.jpg";
import bird from "../shared/images/bird.jpg";
import myImages from "../shared/constant/ConstantData";
const MyImageComp = () => {
  return (
    <div>
      <h2>This my images component</h2>
      <img src={tiger} />
      <img src={nature} />
      <img src={download} />
      <img src={fly} />
      <img src={bird} />
      <img src={myImages.elphant} />
    </div>
  );
};

export default MyImageComp;
