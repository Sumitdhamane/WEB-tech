import React from "react";
import { Link } from "react-router-dom";

const Navcomp = () => {
  return (
    <div>
      <Link className="btn btn-primary m-2" to="hook">
        Hook
      </Link>
      <Link className="btn btn-primary m-2" to="state">
        State
      </Link>
      <Link className="btn btn-primary m-2" to="useEffect">
        effect
      </Link>
      <Link className="btn btn-primary m-2" to="product">
        product
      </Link>
    </div>
  );
};

export default Navcomp;
