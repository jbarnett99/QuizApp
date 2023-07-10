const quizData = [
    {
        question: "what is 1 + 1 ?",
        options: [4, 2, 1, 7],
        answer: 2

    },
    {

        question: "what is 2+2?",
        options: [5, 8, 4, 2],
        answer: 4

    },
    {

        question: "what is 3+3?",
        options: [6, 12, 1, 2],
        answer: 6

    },
    {

        question: "what is 4+4?",
        options: [1, 2, 4, 8],
        answer: 8

    },
    {

        question: "what is 5+5?",
        options: [5, 8, 10, 7],
        answer: 10

    },
    {

        question: "what is 6+6?",
        options: [12, 14, 16, 18],
        answer: 12

    },
    {

        question: "what is 7+7?",
        options: [14, 10, 11, 17],
        answer: 14

    },
    {

        question: "what is 8+8?",
        options: [11, 14, 16, 18],
        answer: 16

    },
    {

        question: "what is 9+9?",
        options: [9, 10, 18, 28],
        answer: 18

    },
    {

        question: "what is 10+20?",
        options: [20, 10, 40, 30],
        answer: 30

    }

];

// Access HTML elements
const questionContainer = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");
const nextButton = document.getElementById("next");
const retakeButton = document.getElementById("retake")


let currentQuestionIndex = 0;
let score = 0;
let selectedOption = 0;
retakeButton.style.display = "none";


// Load the first question
loadQuestion();

// Function to load a question
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    console.log(currentQuestion);
    console.log(questionContainer.tectContent);

    // Clear options container
    optionsContainer.innerHTML = "";

    // Create options
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", selectedAnswer);
        optionsContainer.appendChild(button);
    });
}

// Function to record the user's selection
function selectedAnswer(event) {
    selectedOption = event.target.textContent;
    console.log(selectedOption);
}

// Fuction to submit the user's final answer for review

submitButton.addEventListener("click", checkAnswer);

// Function to check the selected answer
function checkAnswer(event) {
    const currentQuestion = quizData[currentQuestionIndex];
    console.log(selectedOption);

    if (parseInt(selectedOption) === currentQuestion.answer) {
        resultContainer.textContent = "Correct!";
        score++;
    }
    else {
        resultContainer.textContent = "Wrong!";
    }


}

nextButton.addEventListener("click", nextQuestion);

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        resultContainer.textContent = null
        loadQuestion();
    } else {
        showResult();
    }
}

// Function to display the result
function showResult() {
    questionContainer.style.display = "none";
    optionsContainer.style.display = "none";
    submitButton.style.display = "none";
    resultContainer.textContent = `Your score: ${score}/${quizData.length}`;
    resultContainer.style.display = "block";
    nextButton.style.display = "none";
    retakeButton.style.display = "block"
}

retakeButton.addEventListener("click", retakeQuiz);

function retakeQuiz() {
    questionContainer.style.display = "";
    optionsContainer.style.display = "";
    submitButton.style.display = "";
    resultContainer.textContent = "none";
    resultContainer.style.display = "";
    nextButton.style.display = "";
    retakeButton.style.display = "none"

    currentQuestionIndex = "-2";
    currentQuestionIndex++;
    retakeButton.style.display = "none";
    nextQuestion();
}