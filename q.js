// Array of questions
const questions = [
    "What type of destinations do you prefer?",
    "Do you enjoy adventure travel or relaxation?",
    "What is your ideal travel season?",
    "Do you prefer solo travel or group travel?",
    "What is your budget range for travel?",
    "Do you enjoy cultural experiences or natural landscapes?",
    "What type of accommodation do you prefer?",
    "How often do you like to travel?",
    "What is your favorite travel memory?",
    "What is your dream travel destination?"
];

// Track current question index and user responses
let currentQuestionIndex = 0;
let answers = new Array(questions.length).fill("");

// DOM elements
const questionText = document.getElementById("question-text");
const questionCounter = document.getElementById("question-counter");
const answerField = document.getElementById("answer");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");

// Function to display the current question
function showQuestion() {
    questionText.textContent = questions[currentQuestionIndex];
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    answerField.value = answers[currentQuestionIndex] || '';

    // Button visibility logic
    backBtn.disabled = currentQuestionIndex === 0;
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.style.display = "none";
        submitBtn.style.display = "inline-block";
    } else {
        nextBtn.style.display = "inline-block";
        submitBtn.style.display = "none";
    }
}

// Function to go to the next question
function nextQuestion() {
    // Save the current answer before moving to the next question
    answers[currentQuestionIndex] = answerField.value.trim();
    
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

// Function to go to the previous question
function prevQuestion() {
    // Save the current answer before moving to the previous question
    answers[currentQuestionIndex] = answerField.value.trim();

    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// Function to submit the survey
function submitSurvey() {
    // Save the last answer before submitting
    answers[currentQuestionIndex] = answerField.value.trim();

    // Redirect to the results page with answers as a URL query string
    const queryString = `?answers=${encodeURIComponent(JSON.stringify(answers))}`;
    window.location.href = 'results1.html' + queryString;
}

// Initialize by showing the first question
showQuestion();
