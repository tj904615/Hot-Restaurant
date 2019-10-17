// Dependencies 
var express = require("express");
var path = require("path");

//set up express
var app = express();
var PORT = 4000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// arrays to push the data in
var tables = [];

var waitingList = [];

// starts listening on server
app.listen(PORT, function(){
    console.log("App listening on port " + PORT);
})