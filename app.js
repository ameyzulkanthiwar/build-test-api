const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

// Import Routes
const userInfoRoute = require("./routes/userInfo");
// Body parser
const bodyParser = require("body-parser");
// Add the CORS
const cors = require("cors");

/**
 * Middleware
 * It's a function and it get execute when particular routes are get hit
 * Example: app.use(specify_route, function)
 */
app.use(cors());

app.use("/", bodyParser.json()); // Need to parse the body all the time

app.use("/userInfo", userInfoRoute);

// Routes
app.get("/", (req, res) => {
    res.send("Server just started!");
});

// Connect to MongoDB
mongoose.connect(
    process.env.db_connection_url,
    { useUnifiedTopology: true, useNewUrlParser: true }, // Was getting warning in the console
    () => {
        console.log("Connected to DB!");
    }
);

/**
 * Start the listening to server or may say boot up the server
 */
app.listen(5000);
