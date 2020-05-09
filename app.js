const express = require("express");
const app = express();

// Routes
app.get("/", (req, res) => {
    res.send("Server just started!");
});

// Start the listening to server
// or may say boot up the server
app.listen(5000);
