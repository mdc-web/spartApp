const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;
const app = express();
const userRoutes = require('./routes/user.routes');

//connexion db
connectDB();




//middleware ->pour lire les data entrante
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use("/api/user", userRoutes);

// Lancer le serveur
app.listen (port, () => console.log("Le seveur a démarré au port " + port));