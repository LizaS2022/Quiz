//once the start button is clicked, the header is empty and only the first question with the options appear on the screen//

var startButtonEl = document.getElementById("start-button");
var containerEl = document.getElementById("container-page1");
var titleEl = document.getElementById("header-title");
var qaEl = document.getElementById("question-answer-container");
let questionEl = document.getElementById("question");
var timerContainerEl = document.getElementById("timer-container");
var formEl = document.getElementById("input-container");
var timeEl = document.querySelector(".time");
var commentResultEl = document.getElementById("result-comment");
var resultPEl = document.getElementById("text-result");

var initialsEl = document.getElementById("msg");
var submitEl = document.getElementById("submit");

var tableEl = document.getElementById("highscores-container");
var orderedListScores = document.getElementById("table-scores");

// questions section//
// Building an array of objects wjere each object represents a question
// with 4 possible answers button and an answer.
var questionArray = [
    {
        question: "How many colors in the rainbow?",
        choices: ["One","Seven","Six","Eight"],
        answer: "Seven",
    },

    {
        question: "what is the color of the sky?",
        choices: ["white","black","yellow","blue"],
        answer: "blue",
    },

    {
        question: "What is the color of a strawberry?",
        choices: ["white", "yellow","red","green"],
        answer: "red",
    },

    {
        question: "What is the color of a frog?",
        choices: ["white","yellow","green","red"],
        answer: "green",

    },

    {
        question: "What is the color of a giraffe?",
        choices: ["yellow","purple","red","green"],
        answer: "yellow",
    }
]

var index = 0;
var secondsLeft = 60;

initButtonsClicks()

//description: initlizes the buttons event listenrs for option1,2,3,4 such that each click check the answer,reduce timer if wrong and goes to next question 
//input: no input
//output: void
function initButtonsClicks(){
    for (var i = 1; i < 5; i++) {
        let answerEl = document.getElementById("option" + (i));
        answerEl.addEventListener("click", function(event){
        checkAnswer(event);
        index++;
        if (index === questionArray.length){
            commentResultEl.setAttribute("style", "display:none;");
            formEl.setAttribute("style", "display: block;");
            qaEl.setAttribute("style", "display: none;");
            finalScore();
        }else {
            qaGenerator();}
         });
        }
}

// description: sets timer to 60 seconds and subtracts each time a second, if no time left the timer stops and the time is set to zero. 
// the timer doesn't go below zero.
// input: no input.
// output: no output.
function timer(){
    var timeIntervael = setInterval(function() {
    secondsLeft--;
    if (index < questionArray.length){
        timeEl.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timeIntervael);
            timeEl.textContent = 0;
            }
    }else{
        clearInterval(timeIntervael);
    }},1000);
}


startButtonEl.addEventListener("click", function(){
    qaGenerator();
    timer();
    qaEl.setAttribute("style", "display:block");
    containerEl.setAttribute("style", "display:none");
});



function qaGenerator() {
    if (index < questionArray.length){
        questionEl.textContent = questionArray[index].question;
        for (let i = 0; i < 4; i++) {
            let answerEl = document.getElementById("option" + (i+1));
            answerEl.textContent = questionArray[index].choices[i];
        }
    }
}


function checkAnswer(event){
    if (index<questionArray.length && event !== null) {
        if (event.target.innerText === questionArray[index].answer) {
            commentResultEl.innerText = "Correct answer"; 
        }else{
            commentResultEl.innerText = "Wrong answer";
            secondsLeft-=15;
        }    
    }
 }




function finalScore() {
    var finalScore = timeEl.textContent;
    timeEl.setAttribute("style", "display:none");
    resultPEl.textContent = " your score is " + finalScore;
    highScores(finalScore);
}


// when the user clicks submit, the input will be saved in the local storage 

function highScores(score) {
            submitEl.addEventListener("click", function(event){
                event.preventDefault();
                var initial = initialsEl.value.trim();
               localStorage.setItem(initial, score);
               showtableScores(initial);
               });
}

function showtableScores(initial){
    formEl.setAttribute("style", "display: none;");
    tableEl.setAttribute("style", "display:block;");
    var getScore = JSON.parse(localStorage.getItem(initial));
    var scoreItem = document.createElement("li");
    scoreItem.textContent = getScore.toString();
    orderedListScores.appendChild(scoreItem);
}


// redo quiz
var redoQuiz = document.getElementById("redo-quiz");
redoQuiz.addEventListener("click", function(){
    index = 0;
    secondsLeft = 60;
    orderedListScores.innerHTML = '';
    commentResultEl.innerText = '';
    commentResultEl.setAttribute("style", "display:block;");
    tableEl.setAttribute("style","display:none");
    qaEl.setAttribute("style", "display:block;");
    qaGenerator();
    timeEl.setAttribute("style", "display:block");
    timer();
});




    

    