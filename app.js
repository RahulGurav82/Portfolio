const express = require("express");
const app = express();
const ejsMate = require("ejs-mate"); // Importing ejsMate for EJS layouts
const path = require("path"); // Importing 'path' module to handle file and directory paths

app.set("view engine", "ejs"); // Setting the view engine to EJS for templating
app.set("views", path.join(__dirname, "/views")); // Setting the views directory
app.engine("ejs", ejsMate); // Setting ejsMate as the template engine
app.use(express.static(path.join(__dirname, "/public"))); // Serving static files from 'public' directory

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs")
});

app.get("/about", (req, res) => {
    res.render("about.ejs")
});

app.get("/work", (req, res) => {
    res.render("work.ejs")
});

app.listen(3000, ()=> {
    console.log("App Running.");
});