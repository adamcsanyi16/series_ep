require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3500;

const Serie = require("./models/Serie");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/megjelenit", async (req, res) => {
  try {
    const series = await Serie.find({});
    res.status(200).json({ series });
  } catch (error) {
    res.status(400).json({ msg: "Valami hiba történt: " + error.message });
  }
});

app.post("/hozzaad", async (req, res) => {
  try {
    const { cim, megjelenes, mufaj, szereplok, leiras } = req.body;
    const newSerie = new Serie({
      cim,
      megjelenes,
      mufaj,
      szereplok,
      leiras,
    });
    await newSerie.save();

    res
      .status(200)
      .json({ msg: "Az adatok sikeresen feltöltésre kerültek az adatbázisba" });
  } catch (error) {
    res.status(400).json({ msg: "Valami hiba történt: " + error.message });
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Sikeres csatlakozás");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
