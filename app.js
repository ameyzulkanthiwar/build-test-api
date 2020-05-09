const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

/**
 * Middleware
 * It's a function and it get execute when particular routes are get hit
 * Example: app.use(specify_route, function)
 */

// Routes
app.get("/", (req, res) => {
    res.send("Server just started!");
});

app.get("/post", (req, res) => {
    res.send("We are on the post!");
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
