// Part 11 Step 1

const express = require('express');
const router = express.Router();
// const pool = require('../database');
const productService = require('../services/productService');


// GET all products
// router.get('/', (req, res) => {
//   res.json({ message: "Get all products" });
// });

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single product
// router.get('/:id', (req, res) => {
//   res.json({ message: `Get product with id ${req.params.id}` });
// });

// GET a single product
router.get('/:id', async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;