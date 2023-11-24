const express = require("express");
const app = express();
const PORT = 3000;
const productRoutes = require("./routes/product-router");

// const products = [
//     {
//         id: 1,
//         name: "car",
//         price: 1000,
//         createdAt: "2009",
//     },
//     {
//         id: 2,
//         name: "iphone",
//         price: 500,
//         createdAt: "2023",
//     },
// ];

//localhost: 3000
//localhost: 3000/products

//server json

app.use(express.json());


//routes

//route home
app.get("/", (req, res) => {
    // console.log(req.method);
    // console.log(req.hostname);
    res.status(400).send("LastName and firstName are require");
});

app.get("/products", (req, res) => {
    res.json(products);
});

app.get("product/:productID", (req, res) =>{
    res.json(`get detail product ${req.params.productID}`);
})


//route-product
//prefix
app.use("/products", productRoutes);

//create product
app.post('/product', (req, res) => {
    console.log(req.body);
    res.json("create products");
})

//update products
app.put("/product/:productID", (req, res) => {
    res.json("update product");
})

app.delete("/product", (req, res) => {
    res.json("delete products");
});

app.listen(PORT, () => {
    console.log(`server running up in port: ${PORT}`);
});


//params va query
//+params: dung de get detail
//+query: dung de fillter


//get
//filter: price > 600
app.get("products", (req, res) => {
    console.log(res.query);
    res.json()
})
