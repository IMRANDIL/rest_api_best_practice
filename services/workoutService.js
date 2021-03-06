
const { v4: uuid } = require('uuid');


//create service for all the routes...

const { getAllWorkouts, createNewWorkout, getOneWorkout, updateOneWorkout, deleteOneWorkout } = require("../database/workout")


//get all workouts...


exports.getAllWorkouts = () => {
    try {
        return getAllWorkouts()
    } catch (error) {
        throw error;
    }
    //import the method from database...


}



//get one workout....


exports.getOneWorkout = (workoutId) => {
    try {
        const workout = getOneWorkout(workoutId);
        return workout;
    } catch (error) {
        throw error;
    }

}



//create new workout....


exports.createNewWorkout = (newWorkout) => {

    //now add the uuid and createdAT and updatedAT..

    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString('en-US', { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
    };

    try {
        const createdWorkout = createNewWorkout(workoutToInsert);
        return createdWorkout;
    } catch (error) {
        throw error;
    }



}



//update one workout...

exports.updateOneWorkout = (workoutId, changes) => {
    const updatedWorkout = updateOneWorkout(workoutId, changes);
    return updatedWorkout;
}


//delete one wokrout...

exports.deleteOneWorkout = (workoutId) => {
    return deleteOneWorkout(workoutId)
}