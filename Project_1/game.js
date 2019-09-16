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


// Set up question pages
    // Include a space for the score
    // Keep track of which question they're on

// Set up a scoring page
    // Display user's total score
    // Display matching GG and witty comment on how they relate
    // Include two buttons
        // One button to exit the game which takes you back to the start up page
        // Another button to the questions