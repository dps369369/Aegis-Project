// SETTINGS SYSTEM ⚙️


// EXPORT DATA

const exportButton = document.getElementById("export-data");


if (exportButton) {


    exportButton.addEventListener("click", function () {


        const aegisData = {


            habits: JSON.parse(
                localStorage.getItem("habits")
            ) || [],


            chains: JSON.parse(
                localStorage.getItem("chains")
            ) || []


        };



        const dataString = JSON.stringify(
            aegisData,
            null,
            2
        );



        const blob = new Blob(
            [dataString],
            { type: "application/json" }
        );



        const url = URL.createObjectURL(blob);



        const link = document.createElement("a");


        link.href = url;


        link.download = "aegis-backup.json";


        link.click();



        URL.revokeObjectURL(url);



    });


}





// IMPORT DATA


const importButton = document.getElementById("import-data");

const importFile = document.getElementById("import-file");



if (importButton) {


    importButton.addEventListener("click", function () {


        importFile.click();


    });


}





if (importFile) {


    importFile.addEventListener("change", function (event) {


        const file = event.target.files[0];



        if (!file) return;



        const reader = new FileReader();



        reader.onload = function () {


            const data = JSON.parse(
                reader.result
            );



            if (data.habits) {


                localStorage.setItem(
                    "habits",
                    JSON.stringify(data.habits)
                );


            }



            if (data.chains) {


                localStorage.setItem(
                    "chains",
                    JSON.stringify(data.chains)
                );


            }



            alert("Aegis data restored successfully.");



            location.reload();


        };



        reader.readAsText(file);



    });


}





// RESET DATA


const resetButton = document.getElementById("reset-data");



if (resetButton) {


    resetButton.addEventListener("click", function () {



        const confirmReset = confirm(
            "Are you sure you want to erase all Aegis progress?"
        );



        if (confirmReset) {


            localStorage.removeItem("habits");


            localStorage.removeItem("chains");



            alert("Aegis has been reset.");



            location.reload();


        }



    });


}