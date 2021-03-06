const db = require("../models");

module.exports = app => {
  app.get("/api/workouts/", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}, (err, data) => {
      if (err) throw err;
    })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  })

  app.put('/api/workouts/:id', (req, res) => {
    console.log('api route workouts:id');
    console.log(req.params.id)
    db.Workout.findByIdAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err);
    });

  });

  // Called by api's createWorkout function
  app.post('/api/workouts/', (req, res) => {
    db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
  })

}