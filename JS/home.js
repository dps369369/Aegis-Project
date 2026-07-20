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


    button.addEventListener("click", function () {


        const card = this.parentElement;


        currentHabitId = card.dataset.id;



        let habits = JSON.parse(
            localStorage.getItem("habits")
        ) || [];



        const habit = habits.find(function (habit) {

            return habit.id == currentHabitId;

        });



        editName.value = habit.name;

        editCategory.value = habit.category;

        editPurpose.value = habit.purpose;



        editModal.style.display = "flex";


    });


});





saveEdit.addEventListener("click", function () {


    let habits = JSON.parse(
        localStorage.getItem("habits")
    ) || [];



    habits = habits.map(function (habit) {


        if (habit.id == currentHabitId) {


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





cancelEdit.addEventListener("click", function () {


    editModal.style.display = "none";


});


// LOAD CHAINS


const chainContainer = document.getElementById("chain-container");


if (chainContainer) {


    const chains = JSON.parse(
        localStorage.getItem("chains")
    ) || [];



    const chainEmptyState = document.getElementById("chain-empty-state");



    if (chains.length === 0) {


        if (chainEmptyState) {

            chainEmptyState.style.display = "block";

        }


        chainContainer.style.display = "none";


    } else {


        if (chainEmptyState) {

            chainEmptyState.style.display = "none";

        }


        chainContainer.style.display = "grid";


    }





    chains.forEach(function (chain) {



        const card = document.createElement("div");



        card.classList.add("chain-card");



        card.dataset.id = chain.id;



        card.innerHTML = `

    <h3>
        ${chain.name}
    </h3>

    <p>
        Trigger: ${chain.trigger}
    </p>

    <p>
        Why break free: ${chain.reason}
    </p>

    <button class="break-btn">
        ${chain.broken ? "Broken 🔓" : "Break Chain"}
    </button>

    <button class="edit-chain-btn">
        Edit
    </button>

    <button class="delete-chain-btn">
        Delete
    </button>

`;





        if (chain.broken) {


            card.querySelector(".break-btn")
                .classList.add("broken");


        }





        chainContainer.appendChild(card);



    });


}







// CHAIN PROGRESS SYSTEM


const brokenCount = document.getElementById("broken-count");

const chainRating = document.getElementById("chain-rating");



function updateChainProgress() {



    const broken = document.querySelectorAll(".broken").length;



    if (brokenCount) {

        brokenCount.textContent = broken;

    }



    if (chainRating) {


        let symbols = "";



        for (let i = 1; i <= 3; i++) {


            if (i <= broken) {

                symbols += "🔓";

            } else {

                symbols += "⛓️";

            }


        }



        chainRating.textContent = symbols;


    }


}







// BREAK CHAIN SYSTEM


const breakButtons = document.querySelectorAll(".break-btn");



breakButtons.forEach(button => {



    button.addEventListener("click", function () {



        const card = this.parentElement;



        const chainId = card.dataset.id;





        let chains = JSON.parse(

            localStorage.getItem("chains")

        ) || [];





        chains = chains.map(function (chain) {



            if (chain.id == chainId) {


                chain.broken = !chain.broken;


            }



            return chain;


        });






        localStorage.setItem(

            "chains",

            JSON.stringify(chains)

        );






        this.classList.toggle("broken");





        if (this.classList.contains("broken")) {


            this.textContent = "Broken 🔓";


        } else {


            this.textContent = "Break";


        }




        updateChainProgress();



    });



});








// DELETE CHAIN SYSTEM


const deleteChainButtons = document.querySelectorAll(".delete-chain-btn");



deleteChainButtons.forEach(button => {



    button.addEventListener("click", function () {



        const card = this.parentElement;



        const chainId = card.dataset.id;





        let chains = JSON.parse(

            localStorage.getItem("chains")

        ) || [];





        chains = chains.filter(function (chain) {



            return chain.id != chainId;



        });





        localStorage.setItem(

            "chains",

            JSON.stringify(chains)

        );





        card.remove();



        updateChainProgress();



    });



});






// INITIAL UPDATE


updateChainProgress();




// EDIT CHAIN SYSTEM


const editChainButtons = document.querySelectorAll(".edit-chain-btn");


const editChainModal = document.getElementById("edit-chain-modal");


const editChainName = document.getElementById("edit-chain-name");

const editChainTrigger = document.getElementById("edit-chain-trigger");

const editChainReason = document.getElementById("edit-chain-reason");


const saveChainEdit = document.getElementById("save-chain-edit");


const cancelChainEdit = document.getElementById("cancel-chain-edit");



let currentChainId = null;





editChainButtons.forEach(button => {



    button.addEventListener("click", function () {



        const card = this.parentElement;



        currentChainId = card.dataset.id;





        let chains = JSON.parse(

            localStorage.getItem("chains")

        ) || [];





        const chain = chains.find(function (chain) {


            return chain.id == currentChainId;


        });





        editChainName.value = chain.name;


        editChainTrigger.value = chain.trigger;


        editChainReason.value = chain.reason;





        editChainModal.style.display = "flex";



    });



});








if (saveChainEdit) {



    saveChainEdit.addEventListener("click", function () {



        let chains = JSON.parse(

            localStorage.getItem("chains")

        ) || [];





        chains = chains.map(function (chain) {



            if (chain.id == currentChainId) {



                chain.name = editChainName.value;


                chain.trigger = editChainTrigger.value;


                chain.reason = editChainReason.value;



            }



            return chain;



        });





        localStorage.setItem(

            "chains",

            JSON.stringify(chains)

        );





        location.reload();



    });


}








if (cancelChainEdit) {



    cancelChainEdit.addEventListener("click", function () {



        editChainModal.style.display = "none";



    });


}