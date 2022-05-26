const express = require('express'); // Package to get the express object constructor
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express(); // this function returns an express object which has the capabilitites to handle server side requests

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = process.env.PORT; // this will be the port on our local system where server will run


app.listen(PORT, () => { // listen function registers the app for the port
    console.log(`Server started on Port ${PORT}`)
})
