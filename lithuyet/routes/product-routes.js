const express = require("express");
const{
    getProducts,
    createProducts,
} = require("../controllers/product-controllers");
const logger = require("../middlewares/logger");
const checkAuthMiddleware = require("../middlewares/checkAuth-middleware");
const defaultPageMiddleware = require("../middlewares/defaultPage-middleware");
const customCheckAuthMiddleware = require("../middlewares/custom-auth-middleware");
const router = express.Router();

const products = [
    {
      id: 1,
      name: "Car",
      price: 1000,
      createdAt: "2009",
    },
    {
      id: 2,
      name: "IPhone",
      price: 500,
      createdAt: "2023",
    },
    {
      id: 3,
      name: "Bike",
      price: 1000,
      createdAt: "2009",
    },
    {
      id: 4,
      name: "Laptop",
      price: 500,
      createdAt: "2023",
    },
  ];

  //4 -> 2 item -> 2 page

  //page 1 -> 1 -> 2
  //page 2 -> 2 -> 3

  router.get("/", customCheckAuthMiddleware(false), getProducts);
  
  router.get("/:productID", (req, res) => {
    res.json(`get detail product ${req.params.productID}`);
  });

  router.post("/", customCheckAuthMiddleware(true), createProducts);

//   router.put("/:productID", (req, res) => {
//     res.json("update product");
//   });

// router.delete("/:productID",(req, res) => {
//     res.json("delete product");
// });

module.exports = router;