const express = require("express");
const validator = require("validator")
const router = new express.Router();
const { protect } = require('../Middleware/protect');
const Booked = require("../model/bookedSlot");
const Distributer = require("../model/DistributerM");
const Slot = require("../model/SlotM")
const User = require('../model/userM');

//login route
router.post('/login', async(req, res) => {
    try {
        const user = new User(req.body);
        await user.save()
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
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

            res.status(200).send(user);

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
    const { date, startTime } = req.body;
    try {
        const user = await User.findOne({ uid: userId });

        const distributerId = user.distributorId;
        const distributer = await Distributer.findById({ _id: distributerId });
        const distributerUid = distributer.uid;

        const slot = await Slot.findOne({ distributerUid, date, startTime });
        slot.count--;
        await slot.save();

        const booked = new Booked({
            userName: user.name,
            rationNum: user.rationNo,
            distributerId: distributerUid,
            date,
            time: startTime,
        })

        await booked.save()
        res.status(201).send({ message: "successfully booked" })

    } catch (e) {
        res.status(400).send(e)
    }
});

module.exports = router;