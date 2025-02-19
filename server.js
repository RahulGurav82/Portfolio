const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");

// Setting up ejs-mate for layouts
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Static files
app.use(express.static(path.join(__dirname, "/public")));

// Routes
app.get("/", (req, res) => {
    res.render("home", { title: "Home" });
});

app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact" });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

app.get("/work", (req, res) => {
    res.render("work", { title: "Work" });
});

// Start server
app.listen(4000, () => {
    console.log("App running on http://localhost:4000");
});
