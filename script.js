window.onload = init();

function init() {
    var questions = [{
            question: "What is the capital of Germany?",
            src: "images/Germany.jpg",
            answers: [
                { text: "Amsterdam" },
                { text: "Berlin", isCorrect: true },
                { text: "Prague" },
            ]
        },
        {
            question: "What is the capital of Morocco?",
            src: "images/Morocco.png",
            answers: [
                { text: "Nouakchott" },
                { text: "Rabat", isCorrect: true },
                { text: "Tripoli" },
            ]
        },
        // {
        //     question: "What is the capital of Estonia?",
        //     answers: [
        //         { text: "Riga" },
        //         { text: "Tallinn", isCorrect: true },
        //         { text: "Vilnius" },
        //     ]
        // },
        {
            question: "What is the capital of Australia?",
            src: "images/Australia.jpg",
            answers: [
                { text: "Canberra", isCorrect: true },
                { text: "Melbourne" },
                { text: "Sydney" },
            ]
        },
        // {
        //     question: "What is the capital of Canada?",
        //     answers: [
        //         { text: "Ottawa", isCorrect: true },
        //         { text: "Toronto" },
        //         { text: "Vancouver" },
        //     ]
        // },
        {
            question: "What is the capital of Paraguay?",
            src: "images/Paraguay.png",
            answers: [
                { text: "Asunción", isCorrect: true },
                { text: "La Paz" },
                { text: "Montevideo" },
            ]
        },
        {
            question: "What is the capital of Vietnam?",
            src: "images/Vietnam.jpg",
            answers: [
                { text: "Hanoi", isCorrect: true },
                { text: "Ho Chi Minh City" },
                { text: "Phnom Penh" },
            ]
        },
        {
            question: "What is the capital of India?",
            src: "images/India.png",
            answers: [
                { text: "Bangalore" },
                { text: "Bombay" },
                { text: "New Delhi", isCorrect: true },
            ]
        },
        // {
        //     question: "What is the capital of Iraq?",
        //     answers: [
        //         { text: "Baghdad", isCorrect: true },
        //         { text: "Damas" },
        //         { text: "Tehran" },
        //     ]
        // },
        {
            question: "What is the capital of Colombia?",
            src: "images/Colombia.jpg",
            answers: [
                { text: "Bogotá", isCorrect: true },
                { text: "Caracas" },
                { text: "Quito" },
            ]
        },
    ];
    var score = 0;
    var iQuestion = 0;

    function updateQuestionAndScore() {
        if (iQuestion >= questions.length) {
            document.querySelector('#question')[0].outerHTML = '';
            document.querySelector('img')[0].removeAttribute(src);
            document.querySelector('.answer')[2].outerHTML = '';
            document.querySelector('.answer')[1].outerHTML = '';
            document.querySelector('.answer')[0].outerHTML = '';
            return;
        }
        document.querySelector('#score')[0].innerHTML = score;
        document.querySelector('#question')[0].innerHTML = questions[iQuestion].question;
        var answers = document.querySelector('.answer');
        for (let i = 0; i < answers.length; i++) {
            answers[i].innerHTML = questions[iQuestion].answers[i].text;
        }
    }

    document.addEventListener("DOMContentLoaded", function(event) {
        var answers = document.querySelector('.answer');
        for (let i = 0; i < answers.length; i++) {
            answers[i].onclick = function() {
                if (questions[iQuestion].answers[i].isCorrect) {
                    score++;
                }
                iQuestion++;
                updateQuestionAndScore();
            }
        }
        updateQuestionAndScore();
    });
}