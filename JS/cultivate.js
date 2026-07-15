// CULTIVATE PAGE

const cultivateForm = document.getElementById("cultivate-form");


cultivateForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const habitName = document
        .getElementById("habit-name")
        .value
        .trim();

    const habitCategory = document
        .getElementById("habit-category")
        .value
        .trim();

    const habitPurpose = document
        .getElementById("habit-purpose")
        .value
        .trim();


    // Validation
    if (
        habitName === "" ||
        habitCategory === "" ||
        habitPurpose === ""
    ) {

        alert("Please complete all fields.");

        return;
    }


    // Habit Object
    const habit = {

        name: habitName,
        category: habitCategory,
        purpose: habitPurpose,
        completed: false

    };


    console.log(habit);

    const toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 3000);


    cultivateForm.reset();

});