const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//home page
app.get("/", (req, res) => {
    res.render("index", {joke:null, error:null});
})

//joke form
app.post("/joke", async (req, res) => {
    const category = req.body.category;

    try {
        const response = await axios.get(
             `https://v2.jokeapi.dev/joke/${category}`
        );

        res.render("index", {joke: response.data, error: null});
    } catch (error) {
        console.error(error);

        res.render("index", {joke: null, error: "Error, Try again later."});
    }
})

//start server
app.listen(port, () => {})