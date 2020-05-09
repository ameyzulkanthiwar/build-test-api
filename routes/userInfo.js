/***
 * File name took after the route not after the http (post) method
 */

const express = require("express");
const router = express.Router();
const UserInfo = require("../models/UserInfo");

// Get all the userInfo
router.get("/", async (req, res) => {
    try {
        const userInfo = await UserInfo.find();
        res.send(userInfo);
    } catch (err) {
        res.json({ message: err });
    }
});

// POST the user Information
router.post("/", async (req, res) => {
    console.log("req.body", req.body);
    const userInfo = new UserInfo({
        name: req.body.name,
        gender: req.body.gender,
        companyName: req.body.companyName,
        date: req.body.date
    });

    try {
        const savedUserInfo = await userInfo.save();
        res.json(savedUserInfo);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get specific user
router.get("/:name", async (req, res) => {
    try {
        // Its a "param" not a "body"
        const userInfo = await UserInfo.find({ name: req.params.name });
        res.send(userInfo);
    } catch (err) {
        res.json({ message: err });
    }
});

// Delete user info by the name
router.delete("/:name", async (req, res) => {
    try {
        // Its a "param" not a "body"
        const deletedInfo = await UserInfo.remove({ name: req.params.name });
        res.json(deletedInfo);
    } catch (err) {
        res.json({ message: err });
    }
});

// Update the user info
router.patch("/:name", async (req, res) => {
    try {
        /***
         * Need to pass paramter as well as body
         * param for identifying the data set and body for updating selected data set
         */
        const updateUserInfo = await UserInfo.update(
            { name: req.params.name },
            { $set: { name: req.body.name } }
        );
        res.json(updateUserInfo);
    } catch (err) {
        res.json({ message: err });
    }
});

// Export all the routs
module.exports = router;
