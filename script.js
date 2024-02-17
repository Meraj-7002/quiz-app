//Data in Array
const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
    },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

//UI variables
let questionTitle = document.getElementById("question");
let answerA = document.getElementById("a_text");
let answerB = document.getElementById("b_text");
let answerC = document.getElementById("c_text");
let answerD = document.getElementById("d_text");
let answerTexts = document.querySelectorAll(".answer");
let submit = document.getElementById("submit");
let quiz = document.getElementById("quiz");

//Count Variable
let questionCount = 0;
let score = 0;

// Function for deSelect All;
function deSelected() {
  answerTexts.forEach((answer) => {
    answer.checked = false;
  });
}

// Function for Selected answer;
function getSelected() {
  let result;
  answerTexts.forEach((answer) => {
    if (answer.checked)  result = answer.id;
  });

  return result;
}

// Function To Load question
function loadQuestions() {
  deSelected();
  const currectQuizData = quizData[questionCount];
  questionTitle.innerText = currectQuizData.question;
  answerA.innerText = currectQuizData.a;
  answerB.innerText = currectQuizData.b;
  answerC.innerText = currectQuizData.c;
  answerD.innerText = currectQuizData.d;
}

loadQuestions();
//Function for Submit
submit.addEventListener("click", () => {
  const answer = getSelected();
    if (answer) {
      if (quizData[questionCount].correct === answer) score++;
        questionCount++;
        console.log(questionCount)
        if (questionCount < quizData.length) 
            loadQuestions();
             else {
    quiz.innerHTML = `
        <h2>You answered ${score} / ${quizData.length} questions correctly.</h2>
        <button id='submit' onClick='history.go(0)'>Play Again</button>
        `;
  }
}});
