const { getAllWorkouts, createNewWorkout, getOneWorkout, updateOneWorkout, deleteOneWorkout } = require('../controllers/WorkoutController');

const router = require('express').Router();



//routes for workouts....


router.route('/').get(getAllWorkouts).post(createNewWorkout);


router.route('/:workoutId').get(getOneWorkout).patch(updateOneWorkout).delete(deleteOneWorkout)










module.exports = router;