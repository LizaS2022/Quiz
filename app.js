var headingEl = document.createElement("header")
document.body.appendChild(headingEl);



var titleEl = document.createElement("h1");
titleEl.innerHTML = "Code Quiz";
headingEl.appendChild(titleEl);


var mainEl = document.createElement("main");
document.body.appendChild(mainEl);

var paragraphEl = document.createElement("p");
paragraphEl.innerHTML = "try the challenge - 60 seconds to answer as much questions as possible";
mainEl.appendChild(paragraphEl);

var buttonEl = document.createElement("button");
buttonEl.innerHTML = "start the quiz";
mainEl.appendChild(buttonEl);


var questionArray = [
    {
        question: "How many colors in the rainbow?",
        choices: ["One","Seven","Six","Eight"],
        answer: "7",
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



// Creating questions and answers elements on the browser
// let containerEl = document.createElement("div");
// document.body.appendChild(containerEl);

let containerEl = document.createElement("div");
document.body.appendChild(containerEl);


function qaBuilder() {

   let i =0;
    while (questionArray.length > i) { 
    
    let divEl = document.createElement("div");
    divEl.setAttribute("class", "setQA");
    containerEl.appendChild(divEl);

    

    let h2El = document.createElement("h2");
    h2El.innerHTML = questionArray[i].question;
    divEl.appendChild(h2El);

    let listEl = document.createElement("ol");
    divEl.appendChild(listEl);
    
    let li1 = document.createElement("li");
    li1.innerHTML= questionArray[i].answer1;
    listEl.appendChild(li1);

    let li2 = document.createElement("li");
    li2.innerHTML= questionArray[i].answer2;
    listEl.appendChild(li2);

    let li3 = document.createElement("li");
    li3.innerHTML = questionArray[i].answer3;
    listEl.appendChild(li3);

    let li4 = document.createElement("li");
    li4.innerHTML = questionArray[i].answer4;
    listEl.appendChild(li4);

// IDEA: TO DO ON CLICK EVEN LISTNER WHEN CLICK ON LI ELEMENT IS SWITCHING TO THE NEXT QUESTION

   

   i++;
   
 }
}

qaBuilder();


















// Setting timer 

// var timeEl = document.querySelector(".time");

// var mainel = document.querySelector("main");

// var secondLeft = 60;

// function setTime() {
//     var timeInterval = setInterval(function() {
//         secondLeft --;
//         timeEl.textContent = secondLeft;

//         if (secondLeft === 0) {
//             clearInterval(timeInterval);
//             sendMessage();
//         }
        
//     },1000);
// }

// // function to append a message 

// function sendMessage() {
//     timeEl.textContent = " ";
    
//     var scoreEl = document.createElement("div");
//     scoreEl.textContent = "Tree Score";
//     mainel.appendChild(scoreEl);
// }

// setTime();

