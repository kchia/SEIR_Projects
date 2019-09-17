// Set up question pages
    // Include a space for the score
    // Keep track of which question they're on
    // Allow the page to refresh when user chooses
 
// Create a variable for the user's score
let score = 0;
let choice;
// Create variable to store user's choice.
// Add an event listener to store the value of the choice variable when clicked
// Use Event Bubbling 

// google how to get value button html
function selectAns(event) {
    // console.log(event.target.id);
    // Look at the event target, need to use getElementByID
    choice = event.target.id;
    console.log(choice);
}

document.querySelector(".questions").addEventListener("click", selectAns);

// function clearAns () {
//     const userAns = document.querySelector(".questions");
//     let child = userAns.firstElementChild;
//     while (child) {
//         userAns.removeChild(child);
//         child = userAns.firstElementChild;
//     }
// }

class Questions {
    constructor (currentPic, currentNum, question, choiceA, choiceB, choiceC, choiceD, correct, rightAns) {
        this.currentPic = currentPic;
        this.currentNum = currentNum;
        this.question = question;
        this.choiceA = choiceA;
        this.choiceB = choiceB;
        this.choiceC = choiceC;
        this.choiceD = choiceD;
        this.correct = correct;
        this.rightAns = rightAns;
    }   
}

// Make a variable for the number of questions/class instances
const qArr = [
new Questions (
    "./images/GG_1.webp",
    "1",
    "What is the name of the retirement home where Sophia stayed?", 
    "Shady Business", 
    "Shaded Pines", 
    "Shady Pines", 
    "Shady Palms", 
    "buttonB",
    "Shady Pines"),

new Questions (
    "./images/GG_2.jpg",
    "2",
    "Why did Sophia have to leave Shady Pines?", 
    "She violated the terms", 
    "It burned down", 
    "Her roommate died", 
    "The facility was shut down", 
    "buttonB",
    "It burned down")
]

// Create a variable so that you can make the Next link appear when needed.
let next = document.getElementById("next");

function answer (choice) {
    if (choice === this.correct) {
        // Tell them they got it right
        document.getElementById("results").innerHTML = `Great job!`
        // Increment score by 100 points
        score += 100;
        // Update score and question number
        document.getElementById("score").innerHTML = score;
        // Allow user to advance to the next question using the Next link
        next.getElementsByClassName.display = "block";
        // Clear previous choice
        choice = "";
    } else {
        // Tell them they're wrong and display correct answer
        document.getElementById("results").innerText = `Wrong! The correct answer is ${this.correct}.`
        // Allow user to advance to the next question using the Next link
        next.getElementsByClassName.display = "block";
        // Clear previous choice
    }
}

let currentQ = qArr[0];
console.log(currentQ);

// Revist this logic on displaying the images.
function updateImage () {
    document.getElementById("pic").src = currentQ.currentPic;
    }
updateImage();

function getQ () {
    // Update current q number and question
    document.getElementById("qNum").innerHTML = currentQ.currentNum;
    document.getElementById("triviaQs").innerHTML = currentQ.question;
    document.getElementById("buttonA").innerHTML = currentQ.choiceA;
    document.getElementById("buttonB").innerHTML = currentQ.choiceB;
    document.getElementById("buttonC").innerHTML = currentQ.choiceC;
    document.getElementById("buttonD").innerHTML = currentQ.choiceD;

    answer();
}

getQ();

console.log(choice);


    // Set up a final scoring page
        // Display user's total score
        // Display matching GG and witty comment on how they relate
        // Include two buttons
            // One button to exit the game which takes you back to the start up page
            // Another button to the questions