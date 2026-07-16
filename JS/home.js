// HOME PAGE


// LOAD HABITS

const habitContainer = document.getElementById("habit-container");


if (habitContainer) {

    const habits = JSON.parse(
        localStorage.getItem("habits")
    ) || [];

    const emptyState = document.getElementById("empty-state");

    if (habits.length === 0) {

        emptyState.style.display = "block";

        habitContainer.style.display = "none";

    } else {

        emptyState.style.display = "none";

        habitContainer.style.display = "grid";

    }




    habits.forEach(function (habit) {


        const card = document.createElement("div");


        card.classList.add("habit-card");


        card.dataset.id = habit.id;



        card.innerHTML = `

            <h3>${habit.name}</h3>

            <p>Category: ${habit.category}</p>

            <p>Why this matters: ${habit.purpose}</p>


            <button class="complete-btn">
                ${habit.completed ? "Completed ✅" : "Complete"}
            </button>

            <button class="edit-btn">
                Edit
            </button>
            
            


            <button class="delete-btn">
                Delete
            </button>

        `;



        // Restore completed style

        if (habit.completed) {

            card.querySelector(".complete-btn")
                .classList.add("completed");

        }



        habitContainer.appendChild(card);


    });

}





// PROGRESS SYSTEM


const completedCount = document.getElementById("completed-count");

const starRating = document.getElementById("star-rating");



function updateProgress() {


    const completed = document.querySelectorAll(".completed").length;



    if (completedCount) {

        completedCount.textContent = completed;

    }



    if (starRating) {


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


}





// COMPLETE BUTTON SYSTEM


const completeButtons = document.querySelectorAll(".complete-btn");



completeButtons.forEach(button => {


    button.addEventListener("click", function () {


        const card = this.parentElement;


        const habitId = card.dataset.id;



        let habits = JSON.parse(
            localStorage.getItem("habits")
        ) || [];



        habits = habits.map(function (habit) {


            if (habit.id == habitId) {

                habit.completed = !habit.completed;

            }


            return habit;


        });



        localStorage.setItem(
            "habits",
            JSON.stringify(habits)
        );



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


        updateProgress();


    });


});


// EDIT HABIT SYSTEM


const editButtons = document.querySelectorAll(".edit-btn");


const editModal = document.getElementById("edit-modal");

const editName = document.getElementById("edit-name");

const editCategory = document.getElementById("edit-category");

const editPurpose = document.getElementById("edit-purpose");

const saveEdit = document.getElementById("save-edit");

const cancelEdit = document.getElementById("cancel-edit");


let currentHabitId = null;



editButtons.forEach(button => {


    button.addEventListener("click", function(){


        const card = this.parentElement;


        currentHabitId = card.dataset.id;



        let habits = JSON.parse(
            localStorage.getItem("habits")
        ) || [];



        const habit = habits.find(function(habit){

            return habit.id == currentHabitId;

        });



        editName.value = habit.name;

        editCategory.value = habit.category;

        editPurpose.value = habit.purpose;



        editModal.style.display = "flex";


    });


});





saveEdit.addEventListener("click", function(){


    let habits = JSON.parse(
        localStorage.getItem("habits")
    ) || [];



    habits = habits.map(function(habit){


        if(habit.id == currentHabitId){


            habit.name = editName.value;

            habit.category = editCategory.value;

            habit.purpose = editPurpose.value;


        }


        return habit;


    });



    localStorage.setItem(
        "habits",
        JSON.stringify(habits)
    );



    location.reload();


});





cancelEdit.addEventListener("click", function(){


    editModal.style.display = "none";


});