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

// ------------------------------- Routes -----------------------------------------------------

// Home Page
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, "home.html"));
});

// Tables and Wailtinglist Page
app.get("/tables",function(req,res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

// Create reservation Page
app.get("/reserve",function(req,res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Get tables back in Json format
app.get("/api/tables",function(req,res){
    return res.json(tables);
});

// Gets waitinglist back in json format
app.get("/api/waitlist",function(req,res){
    return res.json(waitingList);
});

// starts listening on server
app.listen(PORT, function(){
    console.log("App listening on port " + PORT);
})


// console.log(tables);