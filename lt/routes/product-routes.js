const express = require("express");
const{
    getProducts,
    createProducts,
} = require("../controller/product-controller");

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
];

router.get("/", getProducts);

router.get("/:productID", (req, res) => {
    res.json(`get detail product ${req.params.productID}`);
});

router.post("/", createProducts);

router.put("/:productID", (req, res) => {
    res.json("update product");
});


router.delete("/:productID", (req, res) => {
    res.json("delete product");
});

module.exports = router;