



//create service for all the routes...

const { getAllWorkouts } = require("../database/workout")


//get all workouts...


exports.getAllWorkouts = () => {
    //import the method from database...

    return getAllWorkouts()
}



//get one workout....


exports.getOneWorkout = () => {

}



//create new workout....


exports.createNewWorkout = () => {

}



//update one workout...

exports.updateOneWorkout = () => {

}


//delete one wokrout...

exports.deleteOneWorkout = () => {

}