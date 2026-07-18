// ELIMINATE PAGE


const eliminateForm = document.getElementById("eliminate-form");


if (eliminateForm) {


    eliminateForm.addEventListener("submit", function (event) {


        event.preventDefault();



        const chainName = document
            .getElementById("chain-name")
            .value
            .trim();



        const chainTrigger = document
            .getElementById("chain-trigger")
            .value
            .trim();



        const chainReason = document
            .getElementById("chain-reason")
            .value
            .trim();




        // Validation


        if (
            chainName === "" ||
            chainTrigger === "" ||
            chainReason === ""
        ) {


            alert("Please complete all fields.");


            return;

        }





        // Create Chain Object


        const chain = {


            id: Date.now(),


            name: chainName,

            trigger: chainTrigger,

            reason: chainReason,


            broken: false


        };



        console.log(chain);





        // GET EXISTING CHAINS


        let chains = JSON.parse(

            localStorage.getItem("chains")

        ) || [];






        // CHECK CHAIN LIMIT


        if (chains.length >= 3) {


            const toast = document.getElementById("toast");


            toast.textContent = "Maximum 3 chains reached ⛓️";


            toast.classList.add("show");



            setTimeout(function () {


                toast.classList.remove("show");


            }, 3000);



            return;


        }







        // ADD NEW CHAIN


        chains.push(chain);







        // SAVE CHAINS


        localStorage.setItem(

            "chains",

            JSON.stringify(chains)

        );








        // TOAST NOTIFICATION


        const toast = document.getElementById("toast");



        toast.textContent = "Chain identified ⛓️‍💥";



        toast.classList.add("show");




        setTimeout(function () {


            toast.classList.remove("show");


        }, 3000);






        // RESET FORM


        eliminateForm.reset();



    });


}