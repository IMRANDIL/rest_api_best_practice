
const { v4: uuid } = require('uuid');


//create service for all the routes...

const { getAllWorkouts, createNewWorkout } = require("../database/workout")


//get all workouts...


exports.getAllWorkouts = () => {
    //import the method from database...

    return getAllWorkouts()
}



//get one workout....


exports.getOneWorkout = () => {

}



//create new workout....


exports.createNewWorkout = (newWorkout) => {

    //now add the uuid and createdAT and updatedAT..

    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString('en-US', { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
    }

    const createdWorkout = createNewWorkout(workoutToInsert);
    return createdWorkout;

}



//update one workout...

exports.updateOneWorkout = () => {

}


//delete one wokrout...

exports.deleteOneWorkout = () => {

}