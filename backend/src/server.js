//This file will set up the Express server and configure the routes.

const express=require('express');
const connectDB=require('./config/db')
const dotenv = require('dotenv');
const cors = require('cors')
const PORT = process.env.PORT || 5000;

// Initialize Express app
const app = express();


// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());           
app.use(express.json());    // Parse JSON bodies

// //Routes
app.use('/api',require('./routes/apiRoutes'))
app.use('/employee',require('./routes/testingDBroutes'))

//Simple route for testing
app.get('/',(req,res)=>{
    res.send('Hello from the backend')
})

//Start the server
app.listen(PORT,()=>{
    console.log(`Sever is running on port ${PORT}`);
    
})