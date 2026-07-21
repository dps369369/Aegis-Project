// CULTIVATE PAGE

const cultivateForm = document.getElementById("cultivate-form");


if (cultivateForm) {

    cultivateForm.addEventListener("submit", async function (event) {

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



        // Habit data for backend

        const habit = {

            name: habitName,
            category: habitCategory,
            purpose: habitPurpose,
            type: "cultivate"

        };



        try {

            const response = await fetch(
                "http://localhost:369/api/habits",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(habit)

                }
            );


            const data = await response.json();



            if (response.ok) {

                console.log("Saved:", data);


                const toast = document.getElementById("toast");

                toast.textContent = "Habit cultivated successfully 🌱";

                toast.classList.add("show");


                setTimeout(function () {

                    toast.classList.remove("show");

                }, 3000);



                cultivateForm.reset();


            } else {

                alert(data.error);

            }



        } catch (error) {

            console.error("Server Error:", error);

            alert("Could not connect to Aegis server.");

        }


    });

}