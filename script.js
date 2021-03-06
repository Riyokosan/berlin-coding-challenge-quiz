window.onload = init();

function init() {
    var questions = [{
            question: "What is the capital of Germany?",
            image: "images/Germany.jpg",
            answers: [
                { text: "Amsterdam" },
                { text: "Berlin", isCorrect: true },
                { text: "Prague" },
            ]
        },
        {
            question: "What is the capital of Morocco?",
            image: "images/Morocco.png",
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
            image: "images/Australia.jpg",
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
            image: "images/Paraguay.png",
            answers: [
                { text: "Asunción", isCorrect: true },
                { text: "La Paz" },
                { text: "Montevideo" },
            ]
        },
        {
            question: "What is the capital of Vietnam?",
            image: "images/Vietnam.jpg",
            answers: [
                { text: "Hanoi", isCorrect: true },
                { text: "Ho Chi Minh City" },
                { text: "Phnom Penh" },
            ]
        },
        {
            question: "What is the capital of India?",
            image: "images/India.png",
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
            image: "images/Colombia.jpg",
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
            document.getElementsByClassName('question')[0].outerHTML = '';
            document.querySelector('img')[0].removeAttribute(src);
            document.getElementsByClassName('answer')[2].outerHTML = '';
            document.getElementsByClassName('answer')[1].outerHTML = '';
            document.getElementsByClassName('answer')[0].outerHTML = '';
            return;
        }
        document.getElementsByClassName('score')[0].innerHTML = score;
        document.getElementsByClassName('question')[0].innerHTML = questions[iQuestion].question;
        // document.querySelector('img')[0].setAttribute(src, image[iQuestion].image);
        var answers = document.getElementsByClassName('answer');
        for (let i = 0; i < answers.length; i++) {
            answers[i].innerHTML = questions[iQuestion].answers[i].text;
            // image[i].setElement("src", image[i]);
        }
    }

    document.addEventListener("DOMContentLoaded", function(event) {
        var answers = document.getElementsByClassName('answer');
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