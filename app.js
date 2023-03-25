// Quiz questions
const quizData = [
    {
        question: "HTML stands for -",
        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "None of these",
        correct: "c"
    },
    {
        question: "The correct sequence of HTML tags for starting a webpage is -",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Head, Title, Body",
        correct: "d"
    },
    {
        question: "HTML tags are enclosed in-",
        a: "# and #",
        b: "{ and }",
        c: "! and ?",
        d: "< and >",
        correct: "d"
    },
    {
        question: "What are the types of unordered or bulleted list in HTML?   ",
        a: "disc, square, triangle",
        b: "polygon, triangle, circle",
        c: "disc, circle, square",
        d: "All of the above",
        correct: "c"
    },
    {
        question: "An HTML program is saved by using the ____ extension.",
        a: ".ht",
        b: ".html",
        c: ".hml",
        d: "None of the above",
        correct: "b"
    }
];

// Quiz container element
const quizContainer = document.querySelector('#quiz-container');

// Result container element
const resultContainer = document.querySelector('#result-container');

// Submit button element
const submitButton = document.querySelector('#submit-btn');

// Next button element
const nextButton = document.querySelector('#next-btn');

// Quiz question index
let quizIndex = 0;

// Quiz score
let quizScore = 0;

// Show quiz questions
function showQuizQuestion() {
    // Get quiz question
    const quizQuestion = quizData[quizIndex];

    // Create quiz question HTML
        const quizQuestionHTML = `
        <h2>${quizQuestion.question}</h2>
        <label>
            <input type="radio" name="answer" value="a">
            ${quizQuestion.a}
        </label>
        <br>
        <label>
            <input type="radio" name="answer" value="b">
            ${quizQuestion.b}
        </label>
        <br>
        <label>
            <input type="radio" name="answer" value="c">
            ${quizQuestion.c}
        </label>
        <br>
        <label>
            <input type="radio" name="answer" value="d">
            ${quizQuestion.d}
        </label>
    `;

    // Add quiz question to quiz container
    quizContainer.innerHTML = quizQuestionHTML;
}

// Show quiz result
function showQuizResult() {
    // Hide quiz container
    quizContainer.style.display = 'none';

    // Show result container
    resultContainer.style.display = 'block';

    // Create quiz result HTML
    const quizResultHTML = `
        <h2>Your Quiz Result</h2>
        <p>You scored ${quizScore} out of ${quizData.length}.</p>
        <button id="reload-btn">Reload Quiz</button>
    `;

    // Add quiz result to result container
    resultContainer.innerHTML = quizResultHTML;

    // Reload quiz button element
    const reloadButton = document.querySelector('#reload-btn');

    // Add click event listener to reload quiz button
    reloadButton.addEventListener('click', () => {
        // Reset quiz index and score
        quizIndex = 0;
        quizScore = 0;

        // Show quiz questions
        showQuizQuestion();

        // Hide result container
        resultContainer.style.display = 'none';

        // Show quiz container
        quizContainer.style.display = 'block';
    });
}

// Show next quiz question
function showNextQuizQuestion() {
    // Get selected answer
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    // Check if an answer is selected
    if (!selectedAnswer) {
        alert('Please select an answer.');
        return;
    }

    // Check answer and increment score
    if (selectedAnswer.value === quizData[quizIndex].correct) {
        quizScore++;
    }

    // Increment quiz index
    quizIndex++;

    // Check if all questions have been answered
    if (quizIndex >= quizData.length) {
        // Show quiz result
        showQuizResult();
    } else {
        // Show next quiz question
        showQuizQuestion();
    }
}

// Add click event listener to submit button
submitButton.addEventListener('click', showNextQuizQuestion);

// Add click event listener to next button
nextButton.addEventListener('click', showNextQuizQuestion);

// Show first quiz question
showQuizQuestion();

