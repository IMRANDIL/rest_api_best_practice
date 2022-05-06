const router = require('express').Router();



//routes for workouts....


router.route('/').get().post();


router.route('/:id').get().patch().delete()










module.exports = router;