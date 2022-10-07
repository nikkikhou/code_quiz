// quiz button
var startQuizButtonEl = document.querySelector("#start-quiz-button");
startQuizButtonEl.addEventListener("click", function () {
  startQuiz();
});

// start quiz
function startQuiz() {
  var introEl = document.querySelector("#intro");
  introEl.classList.add("hide");
  var questionEl = document.querySelector("#questions");
  questionEl.classList.remove("hide");
  showQuestion();
}

// next question
function nextQuestion() {
  currentQuestionIndex++;
  showQuestion();
}

// timer
var timeLeft = 75;
var quizTimerEl = document.querySelector("#quiz-timer");
var quizTimerInterval = setInterval(function () {
  timeLeft--;
  if (timeLeft === 0) stopTime();
  quizTimerEl.innerHTML = `Time: ${timeLeft}`;
}, 1000);

// stops timer
var stopTime = function () {
  clearInterval(quizTimerInterval);
};

// subtracting time
var subtractTime = function () {
  timeLeft = timeLeft - 10;
  if (timeLeft < 0) {
    timeLeft = 0;
  }
};

// this is displaying current question to the question section.
var currentQuestionIndex = 0;
var showQuestion = function () {
  var currentQuestion = myQuestions[currentQuestionIndex];
  var questionAskedEl = document.querySelector("#questions h2");
  questionAskedEl.innerHTML = currentQuestion.question;

  // Loop through and display the possible answers
  var answerButtonsEl = document.querySelector("#answer-buttons");
  answerButtonsEl.innerHTML = "";
  for (i = 0; i < currentQuestion.options.length; i++) {
    var answerButtonEl = document.createElement("button");
    answerButtonEl.innerHTML = currentQuestion.options[i];
    answerButtonEl.classList.add("button");
    answerButtonEl.addEventListener("click", function () {
      nextQuestion();
    });
    answerButtonsEl.appendChild(answerButtonEl);
  }
};

// questions
var myQuestions = [
  {
    question: "1. What does HTML Stand for?",
    options: [
      "Hyper Transfer Machine Language",
      "Hyper Text Markup Language",
      "Hidden Text Meta List",
      "Heavy Transfer Machine List",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "2. Arrays in JavaScript can be used to store _______.",
    options: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    question:
      "3. String values must be enclosed within ______ when being assigned to variables.",
    options: ["commas", "curly brackets", "quotes", "Parenthesis"],
    answer: "curly brackets",
  },
  {
    question: "4. What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Cascading Sheet Style",
      "Commanding Sheet Style",
      "Cascading Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question:
      "5. In JavaScript, a ______ is a sequence of one or more characters that may consist of letters, numbers, or symbols?",
    options: ["color", "array", "string", "boolean"],
    answer: "string",
  },
  {
    question: "6. What does DOM stand for?",
    options: [
      "Document Object Model",
      "Dad or Mom",
      "Document Order Model",
      "Do Order Model",
    ],
    answer: "Document Object Model",
  },
  {
    question:
      "7. The condition in an if/else statement is enclosed with ______.",
    options: ["quotes", "curly brackets", "paranthesis", "square brackets"],
    answer: "paranthesis",
  },
  {
    question:
      "8. A(n) _______ is used to perform the same action multiple times in a row.",
    options: ["loop", "array", "functiont", "string"],
    answer: "loop",
  },
  {
    question:
      "9. A ________ is a set of features and rules that exist inside a software program (the application) enabling interaction with it through software?",
    options: ["CSS", "JavaScript", "HTML", "API"],
    answer: "API",
  },
  {
    question:
      "10. ______ is a form of data with only two possible values, usually true or false.",
    options: ["Function", "Boolean", "Array", "List"],
    answer: "Boolean",
  },
];
