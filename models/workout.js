const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    day: {
        type: Date,
        unique: true,
        default: new Date(new Date().setDate(new Date().getDate())),
    },
    exercises: [
        {
            type: {
                type: String 
            },
            name: {
                type: String 
            },
            duration: { 
                type: Number 
            },
            weight: { 
                type: Number 
            },
            reps: { 
                type: Number 
            },
            sets: { 
                type: Number 
            },
            distance: {
                type: Number 
            },
        }
    ]
});

const Workout = model("Workout", workoutSchema);
module.exports = Workout;
