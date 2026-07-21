require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/database");

connectDB();


const app = express();

const PORT = 369;


// Middleware

app.use(cors());

app.use(express.json());


// Routes

const habitRoutes = require("./routes/habitRoutes");

app.use("/api/habits", habitRoutes);



app.get("/", function (req, res) {

    res.send("Aegis Backend is Running");

});


app.listen(PORT, function () {

    console.log(`Aegis server running on port ${PORT}`);

});

