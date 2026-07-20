// CULTIVATE PAGE

const cultivateForm = document.getElementById("cultivate-form");


if (cultivateForm) {

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



        // Create Habit Object

        const habit = {

            id: Date.now(),

            name: habitName,
            category: habitCategory,
            purpose: habitPurpose,
            completed: false

        };



        console.log(habit);



        // GET EXISTING HABITS

        let habits = JSON.parse(
            localStorage.getItem("habits")
        ) || [];



        // CHECK HABIT LIMIT

        if (habits.length >= 3) {

            const toast = document.getElementById("toast");

            toast.textContent = "Maximum 3 habits reached ⚠️";

            toast.classList.add("show");


            setTimeout(function () {

                toast.classList.remove("show");

            }, 3000);


            return;
        }



        // ADD NEW HABIT

        habits.push(habit);



        // SAVE HABITS

        localStorage.setItem(
            "habits",
            JSON.stringify(habits)
        );



        // TOAST NOTIFICATION

        const toast = document.getElementById("toast");


        toast.classList.add("show");


        setTimeout(function () {

            toast.classList.remove("show");

        }, 3000);



        // RESET FORM

        cultivateForm.reset();


    });

}