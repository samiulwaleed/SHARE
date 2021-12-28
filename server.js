require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3004;
const path = require('path');
const cors = require('cors');



// Default configuration looks like
// {
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
//   }


app.use(express.static('public'));

const connectDB = require('./config/db');
connectDB();

// Cors 
const corsOptions = {
  origin: 'http://127.0.0.1:3000,http://127.0.0.1:3001,http://127.0.0.1:3002'
  // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
  
}

app.use(cors(corsOptions))
app.use(express.json());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes 
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));


app.listen(PORT, console.log(`Listening on port ${PORT}.`));