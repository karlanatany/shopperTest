import express from "express";
import { createOrder } from "./src/services/createOrder.js";
import { getAllProducts } from "./src/services/getAllProducts.js";
import cors from "cors";
import { getAllOrders } from "./src/services/getAllOrders.js";

const app = express()
 app.use(cors())
app.use(express.json())

app
  .get('/products', getAllProducts)
  .get('/orders', getAllOrders)
  .post('/orders', createOrder)
  .listen(3030, () => {
    console.log('Starting server');
  })