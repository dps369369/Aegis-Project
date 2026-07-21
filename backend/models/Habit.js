const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    purpose: {
        type: String,
        required: true
    },

    type: {
        type: String,
        enum: ["cultivate", "eliminate"],
        required: true
    },

    status: {
        type: String,
        default: "active"
    },

    streak: {
        type: Number,
        default: 0
    },

    rating: {
        type: Number,
        default: 0
    }

}, {
    timestamps: true
});


module.exports = mongoose.model("Habit", habitSchema);