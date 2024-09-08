const mongoose = require('mongoose');

// Define the connection string
const uri = 'mongodb+srv://twitterclone:twitterclone@cluster0.jkuy4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create a function to connect to the database
const connectToDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(uri, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    });

    console.log('Database connected successfully');
  } catch (error) {
    // Log any connection errors
    console.error('Database connection error:', error.message);
  }
};

// Export the connection function
module.exports = connectToDatabase;
