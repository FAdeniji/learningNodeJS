var express = require("express");
var count = require("./count");
var events = require("events");

var app = express();
app.set("view engine", "ejs");

var students = {

  1 : 'Folarin',
  2 : 'Mother'

};

app.get("/", function(req, res) {

  res.send("Hello World");

});

app.get("/about", function(req, res) {

  // res.sendFile(__dirname + "/view/about.html");
  res.render("about", { id: "0" });

});

app.get("/services", function(req, res) {

  res.send("Services");

});

app.get("/contact", function(req, res) {

  res.send("Contact us");

});

app.get('/student/:id', function(req, res) {

  res.render('student', { name: students[req.params.id], id: req.params.id });

});

var server = app.listen(3000);
