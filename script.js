const questions = [
    {
        question: "What is sneaker reselling?",
        options: [
            "Buying limited-edition sneakers and selling them at higher prices after they sell out.",
            "Designing and manufacturing your own sneakers to sell."
        ],
        answer: 0
    },
    {
        question: "Why did the sneaker reselling market boom during COVID-19?",
        options: [
            "Because people had more disposable income and time due to lockdowns and stimulus checks.",
            "Because sneaker prices dropped significantly during the pandemic."
        ],
        answer: 0
    },
    {
        question: "What happens when a market becomes oversaturated?",
        options: [
            "It becomes easier for new entrepreneurs to enter and succeed.",
            "It becomes harder to acquire customers due to high competition."
        ],
        answer: 1
    },
    {
        question: "Why should entrepreneurs focus on expanding markets?",
        options: [
            "Expanding markets offer untapped potential and greater value creation.",
            "Contracting markets have less competition."
        ],
        answer: 0
    },
    {
        question: "What is a 'fad market'?",
        options: [
            "A market that grows and contracts rapidly due to temporary trends.",
            "A market that remains stable over a long period."
        ],
        answer: 0
    },
    {
        question: "What lesson did the author learn from the sneaker reselling market?",
        options: [
            "That staying in a contracting market is the best strategy.",
            "The importance of moving on to new opportunities in expanding markets."
        ],
        answer: 1
    },
    {
        question: "How did stimulus checks affect the sneaker reselling market?",
        options: [
            "They decreased consumer spending on sneakers.",
            "They increased disposable income, boosting sneaker sales."
        ],
        answer: 1
    },
    {
        question: "What is one sign of a contracting market?",
        options: [
            "An increase in demand and profit margins.",
            "A decrease in demand and higher competition for fewer customers."
        ],
        answer: 1
    },
    {
        question: "Why is human capital important in entrepreneurship?",
        options: [
            "Because utilizing it efficiently maximizes economic value.",
            "Because it's unlimited and can be wasted without consequence."
        ],
        answer: 0
    },
    {
        question: "What is the author's next planned industry to enter?",
        options: [
            "Artificial intelligence.",
            "Continuing in the sneaker reselling market."
        ],
        answer: 0
    }
];

let currentQuestion = 0;

document.addEventListener('DOMContentLoaded', () => {
    showQuestion();

    document.getElementById('option1').addEventListener('click', () => {
        checkAnswer(0);
    });

    document.getElementById('option2').addEventListener('click', () => {
        checkAnswer(1);
    });
});

function showQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById('question').innerText = questions[currentQuestion].question;
        document.getElementById('option1').innerText = questions[currentQuestion].options[0];
        document.getElementById('option2').innerText = questions[currentQuestion].options[1];
        document.getElementById('result').innerText = "";
    } else {
        document.getElementById('quiz').innerHTML = "<p>Quiz Completed! Thank you for participating.</p>";
    }
}

function checkAnswer(selectedOption) {
    const result = document.getElementById('result');
    if (selectedOption === questions[currentQuestion].answer) {
        result.innerText = "Correct!";
        result.style.color = "green";
    } else {
        result.innerText = "Incorrect.";
        result.style.color = "red";
    }
    currentQuestion++;
    setTimeout(showQuestion, 1000);
}
