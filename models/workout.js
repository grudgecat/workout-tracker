const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    day: {
        type: Date,
        unique: true,
        default: new Date(new Date().setDate(new Date().getDate())),
    },
    exercises: [
        {
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number,
        }
    ]
})

const Workout = model("Workout", workoutSchema);

module.exports = Workout;