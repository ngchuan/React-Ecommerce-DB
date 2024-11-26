// Part 13 Step 1
// Part 13 Step 4

const express = require('express');
const router = express.Router();
const cartService = require('../services/cartService');
const authenticateToken = require('../middlewares/UserAuth');

// Apply the authenticateToken middleware to all routes
router.use(authenticateToken);

// GET cart contents
// router.get('/', async (req, res) => {
//   try {
//      res.send("Get Cart Route");
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// GET cart contents
router.get('/', async (req, res) => {
  try {
    const cartContents = await cartService.getCartContents(req.user.userId);
    res.json(cartContents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT bulk update cart
// router.put('/', async (req, res) => {
//   try {
//      res.send("Put Cart Route")
//   } catch (error) {
//      res.status(500).json({ message: error.message });
//   }
// });

// PUT bulk update cart
router.put('/', async (req, res) => {
  try {
    const cartItems = req.body.cartItems; // Expects an array of items with productId and quantity
    await cartService.updateCart(req.user.userId, cartItems);
    res.json({ message: 'Cart updated successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
