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
});