// WITNESS SYSTEM 👁


// GET ELEMENTS

const habitCount = document.getElementById("habit-count");

const completedHabits = document.getElementById("completed-habits");

const growthRating = document.getElementById("growth-rating");


const chainCount = document.getElementById("chain-count");

const brokenChains = document.getElementById("broken-chains");

const freedomRating = document.getElementById("freedom-rating");




// LOAD DATA

const habits = JSON.parse(
    localStorage.getItem("habits")
) || [];


const chains = JSON.parse(
    localStorage.getItem("chains")
) || [];





// CULTIVATE ANALYSIS 🌱


function witnessHabits() {


    const totalHabits = habits.length;


    const completed = habits.filter(function (habit) {


        return habit.completed === true;


    }).length;



    if (habitCount) {

        habitCount.textContent = totalHabits;

    }



    if (completedHabits) {

        completedHabits.textContent = completed;

    }




    // Growth Rating

    let stars = "";



    for (let i = 1; i <= 3; i++) {


        if (i <= completed) {

            stars += "⭐";

        } else {

            stars += "☆";

        }


    }



    if (growthRating) {

        growthRating.textContent = stars;

    }



}





// ELIMINATE ANALYSIS ⛓️‍💥


function witnessChains() {


    const totalChains = chains.length;



    const broken = chains.filter(function (chain) {


        return chain.broken === true;


    }).length;




    if (chainCount) {

        chainCount.textContent = totalChains;

    }




    if (brokenChains) {

        brokenChains.textContent = broken;

    }




    // Freedom Rating


    let symbols = "";



    for (let i = 1; i <= 3; i++) {


        if (i <= broken) {

            symbols += "🔓";

        } else {

            symbols += "⛓️";

        }


    }




    if (freedomRating) {

        freedomRating.textContent = symbols;

    }



}





// RUN WITNESS


witnessHabits();

witnessChains();