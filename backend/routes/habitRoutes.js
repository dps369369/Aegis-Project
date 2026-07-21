const express = require("express");
const router = express.Router();

const Habit = require("../models/Habit");


// CREATE HABIT
router.post("/", async (req, res) => {

    try {

        const habit = await Habit.create(req.body);

        res.status(201).json({
            message: "Habit created",
            habit
        });

    } catch (error) {

        res.status(400).json({
            error: error.message
        });

    }

});


// GET ALL HABITS
router.get("/", async (req, res) => {

    try {

        const habits = await Habit.find();

        res.json(habits);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

// DELETE HABIT
router.delete("/:id", async (req, res) => {

    try {

        const habit = await Habit.findByIdAndDelete(req.params.id);

        if (!habit) {

            return res.status(404).json({
                error: "Habit not found"
            });

        }


        res.json({
            message: "Habit deleted",
            habit
        });


    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});


module.exports = router;



