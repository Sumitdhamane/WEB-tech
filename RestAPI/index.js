const con = require("./connection");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome You All In My REST API");
});

// Get all products
app.get("/products", (req, res) => {
  con.query("SELECT * FROM products", (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error fetching products");
      return;
    }
    res.send(result);
  });
});

// Get product by ID
app.get("/products/:id", (req, res) => {
  con.query(
    "SELECT * FROM products WHERE id=?",
    [req.params.id],
    (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error fetching product");
        return;
      }
      res.send(result);
    }
  );
});

// Delete product
app.delete("/products/:id", (req, res) => {
  con.query(
    "DELETE FROM products WHERE id=?",
    [req.params.id],
    (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error deleting product");
        return;
      }
      res.send({ message: "Product deleted successfully", result });
    }
  );
});

// Insert product
app.post("/products", (req, res) => {
  const { pname, pprice, pcompany, pquantity } = req.body;
  let insertQuery =
    "INSERT INTO products(pname,pprice,pcompany,pquantity) VALUES(?,?,?,?)";

  con.query(
    insertQuery,
    [pname, pprice, pcompany, pquantity],
    (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error adding product");
        return;
      }
      res.send({ message: "Product added successfully", result });
    }
  );
});

// Update product
app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { pname, pprice, pcompany, pquantity } = req.body;
  let updateQuery =
    "UPDATE products SET pname=?, pprice=?, pcompany=?, pquantity=? WHERE id=?";

  con.query(
    updateQuery,
    [pname, pprice, pcompany, pquantity, id],
    (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error updating product");
        return;
      }
      res.send({ message: "Product updated successfully", result });
    }
  );
});

app.listen(1998, () => {
  console.log("🚀 Server started on http://localhost:1998");
});
