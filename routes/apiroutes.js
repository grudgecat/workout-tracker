const router = require('express').Router();

const {Workout} = require('../models')

router.get('/api/workouts',async (req, res) => {
    const workoutData = await Workout.aggregate([
        {
        $addFields: {totalDuration: { $sum: "$exercises.duration"}}
    }])
    console.log('get workouts called')

    res.json(workoutData);
});

router.put('api/workouts/:id', (req, res) => {
    console.log('put workout id called')
});

router.post('api/workouts', (req, res) => {
    console.log('post workout id called')
});

router.get('/api/workouts/range', (req, res) => {
    console.log('get workouts in a 7 day range called')
});

module.exports = router;