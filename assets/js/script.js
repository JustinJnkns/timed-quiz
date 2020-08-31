const startBtn = document.getElementById('start');
const nextButton = document.getElementById("next");
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement =  document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startBtn.addEventListener('click', startGame)



function startGame() {
    startBtn.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    questionContainerElement.classList.remove('hide')
    currentQuestionIndex = 0
 
    setNextQuestion()
}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}



function selectAnswer(){

}











const questions = [
    {
        question: 'What makes a webpages skeleton',
        answers: [
            { text: 'HTML', correct: true },
            { text: 'JavaScript', correct: false }
        ]
    }
];

















//coutdown timer
function countdown() {
    var timeLeft = 5;

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
var timeLeft = 5;

//start button
//startBtn.onclick = countdown;
var timerEl = document.getElementById('countdown');