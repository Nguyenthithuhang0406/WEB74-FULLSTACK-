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

function getProducts(req, res){
    const startIndex = +req.query.page;
    const lastIndex = +req.query.take;

    console.log(startIndex, lastIndex);
    const results = products.slice(startIndex - 1, lastIndex);
    throw new Error();
    res.json(results);
}

function createProducts(req, res){
    const {name, price, createdAt} = req.body;

    if(!name || !price || !createdAt){
        res.status(400).json("Name, price, createdAt are required");
        return;
    }
    const newProduct = getProductsService(name, price, createdAt);

    res.status(201).json(newProduct);
}

module.exports = {getProducts, createProducts};