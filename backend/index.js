const express = require("express");
require("./db/mongoose")
const userRouter = require('./routes/user');
const DistributerRouter = require('./routes/Distributer');
const cors = require('cors')
const { protect } = require('../backend/Middleware/protect');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

require("dotenv").config();

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(userRouter);
app.use(DistributerRouter);


app.listen(PORT, () => {
    console.log("server is connected on port 5000")
})