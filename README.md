# FitnessTracker

# Description

A workout tracker built using Node, Express, Mongo, Semantic, and Chart.js. Check out the deployed version [here](https://fitnesstracker-guyfromhere.herokuapp.com/).

# Usage

If running locally, you'll need to edit the connection.js file in models/db in order to point at a valid MongoDB instance. By default the connection file looks for database credentials in two environment variables. These can be exported and sourced in a .env file. Once you have a connection to MongoDB you'll need to seed the database. Run 'npm run seed' to get started. 

What that completed you're ready to use the app!

Click New Workout and select an exercise type. 

Fill in information about the exercise and click Add Exercise to add it to the day's workout. 

![Adding an exercise](https://github.com/GuyFromHere/FitnessTracker/blob/master/public/images/add.png)

When you are done adding exercises for the day, click Complete to view your Workout Dashboard.

![Workout Dashboard](https://github.com/GuyFromHere/FitnessTracker/blob/master/public/images/dash.png)

