import React, { useEffect, useState } from "react";
import axios from "axios";
const ProductDash = () => {
  const [product, setProduct] = useState([]);
  const fetchData = () => {
    axios
      .get("http://localhost:8888/product")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Product Dash component</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>company</th>
            <th>quantity</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr key={item.pid}>
              <td>{item.pid}</td>
              <td>{item.pname}</td>
              <td>{item.pprice}</td>
              <td>{item.pcompany}</td>
              <td>{item.pquantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDash;
