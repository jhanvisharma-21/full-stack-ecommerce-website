const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load env variables FIRST
dotenv.config();

// Import DB connection
const connectDB = require("./config/db");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Initialize app
const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Running...");
});

// Port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});