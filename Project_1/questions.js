// Set up question pages
    // Include a space for the score
    // Keep track of which question they're on
    // Allow the page to refresh when user chooses
 
// Create a variable for the user's score
let score = 0;
let choice ;
// Create variable to store user's choice.
// Add an event listener to store the value of the choice variable when clicked
// Use Event Bubbling 

// google how to get value button html
function selectAns(event) {
    console.log(event.target.id);
    // Look at the event target, need to use getElementByID
    choice = event.target.id;
    // return choice; 
}

document.querySelector(".questions").addEventListener("click", selectAns);

class Questions {
    constructor (currentPic, currentNum, question, choiceA, choiceB, choiceC, choiceD, correct) {
        this.currentPic = currentPic;
        this.currentNum = currentNum;
        this.question = question;
        this.choiceA = choiceA;
        this.choiceB = choiceB;
        this.choiceC = choiceC;
        this.choiceD = choiceD;
        this.correct = correct;
    }   
    answer (choice) {
        if (choice === this.correct) {
            document.getElementById("results").innerHTML = `Great job!`
            score += 100;
        } else {
            document.getElementById("results").innerText = `Wrong! The correct answer is ${this.correct}.`
        }
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
    "buttonB"),

new Questions (
    "./images/GG_2.jpg",
    "2",
    "Why did Sophia have to leave Shady Pines?", 
    "She violated the terms", 
    "It burned down", 
    "Her roommate died", 
    "The facility was shut down", 
    "buttonC")
]

console.log(qArr[0]);

// Make a function to iterate through the number of questions when button is clicked.

// function advanceQs (event) {
//     for (let i = 0; i < qArr.length; i++){
//     event.preventDefault()
//     function updateImage () {
//     document.getElementById("pic").src = qArr[i].currentPic;
//     }
//     updateImage();

//     document.getElementById("triviaQs").innerHTML = qArr[i].question;
//     document.getElementById("buttonA").innerHTML = qArr[i].choiceA;
//     document.getElementById("buttonB").innerHTML = qArr[i].choiceB;
//     document.getElementById("buttonC").innerHTML = qArr[i].choiceC;
//     document.getElementById("buttonD").innerHTML = qArr[i].choiceD;
//     }
// }

// console.log(qArr);

// // Update score and question number
// document.getElementById("score").innerHTML = score;
// document.getElementById("qNum").innerHTML = qArr[i].currentNum;

    // Set up a final scoring page
        // Display user's total score
        // Display matching GG and witty comment on how they relate
        // Include two buttons
            // One button to exit the game which takes you back to the start up page
            // Another button to the questions