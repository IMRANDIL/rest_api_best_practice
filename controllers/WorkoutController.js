


//now create controller for all the routes....

const { getAllWorkouts, getOneWorkout, createNewWorkout, updateOneWorkout, deleteOneWorkout } = require("../services/workoutService")



//get all workouts...

exports.getAllWorkouts = (req, res) => {
    const AllWorkouts = getAllWorkouts();
    res.status(200).send(AllWorkouts)
}




//get one workout....


exports.getOneWorkout = (req, res) => {

    const workout = getOneWorkout();


}



//create new workout....


exports.createNewWorkout = (req, res) => {
    //extract data from the req.body...

    const { body } = req;

    //now some validation...

    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
        return res.status(400).send('All Fields Required!')
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    }


    const createWorkout = createNewWorkout(newWorkout);

    //now send the response...

    res.status(201).send({ status: "OK", data: createWorkout })
}


//update workout....


exports.updateOneWorkout = (req, res) => {
    const updatedWorkout = updateOneWorkout();
}



//delete one workout...


exports.deleteOneWorkout = (req, res) => {
    const deletedWorkout = deleteOneWorkout()
}