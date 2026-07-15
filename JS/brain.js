const completeButtons = document.querySelectorAll(".complete-btn");

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

updateProgress();