const express = require('express');
const cors = require('cors');
require('dotenv').config();

// const pool = require('./database');

// make sure this comes AFTER dotenv config
const productsRouter = require('./routes/products');
const userRoutes = require('./routes/users');
const cartRoutes = require('./routes/cart');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes Begin Here
// app.get("/", function(req,res){
//   res.json({
//       "message":"hello world"
//   })
// })

// Middleware
app.use("/api/products", productsRouter)
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);

// Basic Routes
app.get('/', (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});