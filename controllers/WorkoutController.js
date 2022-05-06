


//now create controller for all the routes....

const { getAllWorkouts, getOneWorkout, createNewWorkout, updateOneWorkout, deleteOneWorkout } = require("../services/workoutService")



//get all workouts...

exports.getAllWorkouts = (req, res) => {
    const AllWorkouts = getAllWorkouts();
}




//get one workout....


exports.getOneWorkout = (req, res) => {

    const workout = getOneWorkout();


}



//create new workout....


exports.createNewWorkout = (req, res) => {
    const createWorkout = createNewWorkout();
}


//update workout....


exports.updateOneWorkout = (req, res) => {
    const updatedWorkout = updateOneWorkout();
}



//delete one workout...


exports.deleteOneWorkout = (req, res) => {
    const deletedWorkout = deleteOneWorkout()
}