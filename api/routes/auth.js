const User = require("../models/User");

const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//register
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString(),
    });
    try {
        const addUser = await newUser.save();
        res.status(200).json(addUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

//Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("wrong candidates");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const orignalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        orignalPassword !== req.body.password &&
            res.status(401).json("wrong candidates");
        const eccessToken = jwt.sign(
            {
                id: user.id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );
        const { password, ...others } = user._doc;

        res.status(200).json({ ...others, eccessToken });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
