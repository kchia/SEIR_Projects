// Display start up page with Title, Image of the GGs, instructions, and button to play the game
    // Use a timed modal for the directions with an exit button

    // Establish necessary variables to allow modal to appear and disappear on demand
const openDirections = document.getElementById("directions");
const modal = document.getElementById("modal");
const closeDirections = document.getElementById("close");

// Establish functions to open and close modal
const openModal = () => {
    modal.style.display = "block";
};

const closeModal = () => {
    modal.style.display = "none";
}

// Add event listeners to buttons to run above functions
openDirections.addEventListener("click", openModal);
closeDirections.addEventListener("click", closeModal);