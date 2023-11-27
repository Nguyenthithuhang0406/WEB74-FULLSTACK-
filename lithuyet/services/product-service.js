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
  
  function getProductsService(name, price, createdAt) {
    const newProduct = {
      id: products.length + 1,
      name,
      price,
      createdAt,
    };
  
    products.push(newProduct);
  
    return newProduct;
  }
  
  module.exports = { getProductsService };