const express = require("express");
const validator = require("validator")
const router = new express.Router();

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
    const _id = req.params;
    console.log(_id);
})

module.exports = router;