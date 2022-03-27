const express = require("express");
const validator = require("validator")
const router = new express.Router();
const { protect } = require('../Middleware/protect');
const Booked = require("../model/bookedSlot");
const Distributer = require("../model/DistributerM");
const Slot = require("../model/SlotM")
const User = require('../model/userM');

require("dotenv").config();

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
    apiKey: process.env.VONAGE_API_KEY,
    apiSecret: process.env.API_SECRET
})

//dashboard
router.get('/user/:userId/dashboard', protect, async(req, res) => {
        const userId = req.params.userId;

        try {
            const user = await User.findOne({ uid: userId });

            if (!user) {
                res.send({
                    message: "registrations is required"
                });
            }

            const distributor = await Distributer.findById(user.distributorId);

            res.status(200).send({
                state: user.state,
                name: user.name,
                rationNo: user.rationNo,
                city: user.city,
                image: user.image,
                uid: user.uid,
                distributorName: distributor.name,
                distributorNo: distributor.number
            });

        } catch (error) {
            res.status(400).send(error);
        };
    })
    //checked
router.post('/user/:userId/register', protect, async(req, res) => {
        const userId = req.params.userId;
        const data = req.body;
        try {
            const user = await User.findOne(req.body);
            user.uid = userId;
            console.log(user)

            await user.save();

            res.status(200).send(user);

        } catch (error) {
            res.status(400).send(error);
        };
    })
    //checked
router.get('/user/:userId/getSlots', protect, async(req, res) => {

    const userId = req.params.userId;
    try {
        const user = await User.findOne({ uid: userId });
        const distributerId = user.distributorId;
        const distributer = await Distributer.findById({ _id: distributerId });

        const distributerUid = distributer.uid;
        const slots = await Slot.find({ distributerUid });

        res.status(200).send(slots);
    } catch (e) {
        res.status(400).send(e)
    }
});
//checked
router.post('/user/:userId/bookSlot', protect, async(req, res) => {

    const userId = req.params.userId;
    const { date, month, year, startTime } = req.body;
    console.log(req.body)
        // const tempDate = new Date(new Date(date).getTime() + 24 * 3600000);
    try {
        const user = await User.findOne({ uid: userId });
        console.log(user)
        const distributerId = user.distributorId;
        const distributer = await Distributer.findById({ _id: distributerId });
        console.log(distributer)
        const distributerUid = distributer.uid;
        console.log(distributerUid)
        console.log(date)
        const slot = await Slot.findOne({ date, month, year, startTime, distributerId: distributerUid });
        console.log(slot)
        slot.count--;
        await slot.save();

        const booked = new Booked({
            userName: user.name,
            rationNum: user.rationNo,
            distributerId: distributerUid,
            date,
            month,
            year,
            time: startTime,
        })
        console.log(booked)
        await booked.save()
        res.status(201).send({ message: "successfully booked" })

    } catch (e) {
        res.status(400).send(e)
    }
});

router.post("/user/:userId/generateReceipt", protect, async(req, res) => {
    // res.header('Content-Type', 'application/json');
    // console.log(req.body);
    // client.messages
    //     .create({
    //         from: process.env.TWILIO_PHONE_NUMBER,
    //         to: req.body.to,
    //         body: req.body.body
    //     })
    //     .then(() => {
    //         res.send(JSON.stringify({ success: true }));
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.send(JSON.stringify({ success: false }));
    //     });

    const from = "+918882158330"
    const to = req.body.to;
    const text = req.body.body;

    vonage.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if (responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
        }
    })
})

module.exports = router;