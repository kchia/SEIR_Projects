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
    "that it burned down"),

new Questions (
    "./images/GG_3.jpg",
    "3",
    "What tastes great if you eat it while holding your nose?", 
    "Herring Krispies", 
    "Herring Chunkies", 
    "Herring Tarts", 
    "Herring Crisps", 
    "buttonA",
    "Herring Krispies"),

new Questions (
    "./images/GG_2.jpg",
    "4",
    "Complete this lyric: Miami, Miami, you’ve got style…", 
    "...You’re cuter than an intrauterine.", 
    "...So I'll say it thrice.", 
    "...Palm trees, sunshine, great sand by the mile.", 
    "...Blue skies, sunshine, white sand by the mile.", 
    "buttonD",
    "...Blue skies, sunshine, white sand by the mile"),
    
new Questions (
    "./images/GG_2.jpg",
    "5",
    "Finish this quote: “There are two things in this world a Sicilian knows. When pasta sticks to a wall, it’s done…", 
    "...When a body sticks to cement, it's dead.", 
    "...When a body sticks to the ground, it's dead", 
    "...When a body sticks to its clothes, it's dead.", 
    "...When a body sticks to the tennis court, it's dead.", 
    "buttonA",
    "...When a body sticks to cement, it's dead"),

new Questions (
    "./images/GG_3.jpg",
    "6",
    "What curse did Sophia put on her late husband's best friend, Max?", 
    "That he tripped over his shoes every morning", 
    "That his socks would forever fall down.", 
    "That all his wives would cheat on his", 
    "That his ears would never pop on an airplane", 
    "buttonB",
    "that his socks would forever fall down"),

new Questions (
    "./images/GG_3.jpg",
    "7",
    "What profession did Sophia's brother/Dorothy's uncle Angelo falsely claim?", 
    "Vacuum Salesman", 
    "Entrepreneur", 
    "Lawyer", 
    "Priest", 
    "buttonD",
    "priest"),

new Questions (
    "./images/GG_3.jpg",
    "8",
    "How did Rose's late husband Charlie die?", 
    "Of old age", 
    "In a car accident", 
    "Of a heart attack during an act of intimacy", 
    "While serving the country", 
    "buttonC",
    "a heart attack during an act of intimacy"),

new Questions (
    "./images/GG_3.jpg",
    "9",
    "What nickname did Sophia’s late husband tell her to call Dorothy that only he would know?", 
    "Moose", 
    "Spumoni Face", 
    "Tortellini", 
    "Spaghetti Face", 
    "buttonB",
    "Spumoni Face"),

new Questions (
    "./images/GG_3.jpg",
    "10",
    "Actor Harold Gould played Rose's boyfriend twice! What were their names?", 
    "Arnie/Miles", 
    "Arnold/Milton", 
    "Arnie/Milton", 
    "Arnold/Miles", 
    "buttonA",
    "Arnie/Miles"),

new Questions (
    "./images/GG_3.jpg",
    "11",
    "What type of prize animal did Rose's Uncle Higgeblotter leave her upon his death?", 
    "Horse", 
    "Goat", 
    "Sheep", 
    "Pig", 
    "buttonD",
    "that Baby was a pig"),

new Questions (
    "./images/GG_3.jpg",
    "12",
    "Who played the officer who got shot during an undercover sting in which the Girls helped?", 
    "Burt Reynolds", 
    "George Clooney", 
    "Mario Lopez", 
    "Leslie Nielsen", 
    "buttonB",
    "George Clooney"),

new Questions (
    "./images/GG_3.jpg",
    "13",
    "What item does Dorothy find under her bed that th housekeeper Marguerite says is to help her get restful sleep?", 
    "A painted rock", 
    "A scented candle", 
    "A sack of relics", 
    "A painted figurine", 
    "buttonA",
    "Sophia's painted rock"),

new Questions (
    "./images/GG_3.jpg",
    "14",
    "What body part of Rose's prized teddy bear doe Sunshine Cadet Daisy send back as a threat?", 
    "Nose", 
    "Foot", 
    "Ear", 
    "Hand", 
    "buttonC",
    "an ear"),

new Questions (
    "./images/GG_3.jpg",
    "15",
    "Name the actresses from youngest to oldest in real life, using their characters' names:", 
    "Sophia, Dorothy, Blanche, Rose",
    "Blanche, Sophia, Dorothy, Rose",
    "Dorothy, Blanche, Sophia, Rose",
    "Rose, Dorothy, Sophia, Blanche", 
    "buttonB",
    "Blanche, Sophia, Dorothy, then Rose"),
]

// Make an event listener for each button

function answer () {
    if (choice === qArr[index].correct) {
        score += 100;
        document.getElementById("results").innerHTML = `Great job!`
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