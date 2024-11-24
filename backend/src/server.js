//This file will set up the Express server and configure the routes.

const express=require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const PORT = process.env.PORT || 5000;

// Initialize Express app
const app = express();

// Middleware
app.use(cors());           
app.use(express.json());    // Parse JSON bodies

// //Routes
app.use('/api',require('./routes/apiRoutes'))

//Simple route for testing
app.get('/',(req,res)=>{
    res.send('Hello from the backend')
})

//Start the server
app.listen(PORT,()=>{
    console.log(`Sever is running on port ${PORT}`);
    
})