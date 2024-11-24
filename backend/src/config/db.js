const mongoose=require("mongoose");
const dbURI = "mongodb+srv://jjnTimeSheet:toyotastjerome@cluster0.uvq6f.mongodb.net/"

const connectDB = async () => {
    try {
      await mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected');
    } catch (err) {
      console.error(err.message);
      process.exit(1); // Exit the process with failure
    }
  };
  
  module.exports = connectDB;