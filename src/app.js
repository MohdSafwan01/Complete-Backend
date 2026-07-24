// server ko create karna
const express = require("express");

const app = express();

// middleware
app.use(express.json());

// And similar notes should be saved in an array like this:
const notes = [];

// the notes should look like
const note = {
  title: "my first note",
  description: "this is my first note"
};

/* title, description */

app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: "note created successfully"
  });
});

app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "notes fetched successfully",
    notes: notes
  });
});

module.exports = app;