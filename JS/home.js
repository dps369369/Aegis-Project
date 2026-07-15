// HOME PAGE


// LOAD HABITS

const habitContainer = document.getElementById("habit-container");


if (habitContainer) {

    const habits = JSON.parse(
        localStorage.getItem("habits")
    ) || [];


    habits.forEach(function (habit) {


        const card = document.createElement("div");

        card.classList.add("habit-card");

        card.dataset.id = habit.id;


        card.innerHTML = `

    <h3>${habit.name}</h3>

    <p>Category: ${habit.category}</p>

    <p>${habit.purpose}</p>

    <button class="complete-btn">
        Complete
    </button>

    <button class="delete-btn">
        Delete
    </button>

`;



        habitContainer.appendChild(card);


    });

}




// PROGRESS SYSTEM


const completedCount = document.getElementById("completed-count");

const starRating = document.getElementById("star-rating");



function updateProgress() {


    const completed = document.querySelectorAll(".completed").length;



    completedCount.textContent = completed;



    let stars = "";



    for (let i = 1; i <= 3; i++) {


        if (i <= completed) {

            stars += "⭐";

        } else {

            stars += "☆";

        }

    }



    starRating.textContent = stars;


}




// COMPLETE BUTTON SYSTEM


const completeButtons = document.querySelectorAll(".complete-btn");



completeButtons.forEach(button => {


    button.addEventListener("click", function () {



        this.classList.toggle("completed");



        if (this.classList.contains("completed")) {


            this.textContent = "Completed ✅";


        } else {


            this.textContent = "Complete";


        }



        updateProgress();



    });


});




// INITIAL UPDATE

updateProgress();


// DELETE HABIT SYSTEM

const deleteButtons = document.querySelectorAll(".delete-btn");


deleteButtons.forEach(button => {

    button.addEventListener("click", function () {


        const card = this.parentElement;

        const habitId = card.dataset.id;



        let habits = JSON.parse(
            localStorage.getItem("habits")
        ) || [];



        habits = habits.filter(function (habit) {

            return habit.id != habitId;

        });



        localStorage.setItem(
            "habits",
            JSON.stringify(habits)
        );



        card.remove();


    });

});