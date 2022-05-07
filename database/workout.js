const DB = require('./db.json');

const { saveToDB } = require('./utils')

//create a method that returns all the workouts in db json...


exports.getAllWorkouts = () => {
    return DB.workouts;
}


//now a method for creating new workouts...


exports.createNewWorkout = (newWorkout) => {
    //now check if it is already added...

    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyAdded) {
        throw new Error('This workout already Exists!')
    }
    DB.workouts.push(newWorkout);
    saveToDB(DB);
    return newWorkout;
}