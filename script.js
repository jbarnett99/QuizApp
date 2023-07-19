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
let questionContainer = document.getElementById("question");
let optionsContainer = document.getElementById("answers");
let submitButton = document.getElementById("submit");
let resultContainer = document.getElementById("result");
let nextButton = document.getElementById("next");
let retakeButton = document.getElementById("retake")

// Hiding the retake quiz button until the end
retakeButton.style.display = "none";
nextButton.style.display = "none";

// Setting initial variables
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let availableOption = 0;


// Load the first question
loadQuestion();

// Function to load a question
function loadQuestion() {
    nextButton.style.display = "none";
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    console.log(currentQuestion);
    console.log(questionContainer.textContent);

    // Clear options container
    optionsContainer.innerHTML = "";

    /*
        function displayQuestion(question) {
            console.log("Question:", question.content);
            console.log("Correct Answer:", question.correctAnswer);
    
            correctIndex = question.correctAnswer;
            question_element.innerText = question.content;
            for (let answer of question.answers) {
                let answer_element = document.createElement("div");
                answer_element.innerText = answer;
                answer_element.addEventListener("click", () => {
                    clearHighlight();
                    answer_element.classList.add("highlight");
                    selectedIndex = question.answers.indexOf(answer_element.innerText);
                    console.log("Selected Index:", selectedIndex);
                    nextBtn.style.display = "block";
                });
                all_answers_element.appendChild(answer_element);
            }
        }
    
        */

    // Create options
    currentQuestion.options.forEach(option => {
        console.log(option);
        let optionsDiv = document.createElement("div");
        optionsDiv.innerText = option;
        optionsDiv.addEventListener("click", selectedAnswer);
        optionsContainer.appendChild(optionsDiv);

    });
}



function clearHighlight(event) {
    for (let availableOption of optionsContainer.children) {
        availableOption.classList.remove("highlight");
    }
}

// Function to record the user's selection
function selectedAnswer(event) {
    clearHighlight();
    console.log(event);
    selectedOption = event.target.textContent;
    console.log(selectedOption);
    event.target.classList.toggle("highlight");
    console.log(selectedOption.class);
}
// Check Answer Action

submitButton.addEventListener("click", checkAnswer);

// Function to compare the selected answer to the actual answer
function checkAnswer(event) {
    const currentQuestion = quizData[currentQuestionIndex];
    console.log("Submitted answer was " + selectedOption);
    nextButton.style.display = "block";
    optionDiv.disabled = true;


    if (parseInt(selectedOption) === currentQuestion.answer) {
        resultContainer.textContent = "Correct!";
        submitButton.style.display = "none";
        score++;
    }
    else {
        resultContainer.textContent = "You were close. The correct answer is " + currentQuestion.answer;
        submitButton.style.display = "none";
    }
}

// Next Question Action

nextButton.addEventListener("click", nextQuestion);

// Function to move to the next question on button click

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        resultContainer.textContent = null
        loadQuestion();
        submitButton.style.display = "block";
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

// Retake Quiz Action
retakeButton.addEventListener("click", retakeQuiz);

// Function to start the quiz over

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
    score = "0"
    nextQuestion();

}