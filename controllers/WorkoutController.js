


//now create controller for all the routes....

const { getAllWorkouts, getOneWorkout, createNewWorkout, updateOneWorkout, deleteOneWorkout } = require("../services/workoutService")



//get all workouts...

exports.getAllWorkouts = (req, res) => {
    const AllWorkouts = getAllWorkouts();
    res.status(200).send(AllWorkouts)
}




//get one workout....


exports.getOneWorkout = (req, res) => {

    //extract workoutId from the req.params;

    const { workoutId } = req.params;

    if (!workoutId) {
        return res.status(400).send('WorkoutId required')
    }



    const workout = getOneWorkout(workoutId);
    //now send the response...

    res.status(200).send({ status: "OK", data: workout })

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
    //extract the workoutId from req.params;

    const { params: { workoutId }, body } = req;

    if (!workoutId) {
        return res.status(400).send('WorkoutId required')
    }




    const updatedWorkout = updateOneWorkout(workoutId, body);

    //now send the response...

    res.send({ status: "OK", data: updatedWorkout })
}



//delete one workout...


exports.deleteOneWorkout = (req, res) => {
    const deletedWorkout = deleteOneWorkout()
}