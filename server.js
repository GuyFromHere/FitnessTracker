const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');

const PORT = process.env.PORT || 3000;

const Workout = require("./models/workout.js");

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// routes
//app.use(require("./routes/api.js"));
// HTML ROUTES

app.get("/exercise", (req, res) => {
  console.log('serverjs get /exercise');
  res.sendFile(path.join(__dirname, "/public/exercise.html"));
})

app.get("/stats", (req, res) => {
  console.log('serverjs get /stats');
  res.sendFile(path.join(__dirname, "/public/stats.html"));
})


// ROUTES


app.get("/api/workouts/", (req, res) => {
  console.log('serverjs get /api/workouts')
  Workout.find({})
    //.sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.put('/api/workouts/:id', (req, res) => {
  console.log('serverjs put /api/workouts/:id')
  Workout.update({}).then(dbWorkout => {
    res.json(dbWorkout);
  }).catch(err => {
    res.status(400).json(err);
  });
})

app.post('/api/workouts/', ({body}, res) => {
  console.log('serverjs post /api/workouts body:');
  console.log(body)
  Workout.create({body}).then(dbWorkout => {
    res.json(dbWorkout);
  }).catch(err => {
    res.status(400).json(err);
  });
})






// Listen on port 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
