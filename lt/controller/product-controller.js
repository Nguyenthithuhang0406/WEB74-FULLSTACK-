const {getProductsService} = require("../services/product-service");
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

function getProducts(req, res){
    console.log(req.query);
    res.json(products);
}

function createProducts(req,res){
    const {name, price, createdAt} = req.body;

    if(!name || !price || !createdAt){
        res.status(400).json("Name, price, createdAt are required");
        return;
    }

    const newProduct = getProductsService(name, price, createdAt);

    res.status(201).json(newProduct);
}

module.exports = {getProducts, createProducts};