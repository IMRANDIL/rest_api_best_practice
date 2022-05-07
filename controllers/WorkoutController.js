


//now create controller for all the routes....

const { getAllWorkouts, getOneWorkout, createNewWorkout, updateOneWorkout, deleteOneWorkout } = require("../services/workoutService")



//get all workouts...

exports.getAllWorkouts = (req, res) => {
    try {
        const AllWorkouts = getAllWorkouts();
        res.status(200).send({ status: "OK", data: AllWorkouts });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } })
    }


}




//get one workout....


exports.getOneWorkout = (req, res) => {

    //extract workoutId from the req.params;

    const { workoutId } = req.params;

    if (!workoutId) {
        return res.status(400).send({ status: "FAILED", data: { error: 'Parameter ":workoutId" can not be empty' } })
    }

    try {
        const workout = getOneWorkout(workoutId);
        //now send the response...

        res.status(200).send({ status: "OK", data: workout })
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } })
    }



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

    try {
        const createWorkout = createNewWorkout(newWorkout);

        //now send the response...

        res.status(201).send({ status: "OK", data: createWorkout })
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } })
    }



}


//update workout....


exports.updateOneWorkout = (req, res) => {
    //extract the workoutId from req.params;

    const { params: { workoutId }, body } = req;

    if (!workoutId) {
        return res.status(400).send({ status: "FAILED", data: { error: "Parameter ':workoutId' can not be empty" } })
    }



    try {
        const updatedWorkout = updateOneWorkout(workoutId, body);

        //now send the response...

        res.send({ status: "OK", data: updatedWorkout })
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } })
    }



}



//delete one workout...


exports.deleteOneWorkout = (req, res) => {
    //extrct the workoutId from req.params;

    const { workoutId } = req.params;

    if (!workoutId) {
        return res.status(400).send({ status: "FAILED", data: { error: "Parameter ':workoutId' can not be empty" } })
    }


    try {
        const deletedWorkout = deleteOneWorkout(workoutId);

        //now send the response...

        res.status(204).send({ status: "OK" })
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } })
    }

}