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






        // RESET FORM


        eliminateForm.reset();



    });


}