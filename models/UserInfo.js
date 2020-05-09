// We are going define the schema here for our DB
const mongoose = require("mongoose");

const userInfoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: String,
    companyName: String,
    date: {
        type: Date,
        default: Date.now
    }
});

// Export schema

module.exports = mongoose.model("UserInfo", userInfoSchema);
