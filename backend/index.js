const express = require("express");
require("./db/mongoose")
const userRouter = require('./routes/user');
const DistributerRouter = require('./routes/Distributer');
const Slot = require('./routes/slot');

const { protect } = require('../backend/Middleware/protect');

const app = express();
const PORT = 3000;
app.use(userRouter);
app.use(DistributerRouter);
app.use(Slot);
// app.use(protect);

app.listen(PORT, () => {
    console.log("server is connected on port 3000")
})