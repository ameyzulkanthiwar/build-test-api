/***
 * File name took after the route not after the http (post) method
 */

const express = require("express");
const router = express.Router();
const UserInfo = require("../models/UserInfo");

router.get("/", async (req, res) => {
    try {
        const userInfo = await UserInfo.find();
        res.send(userInfo);
    } catch (err) {
        res.json({ message: err });
    }
});

// POST
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

// Export all the routs
module.exports = router;
