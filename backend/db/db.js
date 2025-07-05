const mongoose = require('mongoose');

function connectToDb () {
    const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/Uber';
    mongoose.connect(dbUri)
    .then(() => {
        console.log('MongoDB connection established successfully');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });
}

module.exports = connectToDb;