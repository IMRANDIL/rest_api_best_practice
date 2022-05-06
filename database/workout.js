const DB = require('./db.json');



//create a method that returns all the workouts in db json...


exports.getAllWorkouts = () => {
    return DB.workouts;
}