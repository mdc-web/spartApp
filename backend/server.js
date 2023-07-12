const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;


//connexion db
connectDB();

const app = express();
//middleware ->pour lire les data entrante
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use("/post", require("./routes/post.routes"));

// Lancer le serveur
app.listen (port, () => console.log("Le seveur a démarré au port " + port));