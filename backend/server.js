require("dotenv").config();

const connectDB = require("./config/database");

connectDB();




const express = require("express");

const app = express();

const PORT = 369;


app.get("/", function (req, res) {

    res.send("Aegis Backend is Running");

});


app.listen(PORT, function () {

    console.log(`Aegis server running on port ${PORT}`);

});