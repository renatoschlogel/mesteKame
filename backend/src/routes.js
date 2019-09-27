const express = require("express");

const routes = express.Router();

const DadosController = require("./controllers/DadosController");

// const controller = require('./controllers/ProductController');


// routes.get("/products", productController.index);
// routes.get("/products/:id", productController.show);
// routes.post("/products", productController.store);
// routes.put("/products/:id", productController.update);
// routes.delete("/products/:id", productController.destroy);

routes.get("/dados", DadosController.index);

module.exports = routes;