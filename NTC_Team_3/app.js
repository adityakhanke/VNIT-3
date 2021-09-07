//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fs = require("fs");
const https = require('https');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/ohlcDB");

const companySchema = {
  company: String
};

const Company = mongoose.model("Company", companySchema);


app.get("/", function(req, res){
  res.redirect("/dashboard");
});

app.get("/dashboard", function (req, res) {
  res.render("dashboard");
});

app.get("/company/:name", function (req, res) {
  // fs.readFile("./data.json", "utf8", (err, jsonString) => {
  //   if (err) {
  //     console.log("File read failed:", err);
  //     return;
  //   }
  //   const data = JSON.parse(jsonString);
  //   res.render("index", {data: data['name']});
  // });
  const name = req.params.name;
  res.render("company", { name: name });
  // res.redirect("../getDescription/" + name);
});

app.post("/search", function (req, res) {
  const name = req.body.mySearch;
  const company = new Company({
    company: name
  });
  company.save(function (err) {
    if (!err) {
      // redirect to home
      console.log(err);
    }
  });
  res.redirect("company/" + name);
});

app.get("/history", function (req, res) {
  Company.find({}, function (err, companies) {
    // console.log(companies);
    res.render("hist", { companies: companies });
  });
});

// app.get("/getDescription/:name", function (req, res) {
//   const name = req.params.name;
//   const desc = https.request('https://cloud.iexapis.com/stable/stock/' + name + '/companytoken=pk_668adf10a9a34556bea5b3dbd1eec64');
//   console.log(desc);
//   res.render("dashboard", { name: name });
// });

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
