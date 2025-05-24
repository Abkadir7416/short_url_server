import express from 'express'
import dotenv from 'dotenv';
import connectDB from './src/config/mongo.config.js';
import shortUrlRoutes from './src/routes/short_url.route.js';



// Load environment variables
dotenv.config();

// Create Express app
const app = express();

app.use(express.json());

// Connect to MongoDB
connectDB();

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to URL Shortener API' });
});

// Routes
app.use('/api', shortUrlRoutes);



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
