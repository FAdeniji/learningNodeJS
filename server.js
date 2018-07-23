var express = require("express");
var count = require("./count");
var events = require("events");
var expresslayouts = require("express-ejs-layouts");

var app = express();
app.use(expresslayouts);

app.set("view engine", "ejs");
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));


var students = {

  1 : 'Folarin',
  2 : 'Mother'

};

app.get("/", function(req, res) {

  res.send("Hello World");

});

app.get("/index", function(req, res) {

  res.render("index", { });

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
