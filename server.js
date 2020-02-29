const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');

const PORT = process.env.PORT || 3000;

// connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Listen on port 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
