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
    // console.log(choice);
}

document.querySelector(".questions").addEventListener("click", (event) => {
    choice = event.target.id;
    answer();
});


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
    "buttonC",
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

// Make an event listener for each button

function answer () {
    if (choice === qArr[index].correct) {
        document.getElementById("results").innerHTML = `Great job!`
        score += 100;
    } else {
        document.getElementById("results").innerText = `Wrong! The correct answer is ${qArr[index].rightAns}.`
    }
}

// Make a variable for the Next button
let next = document.querySelector("#next");
// let currentQ = qArr[0];
// let nextQ = currentQ--;
// make sure to go back and add all images in questions.html with class of images!
// let images = document.getElementsByClassName("images");
let index = 0;

next.addEventListener("click", () => {
    choice = "";
    // currentQ = nextQ;
    index+=1
    document.getElementById("results").innerHTML = "";
    qArr[index];
    console.log(qArr[index]);
    document.getElementById("pic").src = qArr[index].currentPic;
    document.getElementById("triviaQs").innerHTML = qArr[index].question;
    document.getElementById("buttonA").innerHTML = qArr[index].choiceA;
    document.getElementById("buttonB").innerHTML = qArr[index].choiceB;
    document.getElementById("buttonC").innerHTML = qArr[index].choiceC;
    document.getElementById("buttonD").innerHTML = qArr[index].choiceD;
    // Update score and question number
    document.getElementById("score").innerHTML = score;
    document.getElementById("qNum").innerHTML = qArr[index].currentNum;
});

// Make a function to iterate through the number of questions when button is clicked.
function startQs () {
    for (let i = 0; i < qArr.length; i++){
    // event.preventDefault()
    // console.log(qArr[i]);
    function updateImage () {
    document.getElementById("pic").src = qArr[0].currentPic;
    }
    updateImage();

    document.getElementById("triviaQs").innerHTML = qArr[0].question;
    document.getElementById("buttonA").innerHTML = qArr[0].choiceA;
    document.getElementById("buttonB").innerHTML = qArr[0].choiceB;
    document.getElementById("buttonC").innerHTML = qArr[0].choiceC;
    document.getElementById("buttonD").innerHTML = qArr[0].choiceD;
    // Update score and question number
    document.getElementById("score").innerHTML = score;
    document.getElementById("qNum").innerHTML = qArr[0].currentNum;

    }
}
startQs();



    // Set up a final scoring page
        // Display user's total score
        // Display matching GG and witty comment on how they relate
        // Include two buttons
            // One button to exit the game which takes you back to the start up page
            // Another button to the questions