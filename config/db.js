require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳
    mongoose.connect(process.env.URL, { useNewUrlParser: true,  useUnifiedTopology: true, });
console.log('idr tak ho gya');
    
    const connection = mongoose.connection;
    console.log('idr tak ho gya');
    connection.once('open', () => {
        
        console.log('Database connected 🥳🥳🥳🥳');
    }).on('error', function (err) {
        console.log(err);
      });
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;