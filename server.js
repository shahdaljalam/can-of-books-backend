const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors'); // enable the communication between the frontend and the backend
app.use(cors())
require('dotenv').config();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
// const seedUserData = require('./models/user.model')
const getBooks = require('./controllers/Book.controller');







app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});