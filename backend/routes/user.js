const express = require("express");
const validator = require("validator")
const router = new express.Router();
const { protect } = require('../Middleware/protect');

const User = require('../model/userM');

//login route
router.post('/login', async(req, res) => {
    const user = new User(req.body);
    try {
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
})

//dashboard
router.get('/user/:userID/dashboard', async(req, res) => {
    const _id = req.params.userID;
    console.log(_id);
})

router.post('/user/me', protect, async(req, res) => {
    const uid = req.user.user_id;
    console.log(uid);

    try {
        const user = await User.find({ uid });
        if (!user) {
            res.status(400).send({ message: 'first time registeration' })
        }
        res.status(200).send(user)
    } catch (e) {
        res.status(401).send(e)
    }
})

// router.get('/user/:userID/slots', async(req, res) => {

// })

module.exports = router;