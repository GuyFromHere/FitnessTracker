//const router = require("express").Router();
const db = require("../models");

module.exports = app => {
  // ROUTES
  app.get("/api/workouts/", (req, res) => {
    console.log('api-routes get /api/workouts')
    db.Workout.find({})
      //.sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    console.log('api-routes get /api/workouts')
    db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  })

  app.put('/api/workouts/:id', (req, res) => {
    console.log('api-routes put /api/workouts/:id')
    console.log(req.body);
    db.Workout.updateOne(
      { _id: req.params.id }, 
      {exercises: req.body}).then(dbWorkout => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
  })

  app.post('/api/workouts/', ({body}, res) => {
    console.log('serverjs post /api/workouts body:');
    console.log(body)
    db.Workout.create({body}).then(dbWorkout => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
  })

}