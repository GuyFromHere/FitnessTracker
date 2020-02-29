const router = require("express").Router();
const Workout = require("../models/workout.js");

app.get("/api/workouts", (req, res) => {
    Workout.find({})
      //.sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  
app.put("/api/workouts/:id", (req, res) => {
    Workout.update({}).then(dbWorkout => {
        res.json(dbWorkout);
    })
  })