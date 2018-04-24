//import { ADDRCONFIG } from "dns";
//import { Mongoose } from "mongoose";

require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect((process.env.MONGODB_URI)) //mongodbL//localhost/idea-board

const connection = mongoose.connection;
connection.on('connected', () => {
    console.log('Mongoose Connected Successfully');

});

//if the connection throws an error
connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err)
});

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hey Homie')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("This is where the magic happens" + PORT);
})