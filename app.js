//once the start button is clicked, the header is empty and only the first question with the options appear on the screen//

var startButtonEl = document.getElementById("start-button");
var containerEl = document.getElementById("container1");
var titleEl = document.getElementById("header-title");
var contentEl = document.getElementById("start-content");
var qaEl = document.getElementById("question-answer-container");
var timerContainerEl = document.getElementById("timer-container");
var formEl = document.getElementById("input-container");
var timeEl = document.querySelector(".time");
var resultPEl = document.getElementById("text-result");

var initialsEl = document.getElementById("msg");
var submitEl = document.getElementById("submit");

var tableEl = document.getElementById("highscores-container");

startButtonEl.addEventListener("click", function(){
    qaGenerator();
    initTime();
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

var index=0;


function qaGenerator() {
    let questionEl = document.getElementById("question");
    if (index < questionArray.length){
        questionEl.textContent = questionArray[index].question;
       console.log(questionArray[index].question);
        for (let i = 0; i < 4; i++) {
            let answerEl = document.getElementById("option" + (i+1));
            answerEl.textContent = questionArray[index].choices[i];
            answerEl.addEventListener("click", checkAnswer);
        }
    }
}


function checkAnswer(ev){
    var commentResultEl = document.getElementById("result-comment");
    console.log(ev);

    if (index >= questionArray.length) {
        return;
    }

    if (ev !== null) {
        console.log(ev.target.innerText);
        console.log(questionArray[index].answer);
        if (ev.target.innerText === questionArray[index].answer) {
            console.log(commentResultEl);
            commentResultEl.innerText = "Correct answer"; 
            
        }

        else {
            commentResultEl.innerText = "Wrong answer";
            secondsLeft-=15;
        }
        index++;
        

        if (index >= questionArray.length) {
            commentResultEl.innerText = " ";
            formEl.setAttribute("style", "display: block;");
            qaEl.textContent = "";
            var finalScore = timeEl.textContent
            console.log("your final score is: "+ finalScore);
            timeEl.textContent ="";
            resultPEl.textContent = " your score is " + finalScore;
            highScores(finalScore);
            
        }
    }
    qaGenerator();
}

// time setter section

var secondsLeft = 60;


function initTime(){

var timeIntervael = setInterval(function() {

    secondsLeft--;

    if (index < questionArray.length){
    timeEl.textContent = secondsLeft;
    if (secondsLeft <= 0) {
        clearInterval(timeIntervael);
        timeEl.textContent = 0;
        }
    }

    else {
    clearInterval(timeIntervael);
    console.log(timeEl);
    }
},1000);
}



// when the user clicks submit, the input will be saved in the local storage 

function highScores(score) {

            submitEl.addEventListener("click", function(){
                event.preventDefault();
               
                var initial = initialsEl.value.trim();
               
               localStorage.setItem(initial, score);

               showtableScores(initial);
               });
}

function showtableScores(initial){

    var orderedListScores = document.getElementById("table-scores");
    formEl.setAttribute("style", "display: none;");
    tableEl.setAttribute("style", "display:block;");
    var getScore = JSON.parse(localStorage.getItem(initial));
    console.log(getScore);

    
    var scoreItem = document.createElement("li");
    

    scoreItem.textContent = getScore.toString();
    orderedListScores.appendChild(scoreItem);

        
    // });

}




