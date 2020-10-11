// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8000;
app.listen(port, () => console.log("server is running on port " + port));

// GET route
app.get("/all", (req, res) => {
  res.send(JSON.stringify(projectData));
});

// POST route
app.post("/add", (req, res) => {
  let newEntry = {};
  newEntry.temperature = req.body.temperature;
  newEntry.date = req.body.date;
  newEntry.userResponse = req.body.userResponse;
  if (newEntry.temperature && newEntry.date && newEntry.userResponse) {
    projectData = { ...newEntry };
    console.log("entry added successfully");
    console.log(projectData);
  } else {
    console.log("wrong input");
  }
});
