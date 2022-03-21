const express = require("express");
require("./db/mongoose")
const userRouter = require('./routes/user');
const app = express();
const PORT = 3000;
app.use(userRouter);


app.listen(PORT, () => {
    console.log("server is connected on port 3000")
})