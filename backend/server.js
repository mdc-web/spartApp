const express = require("express");
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const {checkUser, requireAuth} = require('./middleware/auth.middleware');
const app = express();

//connexion db
connectDB();




//middleware ->pour lire les data entrante
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());

//jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
})

//routes
app.use("/api/user", userRoutes);


//server
app.listen(process.env.PORT, () => {
    console.log(`Le serveur a demmaré au port ${process.env.PORT}`);
})