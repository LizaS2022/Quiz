//once the start button is clicked, the header is empty and only the first question with the options appear on the screen//

var startButtonEl = document.getElementById("start-button");
var containerEl = document.getElementById("container-page1");
var titleEl = document.getElementById("header-title");
var contentEl = document.getElementById("start-content");
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
var index = 0;
var secondsLeft = 60;


function timer(){
    console.log(index);
    console.log(secondsLeft);
    var timeIntervael = setInterval(function() {
    secondsLeft--;
    if (index < questionArray.length){
        timeEl.textContent = secondsLeft;
        // console.log("seconds left: "+ secondsLeft);
    
    if (secondsLeft <= 0) {
        clearInterval(timeIntervael);
        timeEl.textContent = 0;
        }
    }
},1000);
}

for (var i = 0; i < 4; i++) {
    let answerEl = document.getElementById("option" + (i+1));
    answerEl.addEventListener("click", function(e){
    checkAnswer(e);
    index++;
    if (index === questionArray.length){
        commentResultEl.setAttribute("style", "display:none;");
        formEl.setAttribute("style", "display: block;");
        qaEl.setAttribute("style", "display: none;");
        finalScore();
        }
    else {
        qaGenerator();}
     });
    }
startButtonEl.addEventListener("click", function(){

    qaGenerator();
    
    timer();
    qaEl.setAttribute("style", "display:block");
    containerEl.setAttribute("style", "display:none");
});
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


function qaGenerator() {
    // console.log("Generating" + index);
    if (index < questionArray.length){
        questionEl.textContent = questionArray[index].question;
    //    console.log(questionArray[index].question);
        for (let i = 0; i < 4; i++) {
            let answerEl = document.getElementById("option" + (i+1));
            answerEl.textContent = questionArray[index].choices[i];
            // console.log(answerEl);
        }
    }
}


function checkAnswer(e){
    
    if (index >= questionArray.length) {
        return;
    }

    if (e !== null) {
        console.log(e.target);
        // console.log("the event target inner text is: " + ev.target.innerText);
        // console.log("the options are : " + questionArray[index].answer);
        if (e.target.innerText === questionArray[index].answer) {
            commentResultEl.innerText = "Correct answer"; 
            // console.log(commentResultEl);
            // console.log(index);
        }
        else {
            commentResultEl.innerText = "Wrong answer";
            // console.log("the answer is: " + commentResultEl);
            secondsLeft-=15;
        }
    }
}



function finalScore() {
    var finalScore = timeEl.textContent;
    // console.log("your final score is: "+ finalScore);
    timeEl.setAttribute("style", "display:none");
    resultPEl.textContent = " your score is " + finalScore;
    highScores(finalScore);
}


// when the user clicks submit, the input will be saved in the local storage 

function highScores(score) {

            submitEl.addEventListener("click", function(){
                event.preventDefault();
                var initial = initialsEl.value.trim();
                // console.log(initial);
               localStorage.setItem(initial, score);
               showtableScores(initial);
               });
}

function showtableScores(initial){


    console.log(orderedListScores);
    formEl.setAttribute("style", "display: none;");
    tableEl.setAttribute("style", "display:block;");
    // console.log(localStorage.getItem(initial));
    var getScore = JSON.parse(localStorage.getItem(initial));
    // console.log(getScore);

    var scoreItem = document.createElement("li");
    // console.log(scoreItem);
    
    scoreItem.textContent = getScore.toString();
    orderedListScores.appendChild(scoreItem);
    // console.log(orderedListScores);
}


// redo quiz

var redoQuiz = document.getElementById("redo-quiz");
// console.log("the redo button shows: " +redoQuiz);
redoQuiz.addEventListener("click", function(){
    index = 0;
    secondsLeft = 60;
   
    orderedListScores.innerHTML = '';
    tableEl.setAttribute("style","display:none");
   
    qaEl.setAttribute("style", "display:block;");
    qaGenerator();

    
    timeEl.setAttribute("style", "display:block");
    timer();
    checkAnswer();
});




    

    