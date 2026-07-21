const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema(
    {

        name: {
            type: String,
            required: true,
            trim: true
        },


        category: {
            type: String,
            required: true,
            trim: true
        },


        purpose: {
            type: String,
            required: true,
            trim: true
        },


        type: {
            type: String,
            enum: ["cultivate", "eliminate"],
            required: true
        },


        status: {
            type: String,
            enum: ["active", "completed", "paused"],
            default: "active"
        },


        streak: {
            type: Number,
            default: 0,
            min: 0
        },


        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5
        }


    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model("Habit", habitSchema);