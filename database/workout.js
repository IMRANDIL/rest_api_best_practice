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

//get one workout...


exports.getOneWorkout = (workoutId) => {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if (!workout) {
        throw new Error('No such workout exists with this id')
    }
    return workout;
}


//update one workout...

exports.updateOneWorkout = (workoutId, changes) => {

    const indexForUpdate = DB.workouts.findIndex((workout) => workout.id === workoutId);

    if (indexForUpdate === -1) {
        throw new Error('no such workout exists with this id')
    }
    const updateWorkout = {
        ...DB.workouts[indexForUpdate],
        ...changes,
        updatedAt: new Date().toLocaleString('en-US', { timeZone: "UTC" })
    }

    DB.workouts[indexForUpdate] = updateWorkout;
    saveToDB(DB);
    return updateWorkout;


}


//delete one workout...


exports.deleteOneWorkout = (workoutId) => {
    const indexForDeletion = DB.workouts.findIndex((workout) => workout.id === workoutId);
    if (indexForDeletion === -1) {
        throw new Error('no such workout exists!');
    }
    DB.workouts.splice(indexForDeletion, 1);
    saveToDB(DB);
}