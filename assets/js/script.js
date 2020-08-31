const startBtn = document.getElementById("start");
const nextBtn = document.getElementById("next");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;
//navigation buttons
startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
//starts games
function startGame() {
  startBtn.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}
//how user selects question
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove("hide");
  } else {
    startBtn.innerText = "Restart";
    startBtn.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function resetState() {
    clearStatusClass(document.body);
    nextBtn.classList.add("hide");
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
   //Questions
const questions = [
    {
        question: 'What makes a webpages skeleton',
        answers: [
            { text: 'HTML', correct: true },
            { text: 'JavaScript', correct: false },
            { text: 'CSS', correct: false},
            { text: 'Ruby', correct: false}
        ]
    },
    {
        question: 'Has this project made me bang my head against a wall?',
        answers:[
            {text: 'yes', correct:true},
            {text: 'absolutely', correct:true},
            {text: 'Of Course', correct:true},
            {text: 'Nah, coding is easy!', correct: false}
        ],
    },
     {
         question: 'Use the .classList.add to...?',
         answers:[
             {text: 'remove a class from an element',correct:false},
             {text: 'insert text into element',correct:false},
             {text: 'initialize a function', correct:false},
             {text: 'Add a class to an element',correct:true}

         ]
        },
        {
            question: 'CSS stands for?',
            answers:[
                {text: 'Cool Style Sheets', correct:false},
                {text: 'Creepy Syle Sheets', correct:false},
                {text: 'Cascading Style Sheets', correct:true},
                {text: 'Cascading Super Sayans', correct:false},
                ]
           },
           {
           question: '::after puesdo element lets you do what?',
           answers:[
               {text: 'add glow after you hover', correct:false},
               {text: 'add after effects to elements', correct:false},
               {text: 'inserts content after content of element', correct:true},
               {text: 'move an element entirely out of document flow', correct:false},
               ]
          }
];

//coutdown timer
function countdown() {
    

   var timeInterval = setInterval(function() {
        if (timeLeft >=1) {
            timerEl.textContent = timeLeft +' Seconds remaining ';
            timeLeft--;
        }
        else if ( timeLeft ===0){
            timerEl.textContent =' Test Finished ';
        }
        else{
            timerEl.textContent +'';
            clearInterval(timeInterval);
        }
    },1000);
}



var score = timeLeft;
var timeLeft = 70;

//start button
startBtn.onclick = countdown;
var timerEl = document.getElementById('countdown');