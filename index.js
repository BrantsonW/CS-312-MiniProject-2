const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//home page
app.get("/", (req, res) => {
    res.render("index");
})

//joke form
app.post("/joke", (req, res) => {
    const category = req.body.category;
    res.render("index");
})

//start server
app.listen(port, () => {})