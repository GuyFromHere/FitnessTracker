const path = require('path');

module.exports = app => {
// HTML ROUTES
  app.get("/exercise", (req, res) => {
    console.log('serverjs get /exercise');
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  })
  
  app.get("/stats", (req, res) => {
    console.log('serverjs get /stats');
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  })
  
}