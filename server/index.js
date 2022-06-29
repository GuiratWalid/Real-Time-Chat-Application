const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/usersRoutes");
require("dotenv").config();
require("./utils/connectDB");


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', usersRoutes);


const server = app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT} !`);
});
