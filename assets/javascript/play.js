document.addEventListener('DOMContentLoaded', () => {
    // Define the quiz questions
    const quizQuestions = [
        {
            question: "What is the capital of France?",
            answers: [
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false },
                { text: "Paris", correct: true },
                { text: "Rome", correct: false }
            ]
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: [
                { text: "Earth", correct: false },
                { text: "Mars", correct: true },
                { text: "Jupiter", correct: false },
                { text: "Venus", correct: false }
            ]
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            answers: [
                { text: "Harper Lee", correct: true },
                { text: "J.K. Rowling", correct: false },
                { text: "Mark Twain", correct: false },
                { text: "Ernest Hemingway", correct: false }
            ]
        },
        {
            question: "What is the largest mammal in the world?",
            answers: [
                { text: "Elephant", correct: false },
                { text: "Blue Whale", correct: true },
                { text: "Giraffe", correct: false },
                { text: "Great White Shark", correct: false }
            ]
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            answers: [
                { text: "Oxygen", correct: true },
                { text: "Gold", correct: false },
                { text: "Osmium", correct: false },
                { text: "Oganesson", correct: false }
            ]
        },
        {
            question: "Who painted the Mona Lisa?",
            answers: [
                { text: "Vincent van Gogh", correct: false },
                { text: "Pablo Picasso", correct: false },
                { text: "Leonardo da Vinci", correct: true },
                { text: "Claude Monet", correct: false }
            ]
        },
        {
            question: "What is the freezing point of water?",
            answers: [
                { text: "0 degrees Celsius", correct: true },
                { text: "32 degrees Celsius", correct: false },
                { text: "100 degrees Celsius", correct: false },
                { text: "50 degrees Celsius", correct: false }
            ]
        },
        {
            question: "In which year did the Titanic sink?",
            answers: [
                { text: "1912", correct: true },
                { text: "1905", correct: false },
                { text: "1915", correct: false },
                { text: "1920", correct: false }
            ]
        },
        {
            question: "What is the currency of Japan?",
            answers: [
                { text: "Yen", correct: true },
                { text: "Won", correct: false },
                { text: "Dollar", correct: false },
                { text: "Peso", correct: false }
            ]
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Carbon Dioxide", correct: true },
                { text: "Nitrogen", correct: false },
                { text: "Hydrogen", correct: false }
            ]
        },
        {
            question: "Who was the first President of the United States?",
            answers: [
                { text: "George Washington", correct: true },
                { text: "Thomas Jefferson", correct: false },
                { text: "Abraham Lincoln", correct: false },
                { text: "John Adams", correct: false }
            ]
        },
        {
            question: "Which planet is known for its rings?",
            answers: [
                { text: "Jupiter", correct: false },
                { text: "Saturn", correct: true },
                { text: "Neptune", correct: false },
                { text: "Uranus", correct: false }
            ]
        },
        {
            question: "What is the smallest country in the world?",
            answers: [
                { text: "Monaco", correct: false },
                { text: "Vatican City", correct: true },
                { text: "San Marino", correct: false },
                { text: "Nauru", correct: false }
            ]
        },
        {
            question: "Which musical instrument has 88 keys?",
            answers: [
                { text: "Guitar", correct: false },
                { text: "Piano", correct: true },
                { text: "Violin", correct: false },
                { text: "Drums", correct: false }
            ]
        },
        {
            question: "What is the largest planet in our solar system?",
            answers: [
                { text: "Earth", correct: false },
                { text: "Mars", correct: false },
                { text: "Jupiter", correct: true },
                { text: "Saturn", correct: false }
            ]
        },
        {
            question: "Which famous scientist developed the theory of relativity?",
            answers: [
                { text: "Isaac Newton", correct: false },
                { text: "Albert Einstein", correct: true },
                { text: "Nikola Tesla", correct: false },
                { text: "Galileo Galilei", correct: false }
            ]
        }
    ];
    let currentQuestionIndex = 0;
    let score = 0;
    let playerName = "";
    let shuffledQuestions = []; // Declare shuffledQuestions at a higher scope
    let selectedQuestions = []; // To hold the selected questions for the quiz

    // Shuffle the quiz questions
    function shuffleQuestions(questions) {
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }
        return questions;
    }


    // Get elements from the DOM
    const startContainer = document.getElementById('start-container');
    const quizContainer = document.getElementById('quiz-container');
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('next-button');
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');
    const restartButton = document.getElementById('restart-button');
    const playerNameResult = document.getElementById('player-name-result');
    const startButton = document.getElementById('start-button');
    const playerNameInput = document.getElementById('player-name');

     // Function to start the quiz
     function startQuiz() {
        playerName = playerNameInput.value.trim(); // Get the player's name
        if (!playerName) {
            alert("Please enter your name!"); // Alert if name is empty
            return;
        }
        currentQuestionIndex = 0;
        score = 0;
        nextButton.classList.add('hidden');
        resultElement.classList.add('hidden');
        feedbackElement.classList.add('hidden'); // Hide feedback at the start
        startContainer.classList.add('hidden'); // Hide start container
        quizContainer.classList.remove('hidden'); // Show quiz container
        // Shuffle the questions before starting the quiz
        shuffledQuestions = shuffleQuestions([...quizQuestions]); // Assign shuffled questions to global variable

        // Select only 5 questions
        selectedQuestions = shuffledQuestions.slice(0, 5); // Get the first 5 shuffled questions
 
        // Show the first question
        showQuestion(selectedQuestions[currentQuestionIndex]);
 
    };

    // Function to show a question
    function showQuestion(question) {
        questionElement.innerText = question.question;
        answersElement.innerHTML = '';
        feedbackElement.classList.add('hidden'); // Hide feedback when showing new question
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('answer-button');
            button.addEventListener('click', () => selectAnswer(answer));
            answersElement.appendChild(button);
        });
    }


     // Function to restart the quiz
     function restartQuiz() {
        startContainer.classList.remove('hidden');
        resultElement.classList.add('hidden');
        playerNameInput.value = ""; // Clear the player name input
    }

});