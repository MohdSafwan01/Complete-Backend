// server ko create karna
const express = require("express");

const app = express();

// middleware
app.use(express.json());

// And similar notes should be saved in an array like this:
const notes = [];

// the notes should look like
 note = {
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

/*delete /notes/ :index */

app.delete('/notes/:index',(req,res) => {

  const index  =  req.params.index /*1*/

  delete notes[ index ]

  res.status(200).json({
    message: "note deleted sucessfully"
  })
})

module.exports = app;