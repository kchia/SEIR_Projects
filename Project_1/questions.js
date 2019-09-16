// Set up question pages
    // Include a space for the score
    // Keep track of which question they're on
    // Allow the page to refresh when user chooses
 
//  Create variable to store user's choice.
// let userResponse = 

class Questions {
    constructor (currentPic, question, choiceA, choiceB, choiceC, choiceD, correct) {
        this.currentPic = currentPic;
        this.question = question;
        this.choiceA = choiceA;
        this.choiceB = choiceB;
        this.choiceC = choiceC;
        this.choiceD = choiceD;
        this.correct = correct;
    }   
//  answer () => {
//     if 
}

const qOne = new Questions (
    "./images/GG_1.webp",
    "What is the name of the retirement home where Sophia stayed?", 
    "Shady Business", 
    "Shaded Pines", 
    "Shady Pines", 
    "Shady Palms", 
    "Shady Pines")

const qTwo = new Questions (
    "./images/GG_2.jpg",
    "Why did Sophia have to leave Shady Pines?", 
    "She violated the terms", 
    "It burned down", 
    "Her roommate died", 
    "The facility was shut down", 
    "It burned down")

// console.log(qOne)
// Make a variable for the number of questions/class instances

// Make a function to iterate through the number of questions
function advanceQs () {
    for (let i = 1; i < )
    function updateImage () {
    document.getElementById("pic").src = qTwo.currentPic;
}
    updateImage();
    document.getElementById("triviaQs").innerHTML = qTwo.question;
    document.getElementById("buttonA").innerHTML = qTwo.choiceA;
    document.getElementById("buttonB").innerHTML = qTwo.choiceB;
    document.getElementById("buttonC").innerHTML = qTwo.choiceC;
    document.getElementById("buttonD").innerHTML = qTwo.choiceD;
}

    // Set up a final scoring page
        // Display user's total score
        // Display matching GG and witty comment on how they relate
        // Include two buttons
            // One button to exit the game which takes you back to the start up page
            // Another button to the questions