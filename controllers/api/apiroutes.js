const router = require('express').Router();
const { Workout } = require('../../models');

// get workouts, filtered to last workout by client side. localhost:3000/api/workouts
router.get('/', async (req, res) => {
    try {
        const workoutData = await Workout.aggregate([
            {
                $addFields: { totalDuration: { $sum: "$exercises.duration" } }
            }]);
        res.json(workoutData);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
});

//update workout with exercises, /api/workouts/:id
router.put('/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        console.log('put workout id called');
        console.log(req.body);

        const workoutData = await Workout.findOneAndUpdate({ _id: req.params.id }, {
            $push: { exercises: req.body }
        });
        res.json(workoutData);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
});

//add new empty workout, /api/workouts
router.post('/', async (req, res) => {
    try {
        // console.log('post workout id called'); 
        workoutData = await Workout.create(req.body);
        res.json(workoutData);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
});

//get last 7 workouts, /api/workouts/range
router.get('/range', async (req, res) => {
    try {
        let workoutData = await Workout.aggregate([
            {
                $addFields: { totalDuration: { $sum: "$exercises.duration" } }
            }]);

        if (workoutData.length < 8) {
            res.json(workoutData);
            console.log('less than 8');
        }
        else {
            const lastSeven = workoutData.splice(-7);
            console.log('more than 7');
            res.json(lastSeven);
        }
    }
    catch (err) {
        res.status(500).json(error.message);
    }
});

module.exports = router;